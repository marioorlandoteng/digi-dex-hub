export interface Digimon {
  id: string;
  name: string;
  level: string;
  type: string;
  attribute: string;
  description: string;
  image: string;
  priorForms: string[];
  nextForms: string[];
  attacks?: string[];
}

export const digimonDatabase: Digimon[] = [
  {
    id: "angemon",
    name: "Angemon",
    level: "Champion",
    type: "Angel",
    attribute: "Vaccine",
    description: "It has six shining wings, and its body is clad in cloth so pure white as to be divine. It is a being of perfected virtue, and although it is called a Digimon that brings happiness, when confronting evil, it does not stop attacking, with extreme composure, until the opponent is completely annihilated.",
    image: "/src/assets/angemon.jpg",
    priorForms: ["Patamon"],
    nextForms: ["MagnaAngemon"],
    attacks: ["Hand of Fate", "Angel Rod", "Omni Typhoon"]
  },
  {
    id: "agumon",
    name: "Agumon",
    level: "Rookie",
    type: "Reptile",
    attribute: "Vaccine",
    description: "A Reptile Digimon with a brave heart. Its signature attack is Pepper Breath, which shoots a fireball at opponents.",
    image: "/src/assets/agumon.jpg",
    priorForms: ["Koromon"],
    nextForms: ["Greymon"],
    attacks: ["Pepper Breath", "Claw Attack"]
  },
  {
    id: "gabumon",
    name: "Gabumon",
    level: "Rookie",
    type: "Reptile",
    attribute: "Data",
    description: "A Reptile Digimon wearing the pelt of Garurumon. Despite its shy personality, it is friendly towards those it trusts.",
    image: "/src/assets/gabumon.jpg",
    priorForms: ["Tsunomon"],
    nextForms: ["Garurumon"],
    attacks: ["Blue Blaster", "Horn Attack"]
  },
  {
    id: "patamon",
    name: "Patamon",
    level: "Rookie",
    type: "Mammal",
    attribute: "Data",
    description: "A small, flying hamster-like Digimon with large ears that can fly through the air. Cute and playful, but can digivolve into powerful forms.",
    image: "/src/assets/patamon.jpg",
    priorForms: ["Tokomon"],
    nextForms: ["Angemon"],
    attacks: ["Boom Bubble", "Body Slam"]
  },
  {
    id: "greymon",
    name: "Greymon",
    level: "Champion",
    type: "Dinosaur",
    attribute: "Vaccine",
    description: "A powerful Dinosaur Digimon with a large horn and incredible strength. Its signature attack is Nova Blast.",
    image: "/src/assets/greymon.jpg",
    priorForms: ["Agumon"],
    nextForms: ["MetalGreymon"],
    attacks: ["Nova Blast", "Great Horn Attack"]
  },
  {
    id: "magnaangemon",
    name: "MagnaAngemon",
    level: "Ultimate",
    type: "Angel",
    attribute: "Vaccine",
    description: "An Angel Digimon wearing golden armor and wielding divine power. It is said to be one of the mightiest defenders of justice.",
    image: "/src/assets/magnaangemon.jpg",
    priorForms: ["Angemon"],
    nextForms: ["Seraphimon"],
    attacks: ["Gate of Destiny", "Heaven's Gate", "Excalibur"]
  }
];

export const getDigimonById = (id: string): Digimon | undefined => {
  return digimonDatabase.find(d => d.id === id);
};
