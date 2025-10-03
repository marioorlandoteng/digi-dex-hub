export interface Attack {
  name: string;
  description: string;
}

export interface Digimon {
  id: string;
  name: string;
  level: string;
  type: string;
  attribute: string;
  description: string;
  design?: string;
  image: string;
  priorForms: string[];
  nextForms: string[];
  attacks?: Attack[];
}

export const digimonDatabase: Digimon[] = [
  {
    id: "angemon",
    name: "Angemon",
    level: "Champion",
    type: "Angel",
    attribute: "Vaccine",
    description: "It has six shining wings, and its body is clad in cloth so pure white as to be divine. It is a being of perfected virtue, and although it is called a Digimon that brings happiness, when confronting evil, it does not stop attacking, with extreme composure, until the opponent is completely annihilated.",
    design: "Angemon draws inspiration from mythological Angels. Humanoid in body and covered in holy white clothing, it has six white, feathery wings. It has long blond hair, and its upper face is covered with a silver mask featuring the Christian cross. It wears a long blue loincloth and four matching straps on its right leg and left arm.",
    image: "/src/assets/angemon.jpg",
    priorForms: ["Patamon"],
    nextForms: ["MagnaAngemon"],
    attacks: [
      { name: "Hand of Fate", description: "Strikes the opponent with its fist shining gold, or fires a beam of energy from its fist." },
      { name: "Angel Rod", description: "Attacks with its Angel Rod." },
      { name: "Omni Typhoon", description: "Creates a divine tornado." }
    ]
  },
  {
    id: "agumon",
    name: "Agumon",
    level: "Rookie",
    type: "Reptile",
    attribute: "Vaccine",
    description: "A Reptile Digimon with a brave heart. Its signature attack is Pepper Breath, which shoots a fireball at opponents.",
    design: "A small dinosaur-like Digimon with orange skin and green eyes. It has sharp claws on its hands and feet, and small wings on its head.",
    image: "/src/assets/agumon.jpg",
    priorForms: ["Koromon"],
    nextForms: ["Greymon"],
    attacks: [
      { name: "Pepper Breath", description: "Shoots a fireball from its mouth at opponents." },
      { name: "Claw Attack", description: "Slashes at enemies with its sharp claws." }
    ]
  },
  {
    id: "gabumon",
    name: "Gabumon",
    level: "Rookie",
    type: "Reptile",
    attribute: "Data",
    description: "A Reptile Digimon wearing the pelt of Garurumon. Despite its shy personality, it is friendly towards those it trusts.",
    design: "Covered in blue and white fur with purple stripes. The pelt has a horn on its head and sharp fangs visible from the mouth opening.",
    image: "/src/assets/gabumon.jpg",
    priorForms: ["Tsunomon"],
    nextForms: ["Garurumon"],
    attacks: [
      { name: "Blue Blaster", description: "Shoots a stream of blue fire from its mouth." },
      { name: "Horn Attack", description: "Charges at the enemy with its horn." }
    ]
  },
  {
    id: "patamon",
    name: "Patamon",
    level: "Rookie",
    type: "Mammal",
    attribute: "Data",
    description: "A small, flying hamster-like Digimon with large ears that can fly through the air. Cute and playful, but can digivolve into powerful forms.",
    design: "A small mammal Digimon with orange fur and large bat-like ears that enable flight. It has blue eyes and a cheerful expression.",
    image: "/src/assets/patamon.jpg",
    priorForms: ["Tokomon"],
    nextForms: ["Angemon"],
    attacks: [
      { name: "Boom Bubble", description: "Releases a ball of air that explodes on impact." },
      { name: "Body Slam", description: "Flies into the opponent with its full body weight." }
    ]
  },
  {
    id: "greymon",
    name: "Greymon",
    level: "Champion",
    type: "Dinosaur",
    attribute: "Vaccine",
    description: "A powerful Dinosaur Digimon with a large horn and incredible strength. Its signature attack is Nova Blast.",
    design: "A large dinosaur-like creature with orange skin and brown stripes. Features a massive curved horn on its head and sharp teeth. Has a muscular build with powerful limbs.",
    image: "/src/assets/greymon.jpg",
    priorForms: ["Agumon"],
    nextForms: ["MetalGreymon"],
    attacks: [
      { name: "Nova Blast", description: "Launches a giant fireball from its mouth that incinerates everything." },
      { name: "Great Horn Attack", description: "Charges at the enemy with its massive horn." }
    ]
  },
  {
    id: "magnaangemon",
    name: "MagnaAngemon",
    level: "Ultimate",
    type: "Angel",
    attribute: "Vaccine",
    description: "An Angel Digimon wearing golden armor and wielding divine power. It is said to be one of the mightiest defenders of justice.",
    design: "An armored angel warrior with eight wings and a golden helmet covering its face. Wears elaborate golden and white armor and carries a holy sword. Radiates divine energy.",
    image: "/src/assets/magnaangemon.jpg",
    priorForms: ["Angemon"],
    nextForms: ["Seraphimon"],
    attacks: [
      { name: "Gate of Destiny", description: "Opens a mystical gate that seals away evil forces into another dimension." },
      { name: "Heaven's Gate", description: "Summons a heavenly gate that purifies evil spirits." },
      { name: "Excalibur", description: "Strikes with a holy sword of divine light." }
    ]
  }
];

export const getDigimonById = (id: string): Digimon | undefined => {
  return digimonDatabase.find(d => d.id === id);
};
