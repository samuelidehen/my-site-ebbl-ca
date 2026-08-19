export const nav = [
  {
    label: "Qui sommes-nous",
    children: ["Ce que nous croyons", "Notre mission", "Historique"],
  },
  { label: "Ce qui vous attend" },
  {
    label: "Ministères",
    children: ["Enfants", "Jeunes", "Adultes"],
  },
  {
    label: "Événements",
    children: ["Calendrier", "Prochains événements"],
  },
  {
    label: "Médias",
    children: ["Sermons", "Bulletins de prière"],
  },
  { label: "Contactez-nous" },
];

export const hero = {
  times: ["École du dimanche – 9h30", "Culte du matin – 10h00"],
  cta: "Rejoignez-nous dimanche",
};

export const scripture = {
  quote:
    "Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.",
  reference: "Matthieu 18:20",
};

export const mission = {
  text: "L'EBBL existe pour glorifier Dieu en faisant des disciples et en les affermissant qui, ensemble, deviennent à l'image du Seigneur Jésus-Christ.",
};

export const engagements = [
  {
    eyebrow: "Nos engagements",
    title: "Un culte qui honore Dieu",
    body: "Engagés envers un culte qui honore Dieu, un enseignement biblique pratique, une communion fraternelle sincère et un évangélisme centré sur Christ.",
    link: "En savoir plus",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80",
    imageSide: "right",
  },
  {
    eyebrow: "Vie d'église",
    title: "Une famille dans la foi",
    body: "Ensemble, nous grandissons dans la connaissance de la Parole de Dieu et nous portons les fardeaux les uns des autres avec amour.",
    link: "En savoir plus",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    imageSide: "left",
  },
];

export const ministries = [
  {
    name: "Enfants",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jeunes",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Adultes",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
];

export const newsletter = {
  title: "Joignez-vous à notre infolettre",
  body: "Recevez les nouvelles de l'Église, les méditations et les informations sur les événements, directement dans votre boîte courriel.",
  cta: "M'inscrire",
};

export const footer = {
  tagline:
    "Un lieu pour glorifier Dieu, grandir dans sa Parole et vivre la communion des saints.",
  contact: {
    address: "123, rue de la Foi, Montréal, QC",
    phone: "(514) 555-0182",
    email: "contact@ebbl.org",
  },
  quickLinks: [
    "Ce que nous croyons",
    "Bulletins de prière",
    "Cahiers de mémoire biblique",
    "Événements",
    "Sermons",
    "Contactez-nous",
    "Heures des cultes",
  ],
  serviceHours: [
    { day: "Dimanche – 10h00", label: "Culte du matin" },
    { day: "Jeudi – 19h00", label: "Soirée de prière" },
  ],
  secondaryLinks: [
    "Missions EBBL",
    "Institut biblique",
    "Conseil biblique",
    "Écoles chrétiennes",
  ],
  copyright: `© ${new Date().getFullYear()} Église EBBL. Tous droits réservés.`,
};
