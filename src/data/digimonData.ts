export interface Attack {
  name: string;
  description: string;
}

export interface Debut {
  year: number;
  product: string;
  bookEntry?: string;
}

export interface Digimon {
  id: string;
  name: string;
  kanji?: string;
  romanization?: string;
  level: string;
  type: string;
  attribute: string;
  description: string;
  design?: string;
  etymologies?: string;
  image: string;
  priorForms: string[];
  nextForms: string[];
  attacks?: Attack[];
  debut?: Debut;
  appearances?: string[];
  references?: string[];
}

export const digimonDatabase: Digimon[] = [
  {
    id: "angemon",
    name: "Angemon",
    kanji: "エンジェモン",
    romanization: "Enjemon",
    level: "Champion",
    type: "Angel",
    attribute: "Vaccine",
    description: "It has six shining wings, and its body is clad in cloth so pure white as to be divine. It is a being of perfected virtue, and although it is called a Digimon that brings happiness, when confronting evil, it does not stop attacking, with extreme composure, until the opponent is completely annihilated.",
    design: "Angemon draws inspiration from mythological Angels. Humanoid in body and covered in holy white clothing, it has six white, feathery wings. It has long blond hair, and its upper face is covered with a silver mask featuring the Christian cross. It wears a long blue loincloth and four matching straps on its right leg and left arm.",
    etymologies: "The name 'Angemon' comes from 'Angel', referring to divine celestial beings in religious mythology. The suffix 'mon' is short for 'monster' in Japanese, which is a common ending for all Digimon names.",
    image: "/src/assets/angemon.jpg",
    priorForms: ["Patamon"],
    nextForms: ["MagnaAngemon"],
    attacks: [
      { name: "Hand of Fate", description: "Strikes the opponent with its fist shining gold, or fires a beam of energy from its fist." },
      { name: "Angel Rod", description: "Attacks with its Angel Rod." },
      { name: "Omni Typhoon", description: "Creates a divine tornado." }
    ],
    debut: {
      year: 1999,
      product: "Digimon Adventure",
      bookEntry: "February 1999, Digital Monster Ver.2"
    },
    appearances: ["Digimon Adventure 02", "Digimon Card Battle", "Digimon World", "Digimon Masters"],
    references: ["Digimon Reference Book", "Digimon Adventure Official Guide", "Bandai Digimon Encyclopedia"]
  },
  {
    id: "agumon",
    name: "Agumon",
    kanji: "アグモン",
    romanization: "Agumon",
    level: "Rookie",
    type: "Reptile",
    attribute: "Vaccine",
    description: "A Reptile Digimon with a brave heart. Its signature attack is Pepper Breath, which shoots a fireball at opponents.",
    design: "A small dinosaur-like Digimon with orange skin and green eyes. It has sharp claws on its hands and feet, and small wings on its head.",
    etymologies: "The name 'Agumon' is derived from the Japanese onomatopoeia 'aguagu', which is the sound of biting. This reflects its dinosaur nature and tendency to bite.",
    image: "/src/assets/agumon.jpg",
    priorForms: ["Koromon"],
    nextForms: ["Greymon"],
    attacks: [
      { name: "Pepper Breath", description: "Shoots a fireball from its mouth at opponents." },
      { name: "Claw Attack", description: "Slashes at enemies with its sharp claws." }
    ],
    debut: {
      year: 1997,
      product: "Digital Monster Ver.1",
      bookEntry: "June 1997, First Generation Digital Monster"
    },
    appearances: ["Digimon Adventure", "Digimon Adventure 02", "Digimon Tamers", "Digimon World", "Digimon Card Battle"],
    references: ["Digimon Reference Book", "Digital Monster Ver.1 Manual", "Digimon Adventure Series Guide"]
  },
  {
    id: "gabumon",
    name: "Gabumon",
    kanji: "ガブモン",
    romanization: "Gabumon",
    level: "Rookie",
    type: "Reptile",
    attribute: "Data",
    description: "A Reptile Digimon wearing the pelt of Garurumon. Despite its shy personality, it is friendly towards those it trusts.",
    design: "Covered in blue and white fur with purple stripes. The pelt has a horn on its head and sharp fangs visible from the mouth opening.",
    etymologies: "The name 'Gabumon' comes from 'gabu', the Japanese onomatopoeia for biting or snapping. The 'gabu' sound represents its reptilian nature hidden beneath the fur pelt.",
    image: "/src/assets/gabumon.jpg",
    priorForms: ["Tsunomon"],
    nextForms: ["Garurumon"],
    attacks: [
      { name: "Blue Blaster", description: "Shoots a stream of blue fire from its mouth." },
      { name: "Horn Attack", description: "Charges at the enemy with its horn." }
    ],
    debut: {
      year: 1997,
      product: "Digital Monster Ver.2",
      bookEntry: "September 1997, Second Generation Digital Monster"
    },
    appearances: ["Digimon Adventure", "Digimon Adventure 02", "Digimon World", "Digimon Card Battle", "Digimon Masters"],
    references: ["Digimon Reference Book", "Digital Monster Ver.2 Manual", "Digimon World Guide"]
  },
  {
    id: "patamon",
    name: "Patamon",
    kanji: "パタモン",
    romanization: "Patamon",
    level: "Rookie",
    type: "Mammal",
    attribute: "Data",
    description: "A small, flying hamster-like Digimon with large ears that can fly through the air. Cute and playful, but can digivolve into powerful forms.",
    design: "A small mammal Digimon with orange fur and large bat-like ears that enable flight. It has blue eyes and a cheerful expression.",
    etymologies: "The name 'Patamon' is derived from 'pata pata', the Japanese onomatopoeia for flapping wings. This references its ability to fly using its large ears.",
    image: "/src/assets/patamon.jpg",
    priorForms: ["Tokomon"],
    nextForms: ["Angemon"],
    attacks: [
      { name: "Boom Bubble", description: "Releases a ball of air that explodes on impact." },
      { name: "Body Slam", description: "Flies into the opponent with its full body weight." }
    ],
    debut: {
      year: 1998,
      product: "Digital Monster Ver.3",
      bookEntry: "March 1998, Third Generation Digital Monster"
    },
    appearances: ["Digimon Adventure", "Digimon Adventure 02", "Digimon World", "Digimon Card Battle", "Digimon Heroes"],
    references: ["Digimon Reference Book", "Digital Monster Ver.3 Manual", "Digimon Adventure Character Guide"]
  },
  {
    id: "greymon",
    name: "Greymon",
    kanji: "グレイモン",
    romanization: "Gureimon",
    level: "Champion",
    type: "Dinosaur",
    attribute: "Vaccine",
    description: "A powerful Dinosaur Digimon with a large horn and incredible strength. Its signature attack is Nova Blast.",
    design: "A large dinosaur-like creature with orange skin and brown stripes. Features a massive curved horn on its head and sharp teeth. Has a muscular build with powerful limbs.",
    etymologies: "The name 'Greymon' comes from 'grey' (the color) and 'great', reflecting its great size and power. The suffix 'mon' is standard for all Digimon.",
    image: "/src/assets/greymon.jpg",
    priorForms: ["Agumon"],
    nextForms: ["MetalGreymon"],
    attacks: [
      { name: "Nova Blast", description: "Launches a giant fireball from its mouth that incinerates everything." },
      { name: "Great Horn Attack", description: "Charges at the enemy with its massive horn." }
    ],
    debut: {
      year: 1997,
      product: "Digital Monster Ver.1",
      bookEntry: "June 1997, First Generation Digital Monster"
    },
    appearances: ["Digimon Adventure", "Digimon Adventure 02", "Digimon World", "Digimon Card Battle", "Digimon Story"],
    references: ["Digimon Reference Book", "Digital Monster Ver.1 Evolution Guide", "Digimon World Strategy Guide"]
  },
  {
    id: "magnaangemon",
    name: "MagnaAngemon",
    kanji: "ホーリーエンジェモン",
    romanization: "Hōrī Enjemon",
    level: "Ultimate",
    type: "Angel",
    attribute: "Vaccine",
    description: "An Angel Digimon wearing golden armor and wielding divine power. It is said to be one of the mightiest defenders of justice.",
    design: "An armored angel warrior with eight wings and a golden helmet covering its face. Wears elaborate golden and white armor and carries a holy sword. Radiates divine energy.",
    etymologies: "The name 'MagnaAngemon' combines 'Magna' (Latin for 'great' or 'magnificent') with 'Angel', emphasizing its status as a powerful angelic warrior. It represents the pinnacle of angelic Digimon.",
    image: "/src/assets/magnaangemon.jpg",
    priorForms: ["Angemon"],
    nextForms: ["Seraphimon"],
    attacks: [
      { name: "Gate of Destiny", description: "Opens a mystical gate that seals away evil forces into another dimension." },
      { name: "Heaven's Gate", description: "Summons a heavenly gate that purifies evil spirits." },
      { name: "Excalibur", description: "Strikes with a holy sword of divine light." }
    ],
    debut: {
      year: 1999,
      product: "Digimon Adventure",
      bookEntry: "August 1999, Pendulum series 2.0"
    },
    appearances: ["Digimon Adventure 02", "Digimon World 2", "Digimon Card Battle", "Digimon Masters"],
    references: ["Digimon Reference Book", "Digimon Pendulum 2.0 Guide", "Digimon Adventure Complete Chronicle"]
  }
];

export const getDigimonById = (id: string): Digimon | undefined => {
  return digimonDatabase.find(d => d.id === id);
};
