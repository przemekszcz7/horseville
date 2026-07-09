export interface ImageAsset {
  id: number;
  url: string;
  caption: string;
  category: 'all' | 'horses' | 'rooms' | 'stable';
}

export interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export const HERO_CONTENT = {
  title: "Horse Ville",
  subtitle: "Twoje miejsce w świecie koni",
  description: "Wyjątkowa stadnina koni połączona z komfortowym noclegiem. Miejsce stworzone dla osób, które szukają odpoczynku, natury i prawdziwego kontaktu z końmi.",
  heroImage: "https://i.ibb.co/WpnRqjWc/730310888-17946739614217281-7993099779273479979-n.jpg",
  logo: "https://i.ibb.co/wZzgGhTJ/445187395-122111708522319234-1375993355016650818-n.jpg"
};

export const ABOUT_CONTENT = {
  title: "O nas",
  accentText: "Stworzone z pasji do koni i natury",
  paragraphs: [
    "Horse Ville to miejsce stworzone z pasji do koni i natury.",
    "Położona w malowniczej okolicy stadnina oferuje wyjątkową atmosferę, spokojny wypoczynek oraz możliwość spędzenia czasu blisko zwierząt.",
    "To idealne miejsce dla rodzin, miłośników koni oraz osób szukających odpoczynku z dala od codziennego pośpiechu."
  ]
};

export const ACCOMMODATION_CONTENT = {
  title: "Noclegi",
  heading: "Komfortowe pokoje w otoczeniu natury",
  subheading: "Zapewniamy wygodne noclegi w spokojnej atmosferze.",
  features: [
    "nowe meble",
    "czajnik",
    "kuchenka mikrofalowa",
    "lodówkę"
  ],
  footerText: "Idealne miejsce zarówno na dłuższy pobyt, jak i krótki odpoczynek podczas podróży."
};

export const HORSES_CONTENT = {
  title: "Konie",
  heading: "Świat koni na wyciągnięcie ręki 🐴",
  subheading: "W Horse Ville konie są najważniejszą częścią naszego miejsca.",
  features: [
    "kontakt z końmi",
    "nauka jazdy konnej",
    "pierwsze doświadczenia w siodle",
    "spędzanie czasu w wyjątkowej atmosferze stadniny"
  ],
  kidsLabel: "Dla dzieci przygotowujemy bezpieczne i przyjazne zajęcia pod okiem instruktorów."
};

export const KIDS_CONTENT = {
  title: "Dla Dzieci",
  heading: "Pierwsze kroki w świecie koni",
  description: "Dzieci mogą poznać konie z bliska, nauczyć się podstaw jazdy oraz spędzić czas pod opieką osób z doświadczeniem.",
  highlight: "Tworzymy atmosferę bezpieczeństwa, cierpliwości i radości."
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Karolina i rodzina",
    role: "Pobyt rodzinny",
    content: "Wynajmowaliśmy trzy pokoje w Horse Ville i byliśmy zadowoleni. Pokoje były czyste, wyposażone w nowe meble. W każdym z nich znajdował się czajnik, kuchenka mikrofalowa i lodówka. Dziękujemy gospodarzom za gościnność!",
    rating: 5
  },
  {
    id: 2,
    author: "Michał i Staś",
    role: "Krótki pobyt w trasie",
    content: "Serdecznie polecam obiekt! Zarezerwowaliśmy nocleg podczas powrotu z nad morza. Pokoje piękne. Przy okazji synek miał okazję sprawdzić się w siodle pod okiem pani instruktor Victorii. Ogromne podejście do dzieci!",
    rating: 5
  },
  {
    id: 3,
    author: "Aneta",
    role: "Weekend w siodle",
    content: "Polecam super atmosfera. Będziecie zaopiekowani",
    rating: 5
  }
];

export const GALLERY_IMAGES: ImageAsset[] = [
  {
    id: 1,
    url: "https://i.ibb.co/jkBGLfTn/681839673-17937607380217281-645680267667242432-n.jpg",
    caption: "Nasza stajnia w promieniach słońca",
    category: "stable"
  },
  {
    id: 2,
    url: "https://i.ibb.co/Vp3ks7VW/658374947-17937607359217281-5695986113271139023-n.jpg",
    caption: "Przyjacielskie konie na wybiegu",
    category: "horses"
  },
  {
    id: 3,
    url: "https://i.ibb.co/2117Wcx0/684152709-17938242354217281-4726112163349825453-n.jpg",
    caption: "Piękne, zadbane konie",
    category: "horses"
  },
  {
    id: 4,
    url: "https://i.ibb.co/4ZkcC3Ss/682800858-17938242339217281-9196255322194484883-n.jpg",
    caption: "Chwile pełne spokoju i natury",
    category: "horses"
  },
  {
    id: 5,
    url: "https://i.ibb.co/tTHtNNjY/684020174-17940148878217281-1094721737301612312-n.jpg",
    caption: "Komfortowy, stylowy pokój",
    category: "rooms"
  },
  {
    id: 6,
    url: "https://i.ibb.co/QvytXf6B/687797131-17940148881217281-154525787238550088-n.jpg",
    caption: "Nowoczesne meble i przytulny klimat",
    category: "rooms"
  },
  {
    id: 7,
    url: "https://i.ibb.co/qLNyXfQh/728963435-17946010986217281-4974911807032600938-n.jpg",
    caption: "Jazda konna na profesjonalnym padoku",
    category: "horses"
  },
  {
    id: 8,
    url: "https://i.ibb.co/hxVVRzrc/729385513-17946011028217281-5107512005845471396-n.jpg",
    caption: "Uroczy kucyk dla najmłodszych",
    category: "horses"
  },
  {
    id: 9,
    url: "https://i.ibb.co/Rph5gd6D/729455637-17946011118217281-297307581200347679-n.jpg",
    caption: "Zajęcia dla dzieci i dorosłych",
    category: "horses"
  },
  {
    id: 10,
    url: "https://i.ibb.co/6JLssxC0/728990911-17946010995217281-5973911151886344809-n.jpg",
    caption: "Nauka czyszczenia i pielęgnacji koni",
    category: "stable"
  },
  {
    id: 11,
    url: "https://i.ibb.co/My7jqLGQ/728633790-17946011016217281-8867380525653127206-n.jpg",
    caption: "Zabawa i nauka w siodle",
    category: "horses"
  },
  {
    id: 12,
    url: "https://i.ibb.co/1tF2Q2ST/729929429-17946011082217281-6180505701970009665-n.jpg",
    caption: "Spokój i sielankowa atmosfera",
    category: "stable"
  },
  {
    id: 13,
    url: "https://i.ibb.co/HLwbQtVz/729593843-17946011055217281-1784615401067242295-n.jpg",
    caption: "Kontakt ze zwierzętami od najmłodszych lat",
    category: "horses"
  },
  {
    id: 14,
    url: "https://i.ibb.co/3Y13QK48/731053520-17946739653217281-122269804230260698-n.jpg",
    caption: "Nasza piękna klacz na padoku",
    category: "horses"
  },
  {
    id: 15,
    url: "https://i.ibb.co/Xk33NmmW/731060114-17946739635217281-440691491926156844-n.jpg",
    caption: "Prawdziwa jeździecka pasja",
    category: "horses"
  },
  {
    id: 16,
    url: "https://i.ibb.co/qLqD1YyK/730995412-17946739623217281-2142374020518969525-n.jpg",
    caption: "Uśmiech i satysfakcja w siodle",
    category: "horses"
  },
  {
    id: 17,
    url: "https://i.ibb.co/WpnRqjWc/730310888-17946739614217281-7993099779273479979-n.jpg",
    caption: "Niezapomniane wspomnienia z Horse Ville",
    category: "horses"
  }
];

export const CONTACT_INFO = {
  address: {
    line1: "Horse Ville",
    line2: "97-371 Pawłów Górny 11"
  },
  phone: "514 036 399",
  email: "stajniahorseville@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61559577040000",
    instagram: "https://www.instagram.com/stajniahorsevillee",
    tiktok: "https://www.tiktok.com/@stajnia.horse.ville"
  }
};
