// Contenu du portfolio — repris du PDF « PORTFOLIO 2026 HIVERT PAUL ».
// Édite librement : textes, projets, ordre, images (dans /public/projects).

export const profile = {
  name: "paul",
  wordmark: "paulfolio",
  role: ["Directeur artistique", "Chef de projets"],
  intro: [
    "Cela fait désormais 26 ans que je peaufine ce portfolio. En effet, je suis né le 20 novembre 1999 à Saint-Nazaire. Passé 18 ans, je débarque au sein du navire LISAA afin d’entreprendre une prépa Arts Appliqués avant de continuer sur un Bachelor Design Graphique.",
    "Depuis mes débuts en graphisme, j’ai été habitué à pratiquer dans tous les domaines : logos, affiches, vidéos, flyers, motion design, brochures, cartes de visites, packaging, mais aussi de la vidéo, de la photographie et tout ce qui existe dans les domaines du design graphique.",
  ],
  portrait: "/projects/_portrait.jpg",
  email: "Paulhivert1999@gmail.com",
  phone: "06 79 48 80 76",
};

// niveau de 0 à 100 — ajuste librement
export const software: { name: string; level: number }[] = [
  { name: "Photoshop", level: 95 },
  { name: "Illustrator", level: 90 },
  { name: "Indesign", level: 88 },
  { name: "Lightroom", level: 85 },
  { name: "Premiere Pro", level: 90 },
  { name: "After Effects", level: 75 },
  { name: "Blender", level: 60 },
];

export const skills = [
  "Logos",
  "Affiches",
  "Flyers",
  "Motions Designs",
  "Brochures",
  "Cartes de visites",
  "Packagings",
  "Photographies",
  "Vidéos",
  "Gestion de projets",
];

export type ProjectImage = {
  src: string;
  w: number;
  h: number;
  caption?: string; // légende affichée sous le visuel
};

export type Project = {
  img: string; // visuel principal (haut de la page projet)
  w: number;
  h: number;
  thumb?: string; // vignette pour la grille (sinon = img)
  type: string;
  title: string;
  year: string;
  description: string;
  href?: string;
  imgCaption?: string; // légende sous le visuel principal
  // Visuels supplémentaires (déclinaisons, mockups…) empilés sous le principal
  images?: ProjectImage[];
  gallery?: "grid3"; // override d'affichage de la galerie pour ce projet
};

export type Section = {
  id: string;
  name: string;
  projects: Project[];
  cover?: string; // visuel de la case catégorie (sinon = 1er projet)
};

export const sections: Section[] = [
  {
    id: "logos",
    name: "logos",
    cover: "/projects/logo-happy-u.jpg",
    projects: [
      {
        img: "/projects/logo-atlantic-u.jpg",
        w: 1080,
        h: 1350,
        type: "Logo",
        title: "Atlantic Bateaux Piriac",
        year: "2024",
        description:
          "Atlantic Bateaux est une entreprise qui, comme son nom l’indique, est dans le nautisme. La demande était de remettre à neuf leur logo vieux de 15 ans. Dans cette proposition, nous retrouvons le design du bateau de l’ancien logo mais en simplifié et plus moderne, tout comme la typo, plus actuelle.",
        images: [
          { src: "/projects/atlantic/atlantic-noir-blanc.jpg", w: 1500, h: 879 }, // fond blanc
          { src: "/projects/atlantic/atlantic-blanc-noir.jpg", w: 1500, h: 879 }, // fond noir
          { src: "/projects/atlantic/atlantic-noir-argent.jpg", w: 1500, h: 879 }, // fond argent
          { src: "/projects/atlantic/atlantic-argent-noir.jpg", w: 1500, h: 879 }, // fond noir
        ],
      },
      {
        img: "/projects/logo-spike-u.jpg",
        w: 1080,
        h: 1350,
        type: "Logo",
        title: "Spike",
        year: "2022",
        description:
          "Spike est le nom de l’entreprise que j’ai créée pour mon projet de fin d’année en Design Graphique, dans le domaine de l’équipementier sportif et notamment le football. Cette marque fabrique ses produits à l’aide de plastiques des océans et des plages : le S de Spike, le cycle de vie infini du plastique et les crampons avec les deux cercles au centre.",
        images: [
          { src: "/projects/spike/spike-blanc-noir.jpg", w: 1080, h: 1083 },
          { src: "/projects/spike/spike-blanc-vert.jpg", w: 1080, h: 1083 },
          { src: "/projects/spike/spike-vert-blanc.jpg", w: 1080, h: 1080 },
          { src: "/projects/spike/spike-mockup.jpg", w: 1500, h: 999 },
        ],
      },
      {
        img: "/projects/logo-rooster-u.jpg",
        w: 1080,
        h: 1350,
        type: "Logo",
        title: "Rooster",
        year: "2026",
        description:
          "Rooster est une marque de restaurant de poulet braisé. L’objectif était d’avoir une identité visuelle forte, sortant des codes classiques du poulet (couleurs chaudes), et d’assumer pleinement ce virage à 180 degrés.",
        images: [
          { src: "/projects/rooster/rooster-word-violet.jpg", w: 1500, h: 844 }, // texte / blanc
          { src: "/projects/rooster/rooster-icon-ton.jpg", w: 1500, h: 844 }, // icône / violet
          { src: "/projects/rooster/rooster-word-blanc.jpg", w: 1500, h: 844 }, // texte / violet
          { src: "/projects/rooster/rooster-icon-violet.jpg", w: 1500, h: 844 }, // icône / blanc
          { src: "/projects/rooster/rooster-word-ton.jpg", w: 1500, h: 843 }, // texte / violet
        ],
      },
      {
        img: "/projects/logo-happy-u.jpg",
        w: 1080,
        h: 1350,
        type: "Logo",
        title: "Happy Propaganda",
        year: "2026",
        description:
          "Happy Propaganda est une agence de communication qui désirait une identité visuelle forte et assumée, avec un œil et un cœur dedans.",
        images: [
          { src: "/projects/happy/happy-rouge.jpg", w: 1500, h: 843 }, // fond rouge
          { src: "/projects/happy/happy-dark.jpg", w: 1500, h: 843 }, // fond sombre
          { src: "/projects/happy/happy-blanc.jpg", w: 1500, h: 843 }, // fond blanc
          { src: "/projects/happy/happy-dark-mono.jpg", w: 1500, h: 843 }, // fond sombre
        ],
      },
      {
        img: "/projects/firsttouch/ft-gradient.jpg",
        w: 1600,
        h: 900,
        thumb: "/projects/firsttouch/ft-gradient.jpg", // vignette = visuel dégradé de bleus
        type: "Logo",
        title: "First Touch",
        year: "2025",
        description:
          "First Touch est une agence de joueurs et joueuses de football. L’objectif était d’avoir un logo stable et dynamique avec les critères classiques d’un logo de sport, décliné en deux versions : une couleur claire, simple et douce, et un dégradé de bleus pour un côté plus sport, plus dynamique.",
        images: [
          { src: "/projects/firsttouch/ft-logo-agency.jpg", w: 1500, h: 843 }, // logo agence
          { src: "/projects/firsttouch/ft-icon-light.jpg", w: 1500, h: 844 }, // icône / off-white très léger
        ],
      },
      {
        img: "/projects/logo-le-charles-u.jpg",
        w: 1080,
        h: 1350,
        type: "Logo",
        title: "Le Charles",
        year: "2024",
        description:
          "Le Charles est un bar / restaurant situé dans la périphérie nantaise. La demande était de créer un logo pour ce nouveau bar, avec un cafard et une licorne pour le représenter.",
        images: [
          { src: "/projects/lecharles/charles-mockup.jpg", w: 1500, h: 1000 }, // mockup mur
        ],
      },
      {
        img: "/projects/logo-oh-damned-u.jpg",
        w: 1080,
        h: 1350,
        type: "Logo",
        title: "Oh Damned",
        year: "2026",
        description:
          "Oh Damned, une nouvelle marque de cookies sur Paris, souhaitant une DA simple, épurée et réconfortante attirant les plus jeunes comme les gourmands les plus âgés. L’objectif est d’instaurer un effet de douceur et de confort pour le consommateur, avec un produit de qualité et une DA sans faute.",
        images: [
          { src: "/projects/ohdamned/od-dark.jpg", w: 1400, h: 839 }, // fond sombre
          { src: "/projects/ohdamned/od-brun.jpg", w: 1400, h: 833 }, // fond brun
          { src: "/projects/ohdamned/od-cream.jpg", w: 1400, h: 840 }, // fond cream
          { src: "/projects/ohdamned/od-dark-outline-big.jpg", w: 1400, h: 680 }, // fond sombre (outline, logo agrandi)
          { src: "/projects/ohdamned/od-brun-fonce.jpg", w: 1400, h: 837 }, // fond brun
        ],
      },
    ],
  },
  {
    id: "affiches",
    name: "affiches",
    projects: [
      {
        img: "/projects/spike-affiche.jpg",
        w: 1240,
        h: 1831,
        type: "Affiche",
        title: "Spike",
        year: "2022",
        description:
          "Le support de communication principal du projet Spike : une chaussure se noyant dans l’eau, rappelant le plastique utilisé pour sa fabrication. Le but est de ressentir une forme de culpabilité — les dernières bulles d’air comme dernier souffle, une chute dans des eaux sombres, et de l’eau sur toute l’affiche comme si, pour la lire, il fallait être en apnée.",
      },
      {
        img: "/projects/californian/cal-jalapeno-1.jpg",
        w: 1240,
        h: 1753,
        type: "Affiche",
        title: "Gomu Californian",
        year: "2026",
        description:
          "La gamme Californian est un menu de burgers inspirés de ce qu’on retrouve aux États-Unis. Des produits simples, économiques mais terriblement efficaces en bouche, mis en valeur avec un style rétro et américain.",
        images: [
          { src: "/projects/californian/cal-collection.jpg", w: 1240, h: 1753 },
          { src: "/projects/californian/cal-cheese.jpg", w: 1240, h: 1753 },
          { src: "/projects/californian/cal-jalapeno-2.jpg", w: 1240, h: 1753 },
          { src: "/projects/californian/cal-californians.jpg", w: 1240, h: 1753 },
          { src: "/projects/p16.jpg", w: 1400, h: 2018 },
        ],
      },
      {
        img: "/projects/p17.jpg",
        w: 1400,
        h: 1961,
        type: "Affiche",
        title: "Gomu × Le Mans",
        year: "2025",
        description:
          "Un support de communication pour GOMU au moment des 24h du Mans. On y retrouve le côté asiatique de la marque, le menu promu lors de la campagne ainsi qu’une voiture rappelant les 24h du Mans et l’univers Tokyo Drift.",
      },
      {
        img: "/projects/gomu-waffle.jpg",
        w: 1400,
        h: 1985,
        type: "Affiche",
        title: "Gomu Waffle",
        year: "2025",
        description:
          "Cette affiche promeut la nouvelle Bubble Waffle GOMU. Un produit d’été, d’où ces couleurs plutôt vives et cet environnement frais.",
      },
      {
        img: "/projects/p19.jpg",
        w: 1400,
        h: 1981,
        type: "Affiche",
        title: "Korean Gomu",
        year: "2025",
        description:
          "Campagne de communication GOMU portée sur la culture coréenne, déclinée en deux ambiances autour des trois produits phares.",
        imgCaption:
          "Classique — Les trois produits phares de la campagne dans un environnement coréen traditionnel.",
        images: [
          {
            src: "/projects/p20.jpg",
            w: 1400,
            h: 1983,
            caption:
              "Moderne — Variante contemporaine : les trois produits phares mis en scène dans un environnement coréen moderne.",
          },
        ],
      },
      {
        img: "/projects/p21.jpg",
        w: 1400,
        h: 1947,
        type: "Affiche",
        title: "Gomu Jalapeño",
        year: "2025",
        description:
          "Cette affiche présente les produits et offres d’une nouvelle campagne des restaurants GOMU, à travers de nouveaux parfums, de nouvelles saveurs et une identité nouvelle.",
      },
      {
        img: "/projects/jour-de-la-nuit.jpg",
        w: 1240,
        h: 1754,
        type: "Affiche",
        title: "Le Jour de la Nuit",
        year: "2024",
        description:
          "Le Jour de la Nuit est un festival combattant les pollutions lumineuses. Pour cette affiche, un chat dans un univers nocturne — symbole de la nature pouvant regarder et profiter pleinement du ciel et des étoiles, sans aucune pollution lumineuse.",
      },
      {
        img: "/projects/chikin/chikin-korean-burgers.jpg",
        w: 1240,
        h: 1754,
        type: "Affiche",
        title: "Chikin Bang",
        year: "2026",
        description:
          "Affiches pour le restaurant Chikin Bang : les supports principaux de leurs dernières campagnes, sucrées comme salées. Une direction artistique colorée, des affiches remplies d’informations et beaucoup de fantaisie — tout ce que représente la marque.",
        images: [
          { src: "/projects/chikin/chikin-paques.jpg", w: 874, h: 1240 },
          { src: "/projects/chikin/chikin-cheddar.jpg", w: 1240, h: 1754 },
          { src: "/projects/p23.jpg", w: 1400, h: 1980 },
        ],
      },
    ],
  },
  {
    id: "motion-designs",
    name: "motion designs",
    cover: "/projects/logo-deezer-u.jpg",
    projects: [
      {
        img: "/projects/motion-deezer-main.jpg",
        w: 1400,
        h: 1400,
        thumb: "/projects/motion-deezer.jpg", // logo réduit pour la case
        type: "Motion Design",
        title: "Deezer",
        year: "2021",
        description:
          "Un motion design pour Deezer Premium. Nous désirions une animation haute en couleur, en mouvement et en profondeur, comme ce que peut nous partager Deezer. Tout a été créé pour cette animation, y compris la musique.",
        href: "https://youtu.be/RIjTaoSKWug",
        images: [
          { src: "/projects/deezermotion/deezer-motion-1.jpg", w: 1500, h: 874 },
          { src: "/projects/deezermotion/deezer-motion-2.jpg", w: 1500, h: 797 },
        ],
      },
      {
        img: "/projects/p13.jpg",
        w: 1400,
        h: 1103,
        thumb: "/projects/motion-spike.jpg", // logo réduit pour la case
        type: "Motion Design",
        title: "Spike",
        year: "2021",
        description:
          "Ce motion design fait partie de mon projet de fin d’études. La communication globale est basée sur le côté écologique de la marque ; cette animation montre la qualité de la chaussure, d’une bouteille dans la mer pour finir en apothéose dans l’espace.",
        href: "https://youtu.be/K8BP2xkXkb8",
        images: [
          { src: "/projects/spikemotion/spike-mer.jpg", w: 1500, h: 821 },
          { src: "/projects/spikemotion/spike-warning.jpg", w: 1500, h: 815 },
        ],
      },
    ],
  },
  {
    id: "visuels-instagram",
    name: "visuels instagram",
    cover: "/covers/cover-visuels.jpg",
    projects: [
      {
        img: "/projects/p25.jpg",
        w: 1400,
        h: 2485,
        type: "Visuels Instagram",
        title: "UEFA Youth League",
        year: "2024",
        description:
          "Tom Mabon, gardien de l’équipe des jeunes du FC Nantes, m’a fait confiance pour ses visuels de matchs durant leur parcours historique en coupe d’Europe, tout comme ses coéquipiers Louis Leroux et Mathis Philippe. Pour chacun, j’ai cherché des visuels différents, avec des techniques et thématiques variées.",
        images: [
          { src: "/projects/youth/youth-olympiakos.jpg", w: 1080, h: 1920 },
          { src: "/projects/youth/youth-finale.jpg", w: 962, h: 1726 },
          { src: "/projects/youth/youth-eiffel.jpg", w: 968, h: 1728 },
        ],
      },
      {
        img: "/projects/p26.jpg",
        w: 1400,
        h: 1751,
        type: "Visuels Instagram",
        title: "Championnat de France",
        year: "2025",
        description:
          "Ces visuels présentent la nouvelle saison de Ligue 1 McDonald’s. On y retrouve des éléments rappelant l’identité des clubs et des villes par les couleurs, les joueurs et les références visuelles.",
        images: [
          { src: "/projects/cdf/cdf-greenwood.jpg", w: 1080, h: 1350 },
          { src: "/projects/cdf/cdf-cowboy.jpg", w: 1080, h: 1350 },
          { src: "/projects/cdf/cdf-saison.jpg", w: 1080, h: 1350 },
        ],
      },
      {
        img: "/projects/ilan/ilan-dfco.jpg",
        w: 1080,
        h: 1920,
        type: "Visuels Instagram",
        title: "Ilan Djadja",
        year: "2025–2026",
        description:
          "Ilan est un joueur de football évoluant en U19 National. Je suis chargé de le photographier pendant ses matchs et de lui faire des visuels pour tous ses rendez-vous du week-end contre des gros clubs, notamment l’OL.",
        images: [
          { src: "/projects/ilan/ilan-auxerre.jpg", w: 1080, h: 1920 },
          { src: "/projects/ilan/ilan-dijon-asptt.jpg", w: 1080, h: 1920 },
          { src: "/projects/p27.jpg", w: 1400, h: 2482 },
          { src: "/projects/ilan/ilan-saintpriest.jpg", w: 1080, h: 1920 },
          { src: "/projects/ilan/ilan-metz.jpg", w: 1080, h: 1920 },
        ],
      },
      {
        img: "/projects/p28.jpg",
        w: 1400,
        h: 2490,
        type: "Visuels Instagram",
        title: "Europa League",
        year: "2024",
        description:
          "Quentin Merlin, ancien joueur de l’Olympique de Marseille, m’a demandé de réaliser deux visuels pour ses matchs de coupe d’Europe contre l’Atalanta de Bergame et le Shakhtar. Deux créations bien différentes, montrant l’enjeu de l’événement pour le joueur et l’équipe.",
        images: [
          { src: "/projects/europa/europa-shakhtar.jpg", w: 1080, h: 1920 },
        ],
      },
      {
        img: "/projects/aiman/aiman-orleans.jpg",
        w: 1080,
        h: 1920,
        type: "Visuels Instagram",
        title: "Aïman",
        year: "2025–2026",
        description:
          "Aïman est un joueur de football évoluant en U19 National. Je suis chargé de le photographier pendant ses matchs et de lui faire des visuels pour tous ses rendez-vous du week-end contre des gros clubs, notamment le PSG.",
        images: [
          { src: "/projects/aiman/aiman-amiens.jpg", w: 1080, h: 1920 },
          { src: "/projects/p29.jpg", w: 1400, h: 2485 },
          { src: "/projects/aiman/aiman-quevilly.jpg", w: 1080, h: 1920 },
          { src: "/projects/aiman/aiman-racing.jpg", w: 1080, h: 1920 },
          { src: "/projects/aiman/aiman-sarcelles.jpg", w: 1080, h: 1920 },
        ],
      },
    ],
  },
  {
    id: "autres-projets",
    name: "autres projets",
    cover: "/covers/cover-autres.jpg",
    projects: [
      {
        img: "/projects/national/national-19.jpg",
        w: 1200,
        h: 1796,
        type: "Photographie",
        title: "Championnat National",
        year: "2025–2026",
        description:
          "Aïman et Ilan évoluent tous les deux en U19 National. Ayant la possibilité de signer un contrat professionnel, leur image doit être soignée — et cela commence par la photographie en bord de terrain. Je suis chargé de les photographier pendant leurs matchs, puis de traiter les images pour leurs réseaux.",
        images: [
          { src: "/projects/national/national-08.jpg", w: 1200, h: 1796 },
          { src: "/projects/national/national-01.jpg", w: 1200, h: 1796 },
          { src: "/projects/national/national-09.jpg", w: 1200, h: 1815 },
          { src: "/projects/national/national-02.jpg", w: 1200, h: 1755 },
          { src: "/projects/national/national-10.jpg", w: 1200, h: 1837 },
          { src: "/projects/national/national-03.jpg", w: 1200, h: 1759 },
          { src: "/projects/national/national-11.jpg", w: 1200, h: 1796 },
          { src: "/projects/national/national-04.jpg", w: 1200, h: 1881 },
          { src: "/projects/national/national-12.jpg", w: 1200, h: 1796 },
          { src: "/projects/national/national-05.jpg", w: 1200, h: 1796 },
          { src: "/projects/national/national-13.jpg", w: 1200, h: 1640 },
          { src: "/projects/national/national-06.jpg", w: 1200, h: 1700 },
          { src: "/projects/national/national-14.jpg", w: 1200, h: 1743 },
          { src: "/projects/national/national-07.jpg", w: 1200, h: 1906 },
          { src: "/projects/national/national-15.jpg", w: 1200, h: 1897 },
          { src: "/projects/national/national-18.jpg", w: 1200, h: 1736 },
          { src: "/projects/national/national-16.jpg", w: 1200, h: 1897 },
          { src: "/projects/p31.jpg", w: 1400, h: 1958 },
          { src: "/projects/national/national-17.jpg", w: 1200, h: 1817 },
        ],
      },
      {
        img: "/projects/birdzmenu/birdz-menu-1.jpg",
        w: 1200,
        h: 1527,
        thumb: "/projects/birdz-logo-blanc.jpg", // vignette de la case = logo sur fond blanc
        type: "Menu",
        title: "Birdz",
        year: "2025",
        description:
          "Le menu du restaurant BIRDZ devait être en adéquation avec l’univers de la marque, inspirée des restaurants de poulet américains type « Nashville ». L’objectif : réaliser un menu avec les codes de la marque.",
        gallery: "grid3",
        images: [
          { src: "/projects/birdzmenu/birdz-menu-2.jpg", w: 1200, h: 1527 },
          { src: "/projects/birdzmenu/birdz-menu-3.jpg", w: 1200, h: 1527 },
          { src: "/projects/birdzmenu/birdz-menu-4.jpg", w: 1200, h: 1527 },
          { src: "/projects/birdzmenu/birdz-menu-5.jpg", w: 1200, h: 1527 },
          { src: "/projects/birdzmenu/birdz-menu-6.jpg", w: 1200, h: 1527 },
        ],
      },
      {
        img: "/projects/raffine/raffine-21.jpg",
        w: 1200,
        h: 1796,
        type: "Photographie",
        title: "Raffiné",
        year: "2025",
        description:
          "Raffiné est un restaurant premium, cuisinant de bons produits dans un établissement visuellement très beau. Les photos devaient représenter le restaurant et alimenter sa belle image.",
        images: [
          { src: "/projects/raffine/raffine-01.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-02.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-03.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-04.jpg", w: 1200, h: 1599 },
          { src: "/projects/raffine/raffine-05.jpg", w: 1200, h: 1829 },
          { src: "/projects/raffine/raffine-06.jpg", w: 1200, h: 1681 },
          { src: "/projects/raffine/raffine-07.jpg", w: 1200, h: 1800 },
          { src: "/projects/raffine/raffine-08.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-09.jpg", w: 1200, h: 1800 },
          { src: "/projects/raffine/raffine-10.jpg", w: 1200, h: 1800 },
          { src: "/projects/raffine/raffine-11.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-12.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-13.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-14.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-15.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-16.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-17.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-18.jpg", w: 1200, h: 1797 },
          { src: "/projects/raffine/raffine-19.jpg", w: 1200, h: 1800 },
          { src: "/projects/raffine/raffine-20.jpg", w: 1200, h: 1796 },
          { src: "/projects/p33.jpg", w: 1400, h: 1958 },
          { src: "/projects/raffine/raffine-22.jpg", w: 1200, h: 1743 },
          { src: "/projects/raffine/raffine-23.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-24.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-25.jpg", w: 1200, h: 1799 },
          { src: "/projects/raffine/raffine-26.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-27.jpg", w: 1200, h: 1800 },
          { src: "/projects/raffine/raffine-28.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-29.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-30.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-31.jpg", w: 1200, h: 1773 },
          { src: "/projects/raffine/raffine-32.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-33.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-34.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-35.jpg", w: 1200, h: 1796 },
          { src: "/projects/raffine/raffine-36.jpg", w: 1200, h: 1799 },
          { src: "/projects/raffine/raffine-37.jpg", w: 1200, h: 1800 },
        ],
      },
      {
        img: "/projects/p34.jpg",
        w: 1400,
        h: 1049,
        type: "Packaging",
        title: "Chikin Bang",
        year: "2025",
        description:
          "Chikin Bang, restaurant de street food coréenne, m’a demandé de nouveaux packagings pour leurs corndogs, tout en gardant le style pop coréen que l’on retrouve dans l’identité de leurs restaurants.",
      },
      {
        img: "/projects/birdz-photo/birdz-13.jpg",
        w: 1200,
        h: 726,
        type: "Photographie",
        title: "Birdz",
        year: "2025",
        description:
          "Avant son ouverture, un shooting produits de Birdz pour ses menus, ses visuels et ses réseaux, afin d’exposer partout sa gamme de produits Nashville. En voici une légère partie sur l’ensemble des photos prises.",
        images: [
          { src: "/projects/birdz-photo/birdz-01.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-02.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-03.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-04.jpg", w: 1200, h: 791 },
          { src: "/projects/birdz-photo/birdz-05.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-06.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-07.jpg", w: 1200, h: 701 },
          { src: "/projects/birdz-photo/birdz-08.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-09.jpg", w: 1200, h: 800 },
          { src: "/projects/birdz-photo/birdz-11.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-12.jpg", w: 1200, h: 801 },
          { src: "/projects/p35.jpg", w: 1400, h: 945 },
          { src: "/projects/birdz-photo/birdz-14.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-15.jpg", w: 1200, h: 801 },
          { src: "/projects/birdz-photo/birdz-16.jpg", w: 1200, h: 801 },
        ],
      },
      {
        img: "/projects/p36.jpg",
        w: 1400,
        h: 991,
        type: "Menu",
        title: "Somar",
        year: "2026",
        description:
          "Le SOMAR est un restaurant de produits principalement marins sur la côte bauloise. Une carte complète à refaire de zéro pour s’installer dans un style plus moderne : des couleurs proches de la carte originelle mais plus dans l’air du temps, et un choix typographique réfléchi entre modernité et identité.",
      },
    ],
  },
];

// ——— Helpers de routage (slugs uniques par catégorie) ———

export type ProjectWithSlug = Project & { slug: string };

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getSection(categoryId: string): Section | undefined {
  return sections.find((s) => s.id === categoryId);
}

// Retourne les projets d'une catégorie avec un slug unique et stable.
export function getProjectsWithSlugs(categoryId: string): ProjectWithSlug[] {
  const section = getSection(categoryId);
  if (!section) return [];
  const counts: Record<string, number> = {};
  return section.projects.map((p) => {
    const base = slugify(p.title);
    counts[base] = (counts[base] ?? 0) + 1;
    const slug = counts[base] > 1 ? `${base}-${counts[base]}` : base;
    return { ...p, slug };
  });
}

export function getProject(
  categoryId: string,
  slug: string
): { section: Section; project: ProjectWithSlug; index: number } | undefined {
  const section = getSection(categoryId);
  if (!section) return undefined;
  const projects = getProjectsWithSlugs(categoryId);
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return { section, project: projects[index], index };
}
