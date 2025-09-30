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
        <h1 className="mt-26 font-semibold">Team Project 2025</h1>
        <h2 className="mt-4 text-7xl font-bold">
          Entertainende Fietsgame - <br />
          SportInnovatieCampus Brugge
        </h2>
        <Image
          src="/assets/projects/teamproject/54320663948_d159d4463f_o.jpg"
          alt="Spelers aan het werk met de fietsgame"
          width={4000}
          height={3000}
          className="mt-16 mb-6 w-full overflow-hidden rounded-lg bg-neutral-100 object-cover"
        />

        <div className="prose prose-lg mt-16 max-w-none">
          <h3 className="mb-8 text-3xl font-bold">Entertainende Fietsgame</h3>

          <p className="mb-8 text-lg leading-relaxed">
            In een team van twee werkte ik vier weken aan het ombouwen van een
            gewone hometrainer tot een{' '}
            <strong>interactieve en vermakelijke spelervaring</strong>. Door
            sensoren, een ESP32 en een Unity-game te combineren, maakten we een
            systeem waarbij twee spelers moesten samenwerken om vooruit te
            komen. Het resultaat werd enthousiast onthaald tijdens een expo en
            kreeg zelfs een blijvende plek op de Sportinnovatiecampus in Brugge.
          </p>

          <p className="mb-8 text-lg leading-relaxed">
            Samen met een medestudent werkte ik vier weken lang aan een creatief
            groepsproject: het ombouwen van een gewone hometrainer tot een{' '}
            <strong>interactieve, vermakelijke ervaring</strong>. Ons doel was
            om sporten minder een verplichting en meer een{' '}
            <strong>samenwerking</strong> te maken. We ontwierpen een spel
            waarbij twee spelers samen moesten fietsen en communiceren om
            vooruit te komen, zodat inspanning en plezier hand in hand gingen.
          </p>

          {/* Afbeelding van de setup */}
          <div className="my-12 flex items-center justify-center bg-neutral-100">
            <Image
              src="/assets/projects/teamproject/54320663553_048c6abb16_o.jpg"
              alt="Hardware setup met sensoren en ESP32"
              width={4000}
              height={3000}
              className="rounded-lg"
            />
          </div>

          <h4 className="mt-12 mb-6 text-2xl font-semibold">
            Technische implementatie
          </h4>

          <p className="mb-8 text-lg leading-relaxed">
            We begonnen met het ontwikkelen van{' '}
            <strong>aangepaste sensoren</strong> die de trapsnelheid konden
            meten. Deze sensoren sloten we aan op een{' '}
            <strong>ESP32-microcontroller</strong>, die de gegevens via seriële
            communicatie doorstuurde naar een <strong>Unity-game</strong>. Elke
            speler bestuurde één kant van een virtuele waterfiets, waardoor{' '}
            <strong>coördinatie en teamwork</strong> essentieel waren. Het
            verbinden van de hardware met de software was één van de grootste
            uitdagingen, maar ook een leerzaam onderdeel van het project.
          </p>

          <h4 className="mt-12 mb-6 text-2xl font-semibold">
            Mijn rol en verantwoordelijkheden
          </h4>

          <p className="mb-8 text-lg leading-relaxed">
            Mijn rol lag verspreid over verschillende domeinen. Ik werkte vooral
            aan de <strong>frontend</strong> van het spel en nam ook stukken van
            de <strong>backend</strong> voor mijn rekening, voornamelijk in{' '}
            <strong>Node.js</strong> en deels in <strong>C#</strong>. Daarnaast
            hielp ik mee met de ontwikkeling en integratie van de hardware,
            waardoor ik zowel de technische kant van de sensoren als de
            softwarekant beter leerde begrijpen. Een groot onderdeel van mijn
            persoonlijke bijdrage was het experimenteren met Unity en het leren
            toepassen van C# in de praktijk.
          </p>

          {/* Afbeelding van het spel in actie */}
          <div className="my-12 flex items-center justify-center rounded-lg">
            <Image
              src="/assets/projects/teamproject/teamproject-mockup.png"
              alt="Entertainende fietsgame setup met hometrainer en scherm"
              width={2000}
              height={1455}
              className="rounded-lg"
              priority
            />
          </div>

          <h4 className="mt-12 mb-6 text-2xl font-semibold">
            Automatische terreingeneratie
          </h4>

          <p className="mb-8 text-lg leading-relaxed">
            Een bijzonder aspect van dit project was het{' '}
            <strong>automatische terreingeneratiesysteem</strong> dat ik samen
            met mijn teamgenoot bouwde. In plaats van een statisch parcours
            wilden we een dynamische rivieromgeving die eindeloos bleef
            doorgaan. We besloten dit systeem helemaal zelf te ontwikkelen,
            zonder externe pakketten. Dat betekende veel experimenteren met
            Unity&apos;s terreintools, meshes en splines, maar het leverde een
            unieke spelervaring op die zowel technisch uitdagend als visueel
            aantrekkelijk was.
          </p>

          <p className="mb-8 text-lg leading-relaxed">
            De samenwerking met mijn teamgenoot verliep erg goed. Omdat we met
            twee waren, konden we constant 1-op-1 afstemmen en elkaars werk
            toetsen. Dat zorgde voor een snelle iteratie en een duidelijke
            taakverdeling. Een extra uitdaging was het koppelen van de sensoren
            aan Unity, maar door intensief samen te werken en te testen wisten
            we dit succesvol te realiseren.
          </p>

          {/* Afbeelding van het eindresultaat op de expo */}
          <div className="my-12 flex items-center justify-center rounded-lg bg-neutral-100">
            <Image
              src="/assets/projects/teamproject/gameplay.webp"
              alt="Expo presentatie van de fietsgame"
              width={1000}
              height={500}
              className="rounded-lg"
            />
          </div>

          <h4 className="mt-12 mb-6 text-2xl font-semibold">
            Resultaat en impact
          </h4>

          <p className="mb-8 text-lg leading-relaxed">
            Het resultaat werd positief onthaald tijdens de{' '}
            <strong>expo-presentatie</strong>. Bezoekers reageerden enthousiast
            en vonden het spel origineel en leuk om te spelen. Ons project bleek
            bovendien stabiel genoeg voor lange speelsessies, wat een
            belangrijke bevestiging was van de kwaliteit van ons werk.
            Uiteindelijk kreeg het zelfs een blijvende plek op de{' '}
            <strong>Sportinnovatiecampus in Brugge</strong>, waar het nog steeds
            kan worden gebruikt.
          </p>

          <p className="mb-8 text-lg leading-relaxed">
            Wat ik uit dit project heb meegenomen, is niet alleen nieuwe kennis
            in <strong>Unity, C# en Node.js</strong>, maar ook waardevolle
            ervaring in <strong>samenwerken in een klein team</strong>, het
            omgaan met technische uitdagingen en het leveren van een resultaat
            dat door echte gebruikers getest en gewaardeerd werd. Als we meer
            tijd hadden gehad, hadden we graag nog een{' '}
            <strong>singleplayer-versie</strong> toegevoegd en de levels verder
            uitgebreid, maar zelfs in deze vorm was het een project waar ik met
            trots op terugkijk.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
