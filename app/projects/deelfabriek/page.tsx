'use client'

// import { useRef } from 'react'
import Image from 'next/image'
// import { motion, useInView } from 'framer-motion'
// import {
//   IconBrandGithub,
//   IconHome,
//   IconBrandLinkedin,
//   IconMailSpark,
//   IconFolders,
// } from '@tabler/icons-react'
// import Hero from '../../pages/Hero'
// import Projects from '../../components/Projects'
// import Skills from '../../components/Skills'
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <div>
      <div className="m-auto max-w-7xl px-4">
        <h1 className="mt-26 font-semibold">Industry project 2025</h1>
        <h2 className="mt-4 text-7xl font-bold">
          Deelkast - <br />
          Deelfabriek Kortrijk
        </h2>
        <Image
          src="/assets/projects/Deelfabriek/mockup2.png"
          alt="Deelfabriek website mockup showing interface on a tablet device"
          width={6000}
          height={4500}
          className="mt-16 mb-6 w-full overflow-hidden rounded-lg bg-neutral-100 object-cover"
          priority
        />
        <div className="prose prose-lg mt-16 max-w-none">
          <h3 className="mb-8 text-3xl font-bold">
            Deelfabriek: Library of Things
          </h3>
          <p className="mb-8 text-lg leading-relaxed">
            Voor het vak <em>Industry project</em> werkte ik in een team van
            vier studenten aan een uitdagend project voor{' '}
            <strong>Stad Kortrijk – Deelfabriek</strong>. We ontwikkelden een{' '}
            <strong>lockersysteem met iPad-kiosk</strong> waarmee bezoekers
            zelfstandig spullen kunnen lenen en terugbrengen. Het project
            combineerde hardware en software, en bood mij de kans om ervaring op
            te doen in frontend, backend en infrastructuur, terwijl ik
            samenwerkte met een echte opdrachtgever.
          </p>
          <p className="mb-8 text-lg leading-relaxed">
            Voor het vak <em>Industry project</em> werkte ik samen met drie
            medestudenten aan een opdracht van{' '}
            <strong>Stad Kortrijk – Deelfabriek</strong>. De Deelfabriek is een
            plek waar mensen spullen kunnen delen, ruilen en herstellen. Ons
            team kreeg de uitdaging om een nieuw concept te realiseren: de{' '}
            <em>Library of Things</em>.
          </p>
          <div className="my-12 flex items-center justify-center bg-neutral-100">
            <Image
              src={'/assets/projects/deelfabriek/scenery.webp'}
              alt="Deelfabriek locatie"
              width={4000}
              height={1824}
              className="rounded-lg"
            />
          </div>
          <p className="mb-8 text-lg leading-relaxed">
            Het idee was om een systeem te bouwen waarbij bezoekers van de
            Deelfabriek spullen kunnen ontlenen, zoals een hogedrukreiniger,
            naaimachine of muziekbox. In plaats van een eenvoudige uitleenbalie,
            wilden we een <strong>automatisch lockersysteem</strong> ontwikkelen
            dat ook zonder toezicht kan functioneren. Het eindresultaat werd een
            reeks van zes lockers met elektronische sloten, gekoppeld aan een{' '}
            <strong>iPad-kiosk</strong> waar gebruikers via een
            gebruiksvriendelijke interface items konden uitlenen en
            terugbrengen.
          </p>
          <h4 className="mt-12 mb-6 text-2xl font-semibold">
            Technische implementatie
          </h4>
          <p className="mb-6 text-lg leading-relaxed">
            Technisch bestond het project uit verschillende componenten:
          </p>
          <ul className="mb-8 space-y-2 text-lg leading-relaxed">
            <li>
              De <strong>lockers</strong> werden aangestuurd via een
              Python-script dat de sloten activeert.
            </li>
            <li>
              Alle data (zoals gebruikers en uitleenstatus) werd opgeslagen in
              een <strong>MySQL-database</strong>.
            </li>
            <li>
              De <strong>backend</strong> werd ontwikkeld in{' '}
              <strong>.NET</strong>, terwijl de <strong>frontend</strong>{' '}
              gebouwd werd in <strong>Next.js</strong>.
            </li>
            <li>
              Alles draaide in <strong>Docker-containers</strong> op een{' '}
              <strong>Raspberry Pi</strong>, toegankelijk van buitenaf via een{' '}
              <strong>Cloudflare tunnel</strong>.
            </li>
            <li>
              Betalingen liepen via de <strong>Payconiq API</strong>, wat een
              extra uitdaging was om stabiel te integreren.
            </li>
          </ul>
          {/* Placeholder voor afbeelding */}
          <div className="my-12 flex items-center justify-center gap-22 rounded-lg bg-neutral-100">
            <Image
              src={'/assets/projects/deelfabriek/kast1.webp'}
              alt="Deelfabriek kast"
              width={503}
              height={600}
              className="rounded-lg"
            />
            <Image
              src={'/assets/projects/deelfabriek/kastopen.webp'}
              alt="Deelfabriek kast open"
              width={503}
              height={600}
              className="rounded-lg"
            />
          </div>
          <h4 className="mt-12 mb-6 text-2xl font-semibold">
            Mijn rol en verantwoordelijkheden
          </h4>
          <p className="mb-8 text-lg leading-relaxed">
            Mijn rol binnen het team was breed, maar met een focus op de{' '}
            <strong>frontend</strong> en de <strong>infrastructuur</strong>. Ik
            werkte mee aan de ontwikkeling van de gebruikersinterface op de iPad
            en zorgde dat deze helder en eenvoudig in gebruik was. Daarnaast nam
            ik de verantwoordelijkheid voor alles rond <strong>Docker</strong>{' '}
            en <strong>Cloudflare</strong>, wat onder meer inhield dat ik de
            containers correct moest configureren op de Raspberry Pi en zorgen
            voor een veilige externe toegang. Ook droeg ik bij aan de .NET
            backend waar nodig, vooral om de koppeling met de database en de
            API&apos;s goed te laten werken.
          </p>
          {/* Placeholder voor afbeelding */}
          <div className="my-12 flex items-center justify-center rounded-lg bg-neutral-100">
            <Image
              src={'/assets/projects/deelfabriek/kiosk-mockup.webp'}
              alt="Kiosk mockup"
              width={4000}
              height={3000}
              className="rounded-lg"
            />
          </div>
          <h4 className="mt-12 mb-6 text-2xl font-semibold">
            Uitdagingen en leerervaringen
          </h4>
          <p className="mb-8 text-lg leading-relaxed">
            Tijdens het project botsten we op enkele uitdagingen. Zo was het
            niet vanzelfsprekend om Docker vlot draaiend te krijgen op de
            Raspberry Pi, en kostte de integratie van de Payconiq API heel wat
            tijd en experimenten. Dit waren momenten waarop ik merkte hoe
            belangrijk <strong>doorzetten, testen en documenteren</strong> zijn
            in softwareontwikkeling. Samen met mijn teamgenoten hebben we
            telkens stap voor stap gezocht naar oplossingen, waarbij we onze
            taken flexibel verdeelden.
          </p>
          <p className="mb-8 text-lg leading-relaxed">
            Wat ik persoonlijk sterk waardeer aan dit project, is dat het ons
            dwong om{' '}
            <strong>te werken in de context van een echte klant</strong>. We
            hadden regelmatig contactmomenten met de verantwoordelijke van
            Deelfabriek, waar we onze voortgang presenteerden en feedback
            ontvingen. Daardoor leerden we dat ontwikkelen voor een klant meer
            is dan alleen code schrijven: je moet ook luisteren, helder
            communiceren en soms je technische voorkeuren opzijzetten om de
            vraag van de klant te realiseren.
          </p>
          {/* Placeholder voor afbeelding */}
          <div className="my-12 flex items-center justify-center rounded-lg bg-neutral-100">
            <Image
              src={'/assets/projects/deelfabriek/buitenzitten.webp'}
              alt="Meeting met de klant"
              width={817}
              height={678}
              className="rounded-lg"
            />
          </div>
          <p className="mb-8 text-lg leading-relaxed">
            Daarnaast heb ik veel geleerd over{' '}
            <strong>samenwerken binnen een team</strong>. Omdat we met vier
            waren, moesten we duidelijke afspraken maken, taken afbakenen en
            elkaar ondersteunen waar nodig. Dat betekende soms dat ik aan de
            slag ging met zaken die buiten mijn comfortzone lagen, zoals stukjes
            backend in .NET of het troubleshooten van API-calls. Achteraf gezien
            zijn dat net de momenten geweest waarin ik het meeste geleerd heb.
          </p>
          <h4 className="mt-12 mb-6 text-2xl font-semibold">
            Resultaat en reflectie
          </h4>
          <p className="mb-8 text-lg leading-relaxed">
            Wat ik meeneem uit dit project, is dat ik nu beter begrijp hoe je
            van een idee naar een <strong>concreet, werkend product</strong>{' '}
            gaat: van brainstormen en prototyping tot ontwikkelen, testen en
            opleveren. Ook het omgaan met{' '}
            <strong>deadlines en prioriteiten</strong> was een belangrijke les.
            Het was verleidelijk om steeds meer functies toe te voegen, maar we
            moesten keuzes maken om het systeem stabiel en bruikbaar te houden
            binnen de tijd die we hadden.
          </p>
          {/* Placeholder voor afbeelding
          <div className="my-12 flex h-80 items-center justify-center rounded-lg bg-neutral-100">
            <p className="text-neutral-500">
              Afbeelding: Eindresultaat - volledig lockersysteem in gebruik
            </p>
          </div> */}
          <p className="mb-8 text-lg leading-relaxed">
            Het resultaat – een functioneel lockersysteem dat bezoekers van de
            Deelfabriek zelfstandig kunnen gebruiken – is iets waar ik met trots
            op terugkijk. Het combineert technische complexiteit met een
            praktische oplossing die meteen inzetbaar is. Voor mij persoonlijk
            was dit project een enorme stap in mijn groei als junior developer:
            ik kon werken met moderne technologieën, mijn kennis verbreden, en
            vooral ervaren hoe het is om in een{' '}
            <strong>team en met een opdrachtgever</strong> samen iets tastbaars
            neer te zetten.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
