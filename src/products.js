const products = [
  {
    id: 0,
    image:
      "https://images.internetstores.de/products/1484000/02/ee77fd/cube-aim-sl-allroad-greynblack-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Access WS",
    manufacturer: "CUBE",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 3249,
    quantity: 1,
  },
  {
    id: 1,
    image:
      "https://images.internetstores.de/products/1483967/02/63847a/cube-aim-allroad-desertnorange-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Aim Allroad",
    manufacturer: "CUBE",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 3249,
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://images.internetstores.de/products/1483994/02/5ed6d3/cube-aim-sl-graphitenmetal-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Aim SL",
    manufacturer: "CUBE",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 3499,
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://images.internetstores.de/products/1484000/02/ee77fd/cube-aim-sl-allroad-greynblack-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Aim SL Allroad",
    manufacturer: "CUBE",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 4249,
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://images.internetstores.de/products/1700294/02/2fb0d6/haibike-adventr-fs-8-gloss-metallic-green-apple-black-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Adventr FS 8",
    manufacturer: "HAIBIKE",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 19199,
    quantity: 1,
  },
  {
    id: 5,
    image:
      "https://images.internetstores.de/products/1376760/02/fc9e4e/haibike-hardnine-10-titan-black-matte-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "HardNine 10",
    manufacturer: "HAIBIKE",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 18299,
    quantity: 1,
  },
  {
    id: 6,
    image:
      "https://images.internetstores.de/products/1700327/02/3f243e/haibike-allmtn-cf-6-gloss-matte-gorange-black-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "AllMtn CF 6",
    manufacturer: "HAIBIKE",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 22299,
    quantity: 1,
  },
  {
    id: 7,
    image:
      "https://images.internetstores.de/products/1376790/02/a86262/haibike-hardseven-5-blue-canary-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "HardSeven 5",
    manufacturer: "HAIBIKE",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 13919,
    quantity: 1,
  },
  {
    id: 8,
    image:
      "https://images.internetstores.de/products/1537670/02/290065/ghost-riot-am-al-full-party-silver-purple-glossy-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Riot AM AL",
    manufacturer: "GHOST",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 16499,
    quantity: 1,
  },
  {
    id: 9,
    image:
      "https://images.internetstores.de/products/1537604/02/6001bf/ghost-lector-fs-sf-lc-universal-olive-light-olive-glossy-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Lector FS SF LC",
    manufacturer: "GHOST",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 22199,
    quantity: 1,
  },
  {
    id: 10,
    image:
      "https://images.internetstores.de/products/1537718/02/3d9221/ghost-road-rage-essential-al-metallic-khaki-monarch-orange-glossy-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Road Rage",
    manufacturer: "GHOST",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 6999,
    quantity: 1,
  },
  {
    id: 11,
    image:
      "https://images.internetstores.de/products/1283325/02/ce4cf8/ghost-square-cross-base-al-trapeze-petrol-ocean-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Cross Base AL",
    manufacturer: "GHOST",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 2599,
    quantity: 1,
  },
  {
    id: 12,
    image:
      "https://images.internetstores.de/products/1490459/02/dccc2a/orbea-onna-50-violet-blue-white-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Onna 50",
    manufacturer: "ORBEA",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: "2999",
    quantity: 1,
  },
  {
    id: 13,
    image:
      "https://images.internetstores.de/products/1490438/02/eb33a0/orbea-onna-40-brick-red-green-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Onna 40",
    manufacturer: "ORBEA",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 3599,
    quantity: 1,
  },
  {
    id: 14,
    image:
      "https://images.internetstores.de/products/1491410/02/9f1c0d/orbea-alma-h30-black-ice-green-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Alma H30",
    manufacturer: "ORBEA",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 5499,
    quantity: 1,
  },
  {
    id: 15,
    image:
      "https://images.internetstores.de/products/1491404/02/48145a/orbea-alma-h20-blue-bondi-bright-red-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Alma H20",
    manufacturer: "ORBEA",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 6299,
    quantity: 1,
  },
  {
    id: 16,
    image:
      "https://images.internetstores.de/products/1502354/02/98da31/focus-aventura-68-625wh-gold-brown-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Aventura²",
    manufacturer: "FOCUS",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 15799,
    quantity: 1,
  },
  {
    id: 17,
    image:
      "https://images.internetstores.de/products/1502447/02/fc506b/focus-jarifa-69-625wh-diamond-black-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Jarifa²",
    manufacturer: "FOCUS",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 18899,
    quantity: 1,
  },
  {
    id: 18,
    image:
      "https://images.internetstores.de/products/1502510/02/cc3036/focus-thron-68-625wh-creme-white-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Thron²",
    manufacturer: "FOCUS",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 19899,
    quantity: 1,
  },
  {
    id: 19,
    image:
      "https://images.internetstores.de/products/1502549/02/2cfaa7/focus-whistler-36-slate-grey-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
    name: "Whistler",
    manufacturer: "FOCUS",
    shortDescription: "Lorem ipsum dolor sit amet.",
    price: 2699,
    quantity: 1,
  },
];
