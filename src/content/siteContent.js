/**
 * Contenu du site (copier ce fichier par client ou brancher un autre module depuis `content/index.js`).
 * Chemins images : surtout `public/img/` ; le splash utilise `public/logo.png` si listé.
 */
export const siteContent = {
  meta: {
    title: 'John et Shekinah',
    htmlLang: 'fr',
  },

  couple: {
    displayName: 'John et Shekinah',
    displayNameAlt: 'Jean et Shekinah',
    /** Texte navbar mobile (cohérent avec l’ancien HTML) */
    navBrandMobile: { line1: 'Jean', joiner: 'et', line2: 'Shekinah' },
    navBrandDesktop: { before: 'jean', joiner: 'et', after: 'Shekinah' },
    heroTagline: 'Nous nous sommes mariés',
  },

  /**
   * Écran d’ouverture : chemins relatifs à `public/` (ex. logo.png = public/logo.png).
   */
  splash: {
    logoCandidates: ['logo.png', 'img/logo.png', 'img/logo.jpg'],
    minVisibleMs: 3000,
  },

  nav: [
    { hash: '#home', label: 'Accueil' },
    { hash: '#about', label: 'À propos' },
    { hash: '#story', label: 'Histoire' },
    { hash: '#gallery', label: 'Galerie' },
    { hash: '#family', label: 'Famille' },
    { hash: '#event', label: 'Événement' },
    { hash: '#rsvp', label: 'Voeux' },
    { hash: '#contact', label: 'Contact' },
  ],

  hero: {
    slides: [
      { image: '1.jpg', alt: 'John et Shekinah' },
      { image: '2.jpg', alt: 'John et Shekinah' },
    ],
  },

  about: {
    sectionKicker: 'À propos',
    sectionTitle: 'Le Marié & La Mariée',
    groom: {
      title: 'Le Marié',
      html: `Jean Kisangi, Affectueusement, <strong>appelez Jean Malonga</strong>. passionné de musique douce et de technologie, est l'homme derrière ce moment unique. Avec son esprit chaleureux et sa personnalité charismatique, il a conquis le cœur de <strong class="text-primary">Shekinah Magloire</strong>. Professionnel dans l'informatique, Jean apporte son savoir-faire et sa passion à chaque aspect de sa vie. Aujourd'hui, il est prêt à commencer cette nouvelle aventure avec l'amour de sa vie.`,
      signature: 'Jean Kisangi',
      image: 'john.jpg',
    },
    bride: {
      title: 'La Mariée',
      html: `Shekinah Mwimbi, aujourd'hui connue sous le nom de Shekinah Kisangi, incarne parfaitement la femme ambitieuse et déterminée, portée par le désir de faire une différence positive dans le monde. Elle a trouvé un compagnon de vie en <strong class="text-primary">Jean Malonga</strong>, qui partage sa vision et se tient prêt à marcher à ses côtés dans cette nouvelle aventure. Passionnée de musique chrétienne et de chants juifs, elle partage cet amour pour la musique avec son époux, renforçant ainsi leurs liens autour de valeurs communes et d'une foi profonde.`,
      signature: 'Shekinah Kisangi',
      image: 'shekinah.jpg',
    },
    videoFile:
      'WhatsApp Vidéo 2024-10-29 à 13.37.15_70731c82.mp4',
  },

  story: {
    sectionKicker: 'Histoire',
    sectionTitle: "Notre Histoire d'Amour",
    items: [
      {
        image: 'story/strory (1).jpg',
        imageAlt: '',
        title: 'Première Rencontre',
        date: 'janvier 2012',
        html: `En janvier 2012, dans le local B01 du campus de l'université Révérend Kim, Shekinah et Jean se sont rencontrés pour la première fois dans le cadre du cours de logique et expression. C'était une simple session académique, partagée avec d'autres promotions de l'année 2011-2012. À ce moment-là, il n'y avait que les échanges de cours, les discussions studieuses, et le partage entre collègues. L'amour n'était pas encore au rendez-vous… Mais cette rencontre marquera le début d'une belle histoire. Au fil des années, entre discussions académiques et moments partagés, une complicité s'est tissée, jusqu'à devenir un lien profond et indéfectible. Aujourd'hui, Jean et Shekinah avancent ensemble, unis par des valeurs et des passions communes, et cette première rencontre reste gravée comme le point de départ de leur voyage.`,
        imageSide: 'left',
      },
      {
        image: 'story/story.jpg',
        imageAlt: '',
        title: 'Fiançailles',
        date: '28 janvier 2024',
        html: `Après la première rencontre avec les prétendants, organisée par le Frère Tomatala à l'église Shekinah Tabernacle le 1er octobre 2023, nous serons présentés le 28 janvier 2024 devant l'église pour notre première sortie en tant que fiancés. Néanmoins, la demande en mariage avait été faite bien avant, en 2018.`,
        imageSide: 'right',
      },
    ],
  },

  /** Fichiers dans public/img/ (ordre identique au carrousel / lightbox d’origine) */
  galleryFilenames: [
    'DSC_0244.jpg',
    'DSC_5075.jpg',
    'DSC_5136.jpg',
    ' (4).jpg',
    'DSC_5196.jpg',
    'DSC_0251.jpg',
    'DSC_5047.jpg',
    'DSC_5081.jpg',
    'DSC_5095.jpg',
    'DSC_5156.jpg',
    'DSC_2233.jpg',
    'DSC_2232.jpg',
    'DSC_2235.jpg',
    'DSC_2237.jpg',
    'DSC_2243.jpg',
    'DSC_2378.jpg',
    'DSC_2408.jpg',
    'DSC_2410.jpg',
    'DSC_2293.jpg',
    'DSC_2363.jpg',
    'DSC_2302.jpg',
    ' (7).jpg',
    'DSC_2333.jpg',
    'DSC_1797.jpg',
    'DSC_1803.jpg',
    'DSC_2342.jpg',
    'DSC_2400.jpg',
    'DSC_2404.jpg',
    'DSC_2420.jpg',
    'DSC_2402.jpg',
    'DSC_2465.jpg',
    'DSC_2466.jpg',
    'DSC_2429.jpg',
    'DSC_2439.jpg',
    'DSC_2509.jpg',
    'DSC_2521.jpg',
    'DSC_2468.jpg',
    'DSC_2544.jpg',
    'DSC_2345.jpg',
    'DSC_2531.jpg',
    'DSC_2530.jpg',
    'DSC_2446.jpg',
    'DSC_2506.jpg',
    'DSC_2523.jpg',
    'DSC_2554.jpg',
    'DSC_2561.jpg',
    'DSC_2436.jpg',
    'DSC_2516.jpg',
    'DSC_2482.jpg',
    'DSC_1811.jpg',
    'DSC_1856.jpg',
    'DSC_2342.jpg',
    'DSC_2297.jpg',
  ],

  gallery: {
    sectionKicker: 'Galerie',
    sectionTitle: 'Notre Galerie Photo',
    backgroundImage: 'gallery.jpg',
  },

  events: {
    sectionKicker: 'Événement',
    sectionTitle: 'Notre Événement de Mariage',
    intro:
      "Chaque amour a une histoire, et la nôtre a trouvé son apogée le jour de notre mariage. Entourés de notre famille et de nos amis, nous avons créé des souvenirs qui resteront gravés dans nos cœurs à jamais. Merci à tous ceux qui ont été présents pour célébrer notre amour.",
    items: [
      {
        image: '_PLT7430.jpg',
        title: 'Le 10 février 2024 Présentation',
        html: `Le 10 février 2024, à 17h00, les deux familles se sont réunies sur l'avenue Bobozo, n°34, au quartier Sans Fil, dans la commune de Masina, à Kinshasa, la capitale congolaise. Ce moment solennel marquait l'officialisation de la relation entre Jean et Shekinah, où chaque famille reconnaissait officiellement leur union naissante et les acceptait comme prétendants à un avenir commun. La rencontre s'est déroulée dans une ambiance chaleureuse et respectueuse, en présence des parents et de quelques amis proches, témoins de cet engagement précieux.`,
        videoUrl: null,
      },
      {
        image: 'DSC_4769.jpg',
        title: 'Le 20 juillet 2024 Remise de la dot',
        html: `Il s'est écoulé 5 mois et 10 jours depuis la belle cérémonie de pré-dote, qui restera gravée dans nos cœurs. En ce samedi soir, à 17h00, dans une ambiance empreinte de respect et de joie, le prix de rachat a été payé au domicile des parents, situé dans la commune de Limete, quartier Ndanu. Un moment précieux et solennel, marquant une étape de plus dans notre union, sous le regard bienveillant de nos proches.`,
        videoUrl: null,
      },
      {
        image: 'DSC_5090.jpg',
        title: 'Le 27 juillet 2024 Mariage Civil',
        html: `Une semaine après la remise de la dot, l'État congolais a officiellement pris acte de notre engagement, sous l'autorité de Madame <strong>Isabelle Mputu Diavova</strong>, officière de l'état civil de la commune de la N'sele. La célébration de notre mariage s'est tenue dans le cadre enchanteur du jardin du site touristique <strong>'Au Pieds de l'Avion'</strong>, toujours dans la commune de la N'sele, en présence de nos familles et de nos amis les plus chers. Un moment de bonheur partagé, marqué par la grâce et la chaleur de nos proches, pour sceller notre union.<br><br>Le soir même du mariage civil, une réception de mariage coutumier a été organisée par la belle-famille en l'honneur de la famille de l'époux. Ce moment de partage et de tradition a scellé davantage l'union de nos deux familles, dans une ambiance empreinte de joie et de respect.`,
        videoUrl:
          'https://www.youtube.com/watch?v=HYVc5ewCngM&list=PLlNo9hJhyn12TOLSd4pJoczMgk3kybV2Q&index=2',
      },
      {
        image: 'DSC_1705.jpg',
        title: 'Le 25 Octobre 2024 Bénédiction Nuptiale',
        html: `Un moment tant attendu : à 13h00, heure de Kinshasa, le ciel est descendu pour offrir toutes les bénédictions de Genèse 1:28, acte et scellé pour l'éternité cette union sacrée. La bénédiction a été prononcée par le Ministre <strong>Grâce Dimpa</strong>, commissionné par le Révérend <strong>Richard Diyoka</strong>, empêché à cet instant. À la surprise générale, il est finalement apparu avec des cadeaux et des attentions spéciales pour honorer ses enfants devant toute l'assemblée réunie au <strong>Temple Moriah</strong> / <strong>Shekinah Tabernacle</strong>, témoignant son amour et son soutien indéfectible envers ses brebis (les Couples).<br><br>La soirée dansante a débuté après une séance photo dans les lieux emblématiques de Kinshasa, notamment sur les avenues Roi Baudouin et Des Ambassades vers 16h, immortalisant des moments uniques. La fête s'est poursuivie jusqu'à 23h00 dans la salle <strong>Ma Famille</strong> sur le boulevard Lumumba, dans la commune de Masina. Les mariés ont ensuite passé la nuit dans une suite réservée à l'hôtel Apocalypse avant de regagner leur domicile.`,
        videoUrl:
          'https://www.youtube.com/watch?v=QA6Nkh0o8Wg&list=PLlNo9hJhyn12TOLSd4pJoczMgk3kybV2Q',
      },
    ],
  },

  family: {
    sectionKicker: 'Amis & Famille',
    sectionTitle: "Témoins et Demoiselles d'Honneur",
    filters: [
      { id: 'witnesses', label: "Témoins", match: 'witness' },
      { id: 'bridesmaids', label: "Demoiselles d'Honneur", match: 'bridesmaid' },
    ],
    members: [
      {
        category: 'witness',
        image: 'DSC_1770.jpg',
        title: 'Avec le Rev. Richard Diyoka',
        subtitle: 'Pasteur',
      },
      {
        category: 'witness',
        image: 'DSC_1767.jpg',
        title: 'Avec Le Ministre Grâce Dimpa',
        subtitle: 'Ministre',
      },
      {
        category: 'witness',
        image: 'DSC_1772.jpg',
        title: 'La grande Famille',
        subtitle: 'Famille',
      },
      {
        category: 'witness',
        image: 'DSC_5140.jpg',
        title: 'Parents du Marié',
        subtitle: 'Famille',
      },
      {
        category: 'witness',
        image: 'DSC_5111.jpg',
        title: 'Parents de la Mariée',
        subtitle: 'Famille',
      },
      {
        category: 'witness',
        image: 'groomsmen-2.jpg',
        title: 'Couple François Ntumba',
        subtitle: 'Parrain',
      },
      {
        category: 'witness',
        image: 'groomsmen-3.jpg',
        title: 'Couple Kankolongo Ben',
        subtitle: 'Témoins',
      },
      {
        category: 'witness',
        image: 'DSC_5121.jpg',
        title: 'Couple Augusto Malonga',
        subtitle: 'Famille',
      },
      {
        category: 'witness',
        image: 'DSC_5151.jpg',
        title: 'Frères',
        subtitle: 'Famille',
      },
      {
        category: 'bridesmaid',
        image: 'bridesmaid-3.jpg',
        title: 'Rébecca Mbiya',
        subtitle: "Demoiselle d'Honneur",
      },
      {
        category: 'bridesmaid',
        image: 'FG.jpg',
        title: 'Jemima Muka',
        subtitle: "Demoiselle d'Honneur",
      },
      {
        category: 'bridesmaid',
        image: 'IMG-20241029-WA0228.jpg',
        title: 'Hadassa Tshiala',
        subtitle: "Demoiselle d'Honneur",
      },
      {
        category: 'bridesmaid',
        image: 'IMG-20241029-WA0219.jpg',
        title: 'Kyria Muka',
        subtitle: "Demoiselle d'Honneur",
      },
      {
        category: 'bridesmaid',
        image: 'DSC_2309 (2).jpg',
        title: 'Lys Mbasekela',
        subtitle: "Demoiselle d'Honneur",
      },
    ],
  },

  rsvp: {
    sectionKicker: 'VOEUX',
    sectionTitle: 'Rejoignez notre célébration',
    intro:
      "Nous serions ravis de partager cette journée spéciale avec vous. Vos messages de félicitations et vos vœux chaleureux pour notre avenir comptent beaucoup pour nous. N'hésitez pas à nous envoyer vos souhaits via WhatsApp ou email !",
    /** 0991683269 → format international pour l’API WhatsApp */
    whatsappHref: 'https://api.whatsapp.com/send?phone=243991683269',
    whatsappAriaLabel: 'Nous écrire sur WhatsApp',
    emailHref: 'mailto:jeankisangi@outlook.com',
    emailLabel: 'via Email',
  },

  footer: {
    title: 'Merci infiniment',
    creditLabel: 'Conçu par',
    creditName: 'One Memoria',
    creditUrl: 'https://www.onememoria.com',
    /** 0991683269 — le numéro n’est pas affiché, seulement l’icône WhatsApp */
    whatsappHref: 'https://api.whatsapp.com/send?phone=243991683269',
    whatsappAriaLabel: 'Nous contacter sur WhatsApp',
    copyrightCoupleHref: 'https://api.whatsapp.com/send?phone=243846656910',
    copyrightLabel: 'Jean Et Shekinah',
  },
}
