import Link from 'next/link'

export default function SmartOfficePost() {
  return (
    <div className="blog-content">
      {/* Intro */}
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        Most smart office dashboards feel like glorified control panels: you
        click a button… and <em>hope</em> something happens.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        For this project, I wanted to build something different: a{' '}
        <strong>SaaS-style Smart Office platform</strong> that doesn’t just show
        device states, but truly feels <em>alive</em> — real-time synced, easy
        to manage, and visualized on an interactive floor plan.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        This post explains what I built, how it works under the hood, and what I
        learned while developing it.
      </p>

      {/* Home Dashboard Image */}
      <div className="my-8">
        <img
          src="/assets/blogs/home.png"
          alt="Smart Office Home Dashboard"
          className="border-border w-full rounded-lg border shadow-md"
        />
        <p className="text-muted-foreground mt-2 text-center text-sm italic">
          Smart Office home dashboard showing real-time device controls and
          sensor readings
        </p>
      </div>

      <hr className="border-border my-12" />

      {/* What I built */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        What I built
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        <strong>Smart Office</strong> is a full-stack IoT platform where you
        can:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">Control devices like lights (toggle ON/OFF)</li>
        <li className="pl-2">
          View sensor readings like temperature + humidity
        </li>
        <li className="pl-2">Manage devices and groups via a clean UI</li>
        <li className="pl-2">
          Place devices on a <strong>Floor Plan</strong> (visualization)
        </li>
        <li className="pl-2">
          Track everything via <strong>Logs</strong> (activity + readings)
        </li>
        <li className="pl-2">
          Schedule actions automatically (timed triggers)
        </li>
        <li className="pl-2">
          Control access using <strong>Users + Roles</strong>
        </li>
        <li className="pl-2">
          Connect real devices through <strong>MQTT</strong> + an IoT edge layer
        </li>
      </ul>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        The goal was to make something that feels like a real product: not just
        a demo screen, but an actual system you could install and use.
      </p>

      <hr className="border-border my-12" />

      {/* Why I built it */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        Why I built it
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        This project was built as part of a school research project. The central
        research question was:
      </p>

      <blockquote className="border-muted-foreground/30 bg-muted/30 text-foreground/80 my-8 border-l-4 py-4 pr-4 pl-6 font-serif text-lg leading-relaxed italic">
        "How can Next.js and a tRPC-based API be used to develop a robust and
        performant real-time dashboard that allows users to collaborate on
        managing smart devices in an office building?"
      </blockquote>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        This gave me the opportunity to combine multiple areas I enjoy working
        in:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">
          modern web UI (<strong>Next.js</strong>)
        </li>
        <li className="pl-2">
          real-time systems (<strong>WebSockets</strong>)
        </li>
        <li className="pl-2">
          IoT communication (<strong>MQTT</strong>)
        </li>
        <li className="pl-2">
          database modeling (<strong>Prisma + MongoDB</strong>)
        </li>
        <li className="pl-2">system design and architecture</li>
      </ul>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        And importantly: I wanted it to be{' '}
        <strong>beginner-friendly and usable</strong>, not only technically
        correct.
      </p>

      <hr className="border-border my-12" />

      {/* System architecture */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        System architecture (high-level)
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        The project is built as a layered system:
      </p>

      <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold">
        1) UI layer (Next.js dashboard)
      </h3>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        The user interacts with a dashboard containing pages like:
      </p>
      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">Home / Dashboard</li>
        <li className="pl-2">Devices</li>
        <li className="pl-2">Groups</li>
        <li className="pl-2">Floor Plan</li>
        <li className="pl-2">Logs</li>
        <li className="pl-2">Schedules</li>
        <li className="pl-2">Users / Roles / Settings</li>
      </ul>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        The UI updates immediately as events happen (device toggles, sensor
        updates, logs).
      </p>

      <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold">
        2) Central backend layer (Node.js + Prisma)
      </h3>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        The backend handles:
      </p>
      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">database operations</li>
        <li className="pl-2">role-based access control</li>
        <li className="pl-2">device metadata</li>
        <li className="pl-2">schedules</li>
        <li className="pl-2">logs storage</li>
        <li className="pl-2">real-time updates to the UI</li>
      </ul>

      <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold">
        3) Real-time layer (WebSocket server)
      </h3>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        Instead of forcing the frontend to constantly refresh, changes are
        pushed instantly.
      </p>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        Whenever something changes (device status / new reading), clients update
        in real-time.
      </p>

      <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold">
        4) IoT layer (MQTT broker + bridge)
      </h3>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        To talk to real devices, I integrated MQTT:
      </p>
      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">devices publish readings and statuses</li>
        <li className="pl-2">the server publishes control commands</li>
        <li className="pl-2">
          the MQTT bridge translates between MQTT messages and the app state
        </li>
      </ul>

      <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold">
        5) Database (MongoDB)
      </h3>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        All state and history is stored in MongoDB via Prisma:
      </p>
      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">users & roles</li>
        <li className="pl-2">devices & groups</li>
        <li className="pl-2">logs (events + readings)</li>
        <li className="pl-2">schedules</li>
      </ul>

      <hr className="border-border my-12" />

      {/* Floor Plan visualization */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        The "Digital Twin" concept — Floor Plan visualization
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        One of the features I'm most proud of is the{' '}
        <strong>Floor Plan view</strong>.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        Instead of listing devices in a boring table, you can:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">create a floor / level</li>
        <li className="pl-2">draw or upload a floor plan (SVG)</li>
        <li className="pl-2">place devices/groups visually on the map</li>
        <li className="pl-2">control them directly from the layout</li>
      </ul>

      {/* Floor Plan Image */}
      <div className="my-8">
        <img
          src="/assets/blogs/floorplan.png"
          alt="Smart Office Floor Plan"
          className="border-border w-full rounded-lg border shadow-md"
        />
        <p className="text-muted-foreground mt-2 text-center text-sm italic">
          Interactive floor plan with device placement and real-time control
        </p>
      </div>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        That makes the UI feel like a{' '}
        <strong>digital representation of a real office space</strong>, which is
        exactly what a Digital Twin should be.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        It's also a UX upgrade: users immediately understand where things are.
      </p>

      <hr className="border-border my-12" />

      {/* Real-time sync */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        Real-time sync: making the system feel "alive"
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        The platform uses WebSockets so the UI updates instantly.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        Examples:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">
          toggle a light → the UI updates + an event appears in Logs
        </li>
        <li className="pl-2">
          a sensor publishes new readings → dashboard tiles update live
        </li>
        <li className="pl-2">
          changes made in one browser are reflected in others
        </li>
      </ul>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        This sounds “simple”, but it’s one of the hardest parts to get right:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">you need consistent state</li>
        <li className="pl-2">you need predictable events</li>
        <li className="pl-2">you need to avoid UI desync bugs</li>
        <li className="pl-2">
          you need logs that reflect truth, not “optimistic UI lies”
        </li>
      </ul>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        I spent a lot of time making sure the system behaves the same every
        time, even when things disconnect or reconnect.
      </p>

      <hr className="border-border my-12" />

      {/* Roles & permissions */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        Roles & permissions (a real-world requirement)
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        In real buildings, not everyone should be able to do everything.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        So Smart Office includes:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">
          <strong>User roles</strong> (Admin / Level 1 / Level 2 / User)
        </li>
        <li className="pl-2">
          <strong>Allowed Roles per device</strong>
        </li>
        <li className="pl-2">ability to create custom roles</li>
      </ul>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        This matters because it forces the platform to behave like a real
        system: access control isn’t optional in production.
      </p>

      <hr className="border-border my-12" />

      {/* Scheduling automation */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        Scheduling automation
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        Users can schedule actions like:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">turning on lights at a specific time</li>
        <li className="pl-2">running device commands later</li>
      </ul>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        This adds real business value because automation is often the main
        reason people want “smart” systems in the first place.
      </p>

      <hr className="border-border my-12" />

      {/* Logs */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        Logs: observability and debugging
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        A big problem with IoT systems is that when something goes wrong… you
        don’t know <em>why</em>.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        That’s why Logs are part of the product, not an afterthought.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        Logs show:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">type (DEVICE / SENSOR)</li>
        <li className="pl-2">source</li>
        <li className="pl-2">action/event name (toggle, reading, etc.)</li>
        <li className="pl-2">value changes (OFF → ON)</li>
        <li className="pl-2">time of event</li>
      </ul>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        This makes debugging much easier and makes the whole platform more
        trustworthy.
      </p>

      <hr className="border-border my-12" />

      {/* Challenges */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        Challenges I ran into
      </h2>

      <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold">
        1. Defining the "source of truth"
      </h3>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        In IoT you always have this question:
      </p>
      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">is the device state coming from the UI?</li>
        <li className="pl-2">from the database?</li>
        <li className="pl-2">from the MQTT message?</li>
        <li className="pl-2">from the physical device itself?</li>
      </ul>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        To keep things stable, the backend acts as the consistent “brain” and
        publishes events to clients.
      </p>

      <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold">
        2. Keeping UI + MQTT + DB consistent
      </h3>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        Race conditions and out-of-order updates can get messy fast.
      </p>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        So I designed the system around predictable events and logs, and made
        sure the frontend only reacts to real events.
      </p>

      <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold">
        3. Making it feel like a product
      </h3>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        It’s easy to build a prototype that only works for the developer.
      </p>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        It’s harder to build something where a beginner can:
      </p>
      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">install it on a clean PC</li>
        <li className="pl-2">open the dashboard</li>
        <li className="pl-2">
          understand what to do without explaining it in person
        </li>
      </ul>
      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        So I also wrote documentation and designed flows that make sense for
        real users.
      </p>

      <hr className="border-border my-12" />

      {/* Proud of */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        What I'm most proud of
      </h2>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">The floor plan UX</li>
        <li className="pl-2">
          Real-time "reactive" feeling (WebSockets done right)
        </li>
        <li className="pl-2">
          Clean separation between UI / backend / IoT integration
        </li>
        <li className="pl-2">Role-based access control</li>
        <li className="pl-2">
          Logs + scheduling turning it into an actual usable system
        </li>
      </ul>

      <hr className="border-border my-12" />

      {/* Improve next */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        What I'd improve next
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        If I continue this project, I’d love to add:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">device “offline” detection + health status</li>
        <li className="pl-2">dashboards per building or tenant</li>
        <li className="pl-2">
          more device types (dimmers, thermostats, blinds)
        </li>
        <li className="pl-2">historical sensor graphs</li>
        <li className="pl-2">deployment setup for production environments</li>
      </ul>

      <hr className="border-border my-12" />

      {/* Final thoughts */}
      <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold">
        Final thoughts
      </h2>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        This project was a great mix of software engineering, system design and
        UX thinking.
      </p>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        It gave me hands-on experience with:
      </p>

      <ul className="text-foreground/90 mb-6 ml-6 list-disc space-y-2 font-serif text-lg leading-relaxed">
        <li className="pl-2">full-stack architecture</li>
        <li className="pl-2">real-time systems</li>
        <li className="pl-2">IoT communication patterns</li>
        <li className="pl-2">designing something usable, not just “working”</li>
      </ul>

      <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
        And most importantly: it was fun to build.
      </p>
    </div>
  )
}
