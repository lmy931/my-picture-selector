const products = [
  {
    name: "Amber Granda",
    imagePath: "/images/products/amber_granda.png",
    description1: "A look into a deeper sense of place, warmth remains present as allure unfolds.",
    description2: "Italian Mandarin, Benzoin Balsam, Amber, Musk, Vanilla, Jasmine, Geranium, Patchouli"
  },
  {
    name: "Arobalance",
    imagePath: "/images/products/arobalance.png",
    description1: "An empty day of rest surrounded by soft textures and linens grazing smooth skin.",
    description2: "Enjoy a calm, serene and balanced atmosphere with No Stress – Arobalance."
  },
  {
    name: "Cedar Mood",
    imagePath: "/images/products/cedar_mood.png",
    description1: "Legacy speaks through worn pages unfurling at the edges, exposed by dusty rays of light.",
    description2: "Lavender, Cypress, Rosemary, Carnation, Cedarwood, Pine Needles, Citrus, Leather, Moss, Sandalwood."
  },
  {
    name: "Fig Essence",
    imagePath: "/images/products/fig_essence.png",
    description1: "Fig Essence imagines a sun-soaked fig tree with an invigorating warmth. ",
    description2: "Fig Sap, Coriander, Fig, Violet, Peach, Cyclamen, Fig Wood, Cedarwood, Sandalwood"
  },
  {
    name: "Ginger Flower",
    imagePath: "/images/products/ginger_flower.png",
    description1: "The rarest of blooms, a crimson dream. Always elusive and seemingly unattainable.",
    description2: "Fresh Cut Grass, Lilac, Pineapple, Ginger Flower, Violet, Vanilla"
  },
  {
    name: "Havana",
    imagePath: "/images/products/ginger_flower.png",
    description1: "Heavy in the hips as the heat sits in the air, luscious golden drips of whiskey slither down a glass with a crimson kiss stain.",
    description2: "Dark Virginian Cedar, Whiskey, Oak, Vanilla, Incense, Tobacco leaves, Strawberry, White Lily, Fir Resin"
  },
  {
    name: "Illuminate",
    imagePath: "/images/products/illuminate.png",
    description1: "Luminous through a gradient sky, the central spark of a soft glow.",
    description2: "Felt as truth, a tangible light, the sinking sun as simultaneously permanent and fleeting."
  },
  {
    name: "Iron Bark",
    imagePath: "/images/products/iron_bark.png",
    description1: "A step through a once molten lava basin, now dried with the winds of stone queens.",
    description2: "Eucalyptus, Ravensara, Fennel, Cinnamon, Tea Tree Usage"
  },
  {
    name: "Lemongrass Tea", /////////////////////////////
    imagePath: "/images/products/lemongrass_tea.png",
    description1: "The transition from embedded to free, fresh beginnings with a renewed sense of purpose.",
    description2: "Green Tea & Lemongrass, Lemon, Thyme, Jasmine, Musk, Cedarwood"
  },
  {
    name: "Longboard",
    imagePath: "/images/products/longboard.png",
    description1: "Filling to the brim, then emptying to the edges, swelling and seceding.",
    description2: "Sea Accord, Birch Foliage, Cucumber, Green Apple, Seaweed, Fir Balsam"
  },
  {
    name: "Moonshot",
    imagePath: "/images/products/moonshot.png",
    description1: "A capsule of comfort, up and beyond, floating in the vast abyss.",
    description2: "Mimosa, Acacia Flower, Orris, Rock Minerals, Sandalwood"
  },
  {
    name: "Pomelo Pulp",
    imagePath: "/images/products/pomelo_pulp.png",
    description1: "A tiny silver spoon cradles citrus ice as it dissolves into smoother texture with every fan of tropic heat.",
    description2: "Grapefruit, Lime, Ginger, Coriander, Lavender, Sandalwood"
  },
  {
    name: "Saffron Suede",
    imagePath: "/images/products/saffron_suede.png",
    description1: "Astride the dunes under starry skies, hypnotic rhythms surround.",
    description2: "Purple Saffron Flower, Sage, Patchouli Wood, White Suede"
  },
  {
    name: "Sandalwood Gold",
    imagePath: "/images/products/sandalwood_gold.png",
    description1: "Heat of charred ash casts a warm glow on a vast wall of intricate formations.",
    description2: "Sandalwood, Leather, Cardamom, Iris, Violet, Cedar"
  },
];

// 随机选择一个产品
export function getRandomProduct() {
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}

export default products;
