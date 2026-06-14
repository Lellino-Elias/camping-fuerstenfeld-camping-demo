import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-fuerstenfeld";

const campingFuerstenfeld: CampsiteConfig = {
  name: "Thermenland Camping Fürstenfeld",
  shortName: "Fürstenfeld",
  slug: "camping-fuerstenfeld",
  ort: "Fürstenfeld",
  region: "Steiermark",
  brandKind: "Camping am Freibad",
  regionLong: "Steirisches Thermenland · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping direkt am größten Becken-Freibad Österreichs",
  claimEmphasis: "Becken-Freibad Österreichs",
  emailDetail: "die ruhige Lage zwischen Buchwald und Feistritz",
  intro:
    "Du campst auf der grünen Campinginsel mitten in der Thermenhauptstadt Fürstenfeld — auf zwei Seiten vom Buchwald, auf der dritten von der ruhig fließenden Feistritz umschlossen. Der Eintritt ins angrenzende Freibad ist inklusive.",

  statement: {
    text: "Gleich neben deinem Stellplatz beginnt das größte Becken-Freibad Österreichs — und der Eintritt ist inklusive.",
    emphasis: "Eintritt ist inklusive",
  },

  pillars: [
    {
      title: "Direkt am Freibad",
      text: "Der Platz grenzt unmittelbar an das Freibad Fürstenfeld — mit 23.000 m² Wasserfläche das größte Becken-Freibad Österreichs. Der Eintritt ist im Campingpreis inklusive.",
      image: { src: `${IMG}/gallery-ef140e0a5b.webp`, alt: "Freibad Fürstenfeld mit Wasserrutschen direkt neben dem Campingplatz" },
    },
    {
      title: "Mitten im Grünen",
      text: "Auf zwei Seiten vom idyllischen Buchwald, auf der dritten von der ruhig fließenden Feistritz umschlossen — Natur und Ruhe rundherum.",
      image: { src: `${IMG}/gallery-f222a6f778.webp`, alt: "Stellplätze am Ufer der Feistritz im Buchwald bei Fürstenfeld" },
    },
    {
      title: "Vom Campingclub geführt",
      text: "Den Platz betreibt der 1. Steirische Campingclub Fürstenfeld — persönlich, mit eigener Rezeption und einem Team, das dich gern willkommen heißt.",
      image: { src: `${IMG}/gallery-d10a7f01ea.webp`, alt: "Rezeption und Café am Campingplatz Fürstenfeld" },
    },
  ],

  usps: [
    "Eintritt Freibad inklusive",
    "Mitten im Grünen",
    "Moderne Sanitäranlagen",
    "Kostenloses WLAN",
    "Hunde willkommen",
    "Bäcker-Service am Morgen",
  ],

  trust: {
    heading: "Was diesen Platz zur grünen Insel macht",
    headingEmphasis: "grünen Insel",
    intro:
      "Der Steirische Campingclub betreibt den Platz am Rand der Thermenhauptstadt: kurze Wege ins Freibad und in die Stadt, viel Schatten unter alten Bäumen und ein Team, das Sauberkeit und Ruhe ernst nimmt.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-d4c87c423e.webp`, alt: "Campingplatz Fürstenfeld am Ufer der Feistritz" },
  },

  breather: {
    image: { src: `${IMG}/gallery-0b86cc7bf4.webp`, alt: "Zelte unter alten Bäumen im Abendlicht am Campingplatz Fürstenfeld" },
    line: "Lange Sommerabende unter alten Bäumen.",
  },

  camping: {
    heading: "Komfort auf der Campinginsel",
    intro:
      "Großzügige Stellplätze, moderne Sanitäranlagen und kurze Wege — vom Platz sind es nur ein paar Schritte ins Freibad, in die Stadt und ins Grüne.",
    features: [
      {
        title: "Geräumige Stellplätze",
        text: "Großzügig bemessene Plätze für Wohnwagen, Wohnmobil und Zelt, mit Stromanschluss (10 Ampere) und kostenlosem WLAN fast überall am Platz.",
        image: { src: `${IMG}/gallery-f18cdb7760.webp`, alt: "Stellplätze für Wohnwagen und Wohnmobile am Campingplatz Fürstenfeld" },
      },
      {
        title: "Schattige Naturplätze",
        text: "Alte Laubbäume spenden Schatten an heißen Tagen — direkt am Buchwald und an der Feistritz campst du mitten in der Natur.",
        image: { src: `${IMG}/gallery-73fdd9c391.webp`, alt: "Zeltplätze unter schattigen Bäumen am Campingplatz Fürstenfeld" },
      },
      {
        title: "Moderne Sanitäranlagen",
        text: "Großzügige Dusch-, Wasch- und Toilettenanlagen mit Warmwasser, dazu Babywickeltisch, Wanne und ein Waschraum mit zwei Waschmaschinen und Trockner.",
        image: { src: `${IMG}/amenity-4998b6e509.webp`, alt: "Moderne Sanitäranlagen mit Waschtischen am Campingplatz Fürstenfeld" },
      },
      {
        title: "Barrierefreie Sanitärräume",
        text: "Behindertengerechte Sanitär- und Duschanlagen sorgen dafür, dass sich bei uns wirklich alle Gäste wohlfühlen.",
        image: { src: `${IMG}/amenity-ea009477fc.webp`, alt: "Barrierefreier Sanitärraum mit Dusche und WC am Campingplatz Fürstenfeld" },
      },
      {
        title: "Gemütlich beisammen",
        text: "Im überdachten Aufenthaltsbereich trifft man sich — am Wochenende gibt es fallweise die beliebten Gulasch-, Schnitzel- und Grill-Partys.",
        image: { src: `${IMG}/gallery-95422a21fb.webp`, alt: "Überdachter Aufenthaltsbereich am Campingplatz Fürstenfeld" },
      },
      {
        title: "Dein Platz zum Wohnen",
        text: "Mach es dir gemütlich: Auf den Plätzen ist Raum für Vorzelt, Sitzecke und Grill — dein eigenes Wohnzimmer im Grünen.",
        image: { src: `${IMG}/gallery-5e74ff4688.webp`, alt: "Stellplatz mit Vorzelt und Sitzplatz am Campingplatz Fürstenfeld" },
      },
    ],
  },

  kinder: {
    heading: "Wo Kinder den Sommer verbringen",
    intro:
      "Flache Liegewiesen, das Freibad mit Rutschen und Trampolin gleich nebenan und jede Menge Platz zum Spielen — hier wird der Urlaub für Kinder schnell zum Abenteuer.",
    features: [
      {
        title: "Spielen im Grünen",
        text: "Auf den weiten Wiesen finden Kinder genug Platz zum Spielen, Radfahren und Toben — und abends sitzt die ganze Familie gemütlich vor dem Zelt.",
        image: { src: `${IMG}/gallery-5c21989cef.webp`, alt: "Familie beim Picknick am Zeltplatz in Fürstenfeld" },
      },
      {
        title: "Camping mit Kindern",
        text: "Der Platz ist auf Familien eingestellt: kurze Wege, sichere Wiesen und das Freibad in Reichweite — ideal für den Urlaub mit Kindern.",
        image: { src: `${IMG}/gallery-d12d43f5fd.webp`, alt: "Familie mit Kindern am Stellplatz des Campingplatzes Fürstenfeld" },
      },
      {
        title: "Raum zum Träumen",
        text: "Zwischen Bäumen und Wiese kommt garantiert keine Langeweile auf — hier dürfen Kinder den ganzen Tag draußen sein.",
        image: { src: `${IMG}/gallery-b43c98c6a3.webp`, alt: "Kind entspannt auf der Wiese am Campingplatz Fürstenfeld" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um die Thermenhauptstadt",
    intro:
      "Drei große Thermen im Umkreis von 9 bis 15 km, geführte Radtouren, Buschenschänken und Ausflugsziele wie die Riegersburg oder Zotter — rund um Fürstenfeld wird es nie langweilig.",
    items: [
      {
        title: "Geführte Radtouren",
        text: "Direkt vom Platz starten geführte Rad- und Nordic-Walking-Touren — auf gut ausgebauten Rad- und Wanderwegen durch die Oststeiermark.",
        image: { src: `${IMG}/gallery-35066d2fa0.webp`, alt: "Radfahrer auf einem Radweg bei Fürstenfeld" },
      },
      {
        title: "Buschenschank & Wein",
        text: "Wir organisieren Besuche in traditionellen Buschenschänken — regionale Schmankerl und steirischer Wein inklusive.",
        image: { src: `${IMG}/gallery-a39a4569dd.webp`, alt: "Jause und Wein im Buschenschank bei Fürstenfeld" },
      },
      {
        title: "Thermenhauptstadt Fürstenfeld",
        text: "Shopping, Kulinarik und Stadtleben: Die Thermenhauptstadt mit ihrem blühenden Hauptplatz liegt nur wenige Minuten vom Campingplatz entfernt.",
        image: { src: `${IMG}/gallery-ca32e65e70.webp`, alt: "Hauptplatz von Fürstenfeld mit Blumenbeeten und Brunnen" },
      },
    ],
  },

  anreise: {
    heading: "Anreise nach Fürstenfeld",
    modes: [
      { title: "Mit dem Auto", text: "Über die A2 Süd­autobahn und die S7 Fürstenfelder Schnellstraße bis Fürstenfeld, dann den Schildern zum Freibad in der Badstraße folgen." },
      { title: "Mit der Bahn", text: "Bis zum Bahnhof Fürstenfeld; der Campingplatz an der Badstraße ist von dort in wenigen Minuten erreichbar." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Graz liegt rund 60 km entfernt — von dort weiter mit Mietwagen oder Bahn." },
    ],
  },

  galerie: {
    heading: "Campingsommer in Fürstenfeld",
    headingEmphasis: "Campingsommer",
    intro: "Wiese, Wasser und Wohnwagen: ein paar Eindrücke vom Leben auf der grünen Campinginsel.",
    tag: "April bis Oktober",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-85bfd2ef6f.webp`, alt: "Luftaufnahme des Campingplatzes am Freibad Fürstenfeld" },
      { src: `${IMG}/gallery-0d4461cee3.webp`, alt: "Zelte auf der Wiese am Campingplatz Fürstenfeld" },
      { src: `${IMG}/gallery-15d66519cb.webp`, alt: "Sommertag zwischen den Zelten am Campingplatz Fürstenfeld" },
      { src: `${IMG}/gallery-7962b2d3aa.webp`, alt: "Wohnwagen mit Blick ins oststeirische Hügelland" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Freibad",
    headingEmphasis: "am Freibad",
    intro:
      "Wähle Zeitraum und Personen — das Team meldet sich persönlich mit deiner Verfügbarkeit. In der Vor- und Nachsaison ist meist auch ohne Reservierung ein Platz frei.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis Vorsaison 2026: Stellplatz + 2 Personen (ab 15 J. je € 10,50) — inkl. Eintritt Freibad, Warmduschen, Müll u. WLAN; zzgl. Strom und Nächtigungsabgabe (€ 2,00/Person).",
    highlight: {
      title: "Eintritt ins Freibad inklusive",
      text: "Der Eintritt ins größte Becken-Freibad Österreichs ist im Campingpreis bereits enthalten.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz Wohnwagen/Wohnmobil", perNight: 32, perExtraGuest: 10.5 },
      { id: "zelt", label: "Kleines Zelt (Iglu)", perNight: 29.40, perExtraGuest: 10.5 },
    ],
  },

  kontakt: {
    tel: "+43 664 179 93 93",
    telHref: "tel:+436641799393",
    mail: "info@camping-fuerstenfeld.at",
    adresse: "Badstraße 3 · 8280 Fürstenfeld · Steiermark",
    coords: { lat: 47.0553, lng: 16.0717, approx: true },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Freizeit", href: "#aktivitaeten" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingFuerstenfeld;
