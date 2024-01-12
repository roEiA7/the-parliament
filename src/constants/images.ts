export enum ImageKey {
  PITA = "PITA",
  ONION = "ONION",
  CHOCOLATE = "CHOCOLATE",
  KIPPA = "KIPPA",
  IRENA = "IRENA",
  BASKETBALL = "BASKETBALL",
  FAT = "FAT",
  RING = "RING",
  FREE_THROW = "FREE_THROW",
  SHEEP = "SHEEP",
  ORE = "ORE",
  MONOPOLY = "MONOPOLY",
  ROAD = "ROAD",
  LBJ = "LBJ",
  CROWN = "CROWN",
  BB = "BB",
  BURGER = "BURGER",
  POKER = "POKER",
  CHAINS = "CHAINS",
  DRAGON = "DRAGON",
  FIRE = "FIRE",
  QUEEN = "QUEEN",
  FACIAL_MASK = "FACIAL_MASK",
  GUACAMOLE = "GUACAMOLE",
  SUSHI = "SUSHI",
  SOMBRERO = "SOMBRERO",
  BAMBOO = "BAMBOO",
  KONG_FU = "KONG_FU",
  CHINA = "CHINA",
  NIKE_PANDA_SHOES = "NIKE_PANDA_SHOES",
  CHEESE = "CHEESE",
  HOUSE = "HOUSE",
  COW = "COW",
  TOTTENHAM = "TOTTENHAM",
  SALMON = "SALMON",
  NORWAY = "NORWAY",
  WINDOW = "WINDOW",
  APPLE = "APPLE",
  MONEY = "MONEY",
  OFFICE_WORD = "OFFICE_WORD",
  OLD_WINDOWS_VINEYARD = "OLD_WINDOWS_VINEYARD",
  OPPENHEIMER = "OPPENHEIMER",
  SPACE = "SPACE",
  CAT = "CAT",
  TRAFFIC_JAM = "TRAFFIC_JAM",
  BOTTLE = "BOTTLE",
  BEER_OPENER = "BEER_OPENER",
  IKEA = "IKEA",
  ZLATAN = "ZLATAN",
  VIKING = "VIKING",
  NORTHERN_LIGHTS = "NORTHERN_LIGHTS",
  GYM = "GYM",
  BARBER = "BARBER",
  PINOCCHIO = "PINOCCHIO",
  TIME = "TIME",
  PUMPKIN = "PUMPKIN",
  WITCH = "WITCH",
  CANDY = "CANDY",
  TAXI = "TAXI",
  PISTOL = "PISTOL",
  EGGS = "EGGS",
  CASHIER = "CASHIER",
  STAR = "STAR",
  CIGARETTE = "CIGARETTE",
  SHAVIT = "SHAVIT",
  AMNON = "AMNON",
  POUCH = "POUCH",
  UMBRELLA = "UMBRELLA",
  GREY = "GREY",
  TROUT = "TROUT",
  GLASSES = "GLASSES",
  OLD_HAT = "OLD_HAT",
  METH = "METH",
  PERIODIC_TABLE = "PERIODIC_TABLE",
  PSG = "PSG",
  GOAT = "GOAT",
  MOUSE = "MOUSE",
  RATATOUILLE_DISH = "RATATOUILLE_DISH",
  EIFFEL = "EIFFEL",
  CHEF_HAT = "CHEF_HAT",
  CHEF = "CHEF",
  PADTHAI = "PADTHAI",
  WALK = "WALK",
  MARVEL = "MARVEL",
  SPY = "SPY",
  COMPUTER_VIRUS = "COMPUTER_VIRUS",
  AUSTRALIA = "AUSTRALIA",
  MONKEY = "MONKEY",
  GEORGE = "GEORGE",
  LEVED = "LEVED",
  PIERROT = "PIERROT",
  HONDA = "HONDA",
  MACCABI_HEALTH_SERVICES = "MACCABI_HEALTH_SERVICES",
  GERMANY_EAGLE_FLAG = "GERMANY_EAGLE_FLAG",
}

export const IMAGES = Object.values(ImageKey);

export const IMAGE_COMBINATIONS: ImageKey[][] = [
  // Kippur
  [
    ImageKey.PITA,
    ImageKey.ONION,
    ImageKey.CHOCOLATE,
    ImageKey.KIPPA,
    ImageKey.IRENA,
  ],
  // Shaquille
  [ImageKey.BASKETBALL, ImageKey.FAT, ImageKey.RING, ImageKey.FREE_THROW],
  // Catan
  [ImageKey.SHEEP, ImageKey.ORE, ImageKey.MONOPOLY, ImageKey.ROAD],
  // King
  [ImageKey.LBJ, ImageKey.CROWN, ImageKey.BB, ImageKey.BURGER, ImageKey.POKER],
  // Daenerys
  [ImageKey.CHAINS, ImageKey.DRAGON, ImageKey.FIRE, ImageKey.QUEEN],
  // Avocado
  [ImageKey.FACIAL_MASK, ImageKey.GUACAMOLE, ImageKey.SUSHI, ImageKey.SOMBRERO],
  // Panda
  [
    ImageKey.BAMBOO,
    ImageKey.KONG_FU,
    ImageKey.CHINA,
    ImageKey.NIKE_PANDA_SHOES,
  ],
  // Cottage
  [ImageKey.CHEESE, ImageKey.HOUSE, ImageKey.COW],
  // Solomon
  [ImageKey.TOTTENHAM, ImageKey.SALMON, ImageKey.NORWAY],
  // Microsoft
  [
    ImageKey.WINDOW,
    ImageKey.APPLE,
    ImageKey.MONEY,
    ImageKey.OFFICE_WORD,
    ImageKey.OLD_WINDOWS_VINEYARD,
  ],
  // Quantom
  [ImageKey.OPPENHEIMER, ImageKey.SPACE, ImageKey.CAT],
  // Cork
  [ImageKey.TRAFFIC_JAM, ImageKey.BOTTLE, ImageKey.BEER_OPENER],
  // Sweden
  [ImageKey.IKEA, ImageKey.ZLATAN, ImageKey.VIKING, ImageKey.NORTHERN_LIGHTS],
  // Tzion
  [
    ImageKey.GYM,
    ImageKey.BARBER,
    ImageKey.PINOCCHIO,
    ImageKey.TIME,
    ImageKey.ZLATAN,
  ],
  // Halloween
  [ImageKey.PUMPKIN, ImageKey.WITCH, ImageKey.CANDY],
  // Amazia
  [ImageKey.TAXI, ImageKey.PISTOL, ImageKey.EGGS],
  // Kokhava
  [
    ImageKey.CASHIER,
    ImageKey.STAR,
    ImageKey.CIGARETTE,
    ImageKey.SHAVIT,
    ImageKey.AMNON,
  ],
  // Amnon
  [
    ImageKey.POUCH,
    ImageKey.CASHIER,
    ImageKey.UMBRELLA,
    ImageKey.GREY,
    ImageKey.TROUT,
  ],
  // Breaking Bad
  [ImageKey.GLASSES, ImageKey.OLD_HAT, ImageKey.METH, ImageKey.PERIODIC_TABLE],
  // Jordan
  [ImageKey.NIKE_PANDA_SHOES, ImageKey.PSG, ImageKey.GOAT],
  // Ratatouille
  [
    ImageKey.MOUSE,
    ImageKey.RATATOUILLE_DISH,
    ImageKey.EIFFEL,
    ImageKey.CHEF_HAT,
  ],
  // Wok
  [ImageKey.CHEF, ImageKey.PADTHAI, ImageKey.WALK],
  // Spider
  [ImageKey.MARVEL, ImageKey.SPY, ImageKey.COMPUTER_VIRUS, ImageKey.AUSTRALIA],
  // Poker
  [ImageKey.MONKEY, ImageKey.GEORGE, ImageKey.LEVED, ImageKey.MONEY],
  // Maccabi
  [ImageKey.PIERROT, ImageKey.MACCABI_HEALTH_SERVICES, ImageKey.HONDA],
  // Tzahevet
  [
    ImageKey.COMPUTER_VIRUS,
    ImageKey.MACCABI_HEALTH_SERVICES,
    ImageKey.GERMANY_EAGLE_FLAG,
  ],
];
