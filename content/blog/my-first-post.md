# The "Digital Twin" Experiment: How I Bridged the Gap Between Modern Web Tech and Embedded Hardware

![Smart Office Architecture Placeholder](https://placehold.co/1200x600/png?text=Smart+Office+Architecture)

**By [Your Name]**  
_Computer Science Student & Full-Stack Researcher_

---

When I first started looking into "IoT" (Internet of Things) for my thesis, I noticed a frustrating dichotomy. I saw either polished consumer products like Philips Hue—closed ecosystems I couldn't tinker with—or messy tangles of Arduino wires that only worked when I held them at a specific angle.

I wanted to find the middle ground. My research question was simple, but ambitious:

> **"How can I apply modern, type-safe software engineering principles—the kind I use in scalable web apps—to the unpredictable world of embedded hardware?"**

I didn't just want to blink an LED. I wanted to build **Smart Office**: a distributed system where I could control a physical environment using a high-performance "Digital Twin" architecture. I wanted to connect a Next.js dashboard to a fleet of Raspberry Pi micro-controllers, not with loose REST APIs, but with real-time, bi-directional, type-safe synchronization.

Here is the story of how I built it, the specific technologies I chose, and the "Subscribe & Sync" protocol I had to invent to make it work.

---

## 1. Why I Chose Full-Stack Type Safety

In my previous projects, I found that IoT often fails at the **interface** layer. I would send a JSON payload like `{ "on": true }` to a device, but the device secretly expected `{ "status": 1 }`. The system would break, and I'd spend hours digging through logs to find a typo.

For this thesis, I refused to accept that fragility. I decided to build my entire stack around **Type Safety**.

### My Tech Stack Selection

- **Next.js (React Framework)**: I needed a reactive, high-performance dashboard that felt professional, not like a prototype.
- **tRPC (TypeScript Remote Procedure Call)**: This was my absolute favorite tool. It allowed me to share _types_ directly between my backend and frontend. If I decided to rename a device property from `isOn` to `isActive` in my database schema, my frontend code immediately threw a build error. I knew my code was broken _before_ I even ran it.
- **Prisma & MongoDB**: I chose MongoDB for its flexibility, but I accessed it through Prisma to enforce a strict schema on my data.
- **Python (Asyncio)**: On the Raspberry Pi 4 side, I stuck with Python because libraries like `RPi.GPIO` are the gold standard. But I wrapped it all in `asyncio` to match the asynchronous nature of the web.

---

## 2. How I Modeled the "Digital Twin"

One of the first challenges I faced was Data Modeling. I realized quickly that a "Device" isn't just a row in a table; it's a physical object with a location, a type (Light, Thermostat, Blinds), and specific capabilities.

I decided to use a document-oriented approach with MongoDB, which fit the hierarchical nature of my "Floor -> Group -> Device" structure perfectly.

### My Schema Design

Here is a snippet of the `schema.prisma` file I designed. You can see how I mapped physical attributes directly to the database:

```prisma
model Device {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  type      String   // "light", "socket", "thermostat"

  // The "Digital Twin" State
  isOn      Boolean  @default(false)
  value     String?  // e.g., "24.5" for temperature

  // Physical Location Mapping
  floorId   String?  @db.ObjectId
  floor     Floor?   @relation(fields: [floorId], references: [id])
  positionX Float?   // 0-100% on the SVG floor plan
  positionY Float?   // 0-100% on the SVG floor plan
}
```

I specifically added `positionX` and `positionY` as percentages so I could overlay devices onto any SVG floor plan. I built a custom "Drag and Drop" editor in the dashboard, allowing me to move a switch on the screen and have the database automatically update its coordinate space.

---

## 3. Inventing the "Subscribe & Sync" Protocol

The hardest part of this thesis wasn't the database—it was the **Real-Time Synchronization**.

In my early prototypes, I simply sent a `TOGGLE` command to the Pi whenever a button was clicked. But I soon realized: _What if the Pi is offline? What if it restarts?_ The state would drift, and my dashboard would be lying to the user.

To solve this, I completely pivoted my architecture. I moved away from "Command-Based" control to a **"State-Based" (Digital Twin)** approach. I decided that the Database is the single source of truth, and the hardware is just a _reflection_ of that truth.

I implemented a custom synchronization protocol over WebSockets.

### Phase A: The Subscription Handshake

I wrote the backend logic so that when a Raspberry Pi connects, it doesn't just listen for _new_ commands. It immediately requests a state dump.

**My Server-Side Logic (TypeScript/tRPC):**

```typescript
// src/server/api/routers/live.ts

onCommand: publicProcedure.input(z.object({ deviceId: z.string() })).subscription(async ({ input, ctx }) => {
  // 1. I fetch the "Truth" from MongoDB
  const device = await ctx.prisma.device.findUnique({ where: { id: input.deviceId } });

  return observable((emit) => {
    // 2. IMMEDIATE SYNC: I force the hardware to match the DB
    if (device) {
      emit.next({
        command: "SYNC",
        value: device.isOn ? 1 : 0,
      });
    }

    // 3. I listen for future changes to keep them in sync
    eventEmitter.on("deviceCommandIssued", (data) => emit.next(data));
  });
}),
```

### Phase B: The Hardware Reaction

On the Python side, I had to be careful. I programmed the client to handle `SYNC` commands differently than user interactions. When I receive a `SYNC` command, I update the hardware state _silently_, without reporting it back to the server. This prevented the dreaded "Infinite Feedback Loop" I encountered during testing, where the server told the client to turn on, the client turned on and told the server, which then told the client to turn on again.

**My Client-Side Logic (Python):**

```python
# raspberry-pi/client.py

async def execute_local_command(self, device, command, value):
    if command == "SYNC":
        # Authoritative state override
        device.is_on = bool(value)
        GPIO.output(device.gpio_pin, GPIO.HIGH if device.is_on else GPIO.LOW)
        print(f"   ► [SYNC] I forced state to {device.is_on}")
        # Note: I do NOT report back here!
```

---

## 4. Battling the "Ghost Device"

One specific issue I battled was what I called the "Ghost Device."

During one of my stress tests, I unplugged the WiFi router and plugged it back in. To my dismay, the Python script thought it was still connected to the WebSocket, but the server had already dropped the connection. My dashboard showed the device as "Online," but my commands were vanishing into the void.

**My Solution:**
I realized I couldn't trust the socket. I had to implement a robust heartbeat and reconnection layer in Python using `asyncio`. I moved away from simple blocking sockets to an asynchronous event loop that manages three distinct tasks:

1.  **Command Listener**: Waiting for server instructions.
2.  **Sensor Reporter**: Periodically reading the DS18B20 temperature sensor and pushing data up.
3.  **Connection Watchdog**: actively pinging the server and forcing a full script reload if the ping fails.

This resilience meant my system became "self-healing." I could cut the power, cut the network, or crash the server, and within 5 seconds of restoration, my Smart Office automatically re-synced to its correct state.

---

## 5. Visualizing My Work

The final piece of the puzzle was the UI. A list of switches is boring, and I wanted my thesis to look impressive.

I built a **Vector-Based Floor Plan Editor** using `Fabric.js`. Using my Next.js frontend, I can:

1.  Upload a raw SVG file of an office layout.
2.  Drag "Device Nodes" (representing the physical LEDs) directly onto the map.
3.  Save the coordinates to MongoDB.

When I visit the "View" page, the icons are overlaid on the map. Clicking an icon on the screen sends the WebSocket command, updates the database, triggers my "Digital Twin" sync, and milliseconds later, the physical LED on the Raspberry Pi lights up. Watching that happen for the first time felt like magic.

---

## Conclusion

This research started as a way for me to learn Next.js, but it turned into a comprehensive study of distributed systems, state management, and the complexities of the physical world.

By treating the hardware not as a dumb accessory but as a first-class citizen in a type-safe architecture, I was able to build a system that is robust, scalable, and surprisingly resilient. It bridges the gap between the clean abstractions of software and the messy reality of hardware, proving that with the right architecture, I really could have the best of both worlds.

_The source code for this project is available on GitHub._
