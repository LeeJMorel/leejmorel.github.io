/* eslint-disable @typescript-eslint/no-explicit-any */
//filter for both visualizations
export interface FilterOption {
  label: string;
  color: string;
}

export const defaultFilter = { label: "Fantastic Four", color: "grey" };

export const filterOptions: FilterOption[] = [
  { label: "Fantastic Four", color: "grey" },
];

export const comicAbbreviationMap = {
  AVE: "Avengers",
  SPI: "Spiderman",
  XM: "X-Men",
  FF: "Fantastic Four",
  MS: "Midnight Sons",
  DEF: "Defenders",
};

export interface SocialPostProps {
  username: string;
  profile?: string;
  comicsCount: number;
  followersCount: number;
  followingList: string[];
}

export interface ComicData {
  comic_name: string;
  active_years: string;
  issue_title: string;
  publish_date: string;
  issue_description: string;
  penciler: string;
  writer: string;
  cover_artist: string;
  Imprint: string;
  Format: string;
  Rating: string;
  Price: string;
  Grouping?: string;
  Event?: string;
}

export interface UserData {
  label: string;
  comic: string;
}

export interface Node {
  label: string;
  x: number;
  y: number;
  id: string;
  attributes: Record<string, any>;
  color: string;
  size: number;
}

export interface Edge {
  source: string;
  target: string;
  id: string;
  attributes: Record<string, any>;
  color: string;
  size: number;
}

export interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

export const profileBodyMap = {
  ALETA: "Mysterious warrior with a powerful connection to the future.",
  ANTMANIISCOTTHAR: "Master thief turned size-shifting superhero.",
  ANTMANDRHENRYJ:
    "Scientist with a suit that allows me to shrink or grow at will.",
  BIGBERTHAASHLEYCR:
    "Supermodel with the ability to increase her size and strength.",
  BINARYCAROLDANVERS: "Former Air Force pilot infused with cosmic powers.",
  BLACKKNIGHTVDANE: "Modern-day knight with a magical ebony sword.",
  BLACKPANTHERTCHAL:
    "Wakandan king and protector with enhanced strength and agility.",
  BLACKWIDOWNATASHA: "Master spy and assassin with exceptional combat skills.",
  CAPTAINAMERICA: "Super-soldier with enhanced strength, speed, and agility.",
  CAPTAINMARVELIIMO: "Kree warrior with cosmic powers and the ability to fly.",
  CAPTAINMARVELCAPTA: "Air Force pilot infused with Kree powers.",
  CHARLIE27:
    "Genetically engineered soldier with enhanced strength and durability.",
  DARKHAWKCHRISPOWEL:
    "Teenager with a mystical amulet that transforms him into a powerful hero.",
  DEMOLITIONMANDENNI:
    "Former wrestler with superhuman strength and resilience.",
  DINAHSOAR: "Winged mutant with the ability to fly and project sonic screams.",
  DOORMAN: "Heroic teleporter with the power to create portals.",
  DRDRUIDANTHONYLU:
    "Sorcerer with mystical abilities and a connection to the natural world.",
  FALCONSAMWILSON: "Winged superhero with a telepathic link to birds.",
  FIREBIRDBONITAJUAR:
    "Former SHIELD agent with the power of flight and microwave manipulation.",
  FIRESTARANGELICAJ:
    "Mutant with the ability to generate and manipulate microwave energy.",
  FLATMAN: "Two-dimensional hero with the power to stretch and flatten.",
  FORGOTTENONEGILGAM: "Ancient being with superhuman strength and immortality.",
  HAWKEYECLINTBARTON: "Master archer and skilled marksman.",
  HELLCATPATSYWALKER:
    "Martial artist with supernatural senses and a connection to Hell.",
  HERCULESGREEKGOD:
    "Legendary Greek god with superhuman strength and durability.",
  HUMANTORCHANDROID: "Android with the ability to generate and control fire.",
  IRONMANIVJAMESR: "Genius inventor with a powered suit of armor.",
  IRONMANTONYSTARK: "Billionaire genius with a high-tech suit of armor.",
  JACKOFHEARTS: "Hero with the power to generate and project explosive energy.",
  JOCASTA: "Sentient android with superhuman strength and intellect.",
  JUSTICEII:
    "Telekinetic hero with the power to manipulate objects with his mind.",
  LIVINGLIGHTNINGMIG:
    "Electrically charged hero with the ability to generate and control lightning.",
  MACHINEMANX51:
    "Sentient android with advanced intelligence and superhuman abilities.",
  MADAMEMASQUEGIULIE:
    "Master of disguise with exceptional hand-to-hand combat skills.",
  MANTISBRANDT:
    "Martial artist with psychic abilities and a connection to the natural world.",
  MARTINEX: "Crystal-like being with superhuman strength and durability.",
  MOCKINGBIRDDRBARB: "Skilled martial artist and espionage expert.",
  MOONKNIGHTMARCSPE:
    "Vigilante hero with enhanced strength, agility, and combat skills.",
  MOONDRAGONHEATHERD:
    "Telepathic and telekinetic hero with a strong connection to cosmic forces.",
  MRIMMORTAL: "Hero with the ability to resurrect after death.",
  NIKKINICHOLETTEGOL:
    "Energy-wielding hero with the power to manipulate light.",
  PHOENIXIIIRACHELS:
    "Mutant with powerful telepathic and telekinetic abilities.",
  QUASARIIIWENDELLV: "Cosmic hero with energy manipulation powers.",
  QUICKSILVERPIETROM:
    "Superhuman speedster with the ability to move at incredible velocities.",
  RAGEELVINDARYLHAL:
    "Hero with enhanced strength, durability, and accelerated healing.",
  RICHARDMILHOJONES:
    "Inventor and hero with a suit that grants superhuman abilities.",
  SCARLETWITCHWANDA: "Mutant with reality-warping hex powers.",
  SERSISYLVIA: "Eternal with superhuman abilities and a connection to Earth.",
  SPIDERWOMANIIJULI:
    "Superhero with enhanced strength, agility, and bio-electric powers.",
  STARFOXEROS:
    "Eternal with the power to stimulate pleasure or contentment in others.",
  STARHAWKSTAKAR:
    "Hero with cosmic powers and the ability to manipulate light.",
  STINGRAYDRWALTER:
    "Oceanographer with a suit that grants underwater and combat abilities.",
  SUBMARINERNAMORMA:
    "Atlantean king and hero with superhuman strength and aquatic abilities.",
  SWORDSMANIIIPHILIP: "Master swordsman with exceptional skill in combat.",
  SWORDSMANJACQUESDU: "Master fencer and skilled hand-to-hand combatant.",
  THORDRDONALDBLAK:
    "Norse god of thunder with superhuman strength and control over lightning.",
  THUNDERSTRIKEERICK: "Hero with a enchanted mace and the power of thunder.",
  TIGRAGREERNELSON:
    "Cat-like hero with enhanced strength, agility, and retractable claws.",
  TRIATHLONDELROYGAR:
    "Athlete with enhanced physical abilities, speed, and agility.",
  TWOGUNKID: "Sharpshooter and expert gunslinger in the Wild West.",
  USAGENTCAPTAINJOHN:
    "Super soldier and skilled combatant with a sense of duty.",
  VANCEASTRO:
    "Astronaut with enhanced abilities and leader of the Guardians of the Galaxy.",
  VISION:
    "Synthetic android with superhuman strength, density control, and energy manipulation.",
  WASPJANETVANDYNE:
    "Hero with the ability to shrink and fly, armed with bio-electric stingers.",
  WHIZZERROBERTLFR: "Speedster with superhuman speed and agility.",
  WONDERMANSIMONWIL:
    "Superhero with enhanced strength, durability, and energy projection.",
  YELLOWJACKETIIRITA: "Size-changing hero with insect-controlling abilities.",
  YELLOWJACKETIIIHEN:
    "Size-changing hero with advanced technology and combat skills.",
  YONDUYONDUUDONTA: "Blue-skinned space pirate and leader of the Ravagers.",
  ANDROMEDAANDROMEDA:
    "Atlantean warrior with superhuman strength and aquatic abilities.",
  CLEA: "Mystical being and sorceress with magical powers.",
  CLOUD:
    "Living nebula with the ability to manipulate and control cosmic energy.",
  COLLEENWING: "Martial artist and skilled swordswoman.",
  DAREDEVILMATTMURDO:
    "Blind superhero with enhanced senses and exceptional martial arts skills.",
  DEVILSLAYERERICSI:
    "Demon hunter with supernatural abilities and mystical weaponry.",
  DRSTRANGESTEPHEN:
    "Sorcerer Supreme with mastery over mystic arts and magical spells.",
  GARGOYLEIIISAACCH: "Gargoyle with superhuman strength and durability.",
  HELLSTORMDAIMONHEL:
    "Demon with mystical powers, including pyrokinesis and teleportation.",
  HULKDRROBERTBRUC:
    "Gamma-powered superhero with superhuman strength and durability.",
  INTERLOPER: "Immortal being with superhuman abilities.",
  IRONFISTDANIELRAN:
    "Martial artist with the ability to focus chi into his fists.",
  JESSICAJONES: "Private investigator with superhuman strength and durability.",
  LUKECARLLUCACAGE: "Hero with superhuman strength and unbreakable skin.",
  MISTYKNIGHT: "Skilled detective and martial artist with a bionic arm.",
  NIGHTHAWKIIKYLERO:
    "Hero with enhanced strength, agility, and a powerful suit.",
  OVERMINDGROM: "Psionic being with vast telepathic and telekinetic powers.",
  REDGUARDIANIIIDR:
    "Superhuman hero with exceptional combat skills and strength.",
  SILVERSURFERNORRIN: "Cosmic hero with the power of the Silver Surfer.",
  VALKYRIEIV: "Asgardian warrior with superhuman strength and combat skills.",
  WONG: "Sorcerer and ally to Doctor Strange with knowledge of mystical arts.",
  AGATHAHARKNESS:
    "Witch and magical mentor with centuries of mystical knowledge.",
  BLACKBOLTBLACKANTO:
    "Inhuman king with a destructive voice capable of immense power.",
  CRYSTALINHUMAN: "Inhuman princess with elemental manipulation abilities.",
  GORGONINHUMAN: "Inhuman warrior with superhuman strength and seismic powers.",
  HUMANTORCHJOHNNYS:
    "Fiery superhero with the ability to generate and control flames.",
  INVISIBLEWOMANSUE:
    "Invisible superhero with the power of invisibility and force field generation.",
  KARNAKINHUMAN: "Inhuman philosopher and martial artist with enhanced senses.",
  MEDUSAMEDUSALITHA:
    "Inhuman queen with prehensile hair and control over its movements.",
  MR_FANTASTICREEDR:
    "Genius scientist and leader with the ability to stretch his body.",
  SHEHULKJENNIFERWA:
    "Lawyer and superhero with superhuman strength and durability.",
  THINGBENJAMINJGR:
    "Rock-like superhero with superhuman strength and durability.",
  TRITON: "Inhuman with aquatic physiology and the ability to live underwater.",
  BLADE:
    "Daywalker with superhuman abilities and a mastery of martial arts and weaponry.",
  GHOSTRIDERIIJOHNN:
    "Spirit of vengeance with a flaming skull and supernatural powers.",
  GHOSTRIDERIIIDAN:
    "Spirit of vengeance with a demonic appearance and a fiery motorcycle.",
  MORBIUSDRMICHAEL:
    "Living vampire with superhuman strength and a need for blood.",
  VENGEANCEMICHAELBADIL:
    "Supernatural hero with a flaming skull and chains for weaponry.",
  ANNAWATSON: "Aunt of Peter Parker with a caring and supportive nature.",
  BENPARKER: "Uncle of Peter Parker known for his wisdom and guidance.",
  BLACKCATFELICIAHA:
    "Burglar and occasional ally of Spider-Man with acrobatic and luck-manipulating powers.",
  CAPTGEORGESTACY:
    "Police captain and father of Gwen Stacy with a commitment to justice.",
  EUGENEFLATHOMPSON: "Friend of Peter Parker and father of Flash Thompson.",
  GWENSTACY: "Former girlfriend of Peter Parker known for her tragic fate.",
  HARRYOSBORN: "Friend of Peter Parker and son of Norman Osborn.",
  JOEROBERTSON:
    "Editor at the Daily Bugle with a commitment to journalistic integrity.",
  LIZALLANOSBORN:
    "Friend of Peter Parker and former girlfriend of Harry Osborn.",
  MARYWATSONPARKER: "Aunt of Peter Parker and wife of J. Jonah Jameson Sr.",
  MARYPARKER:
    "Mother of Peter Parker known for her nurturing and supportive role.",
  MAYPARKER: "Aunt of Peter Parker and a guiding figure in his life.",
  RICHARDROBPARKER:
    "Father of Peter Parker known for his love and responsibility.",
  SPIDERMANCLONEBEN:
    "Genetic duplicate of Spider-Man with a complex history and identity.",
  SPIDERMANPETERPAR:
    "Friendly neighborhood superhero with agility, strength, and web-slinging abilities.",
  ANGELWARRENKENNETH:
    "Mutant with feathery wings that grant him flight and a sense of nobility.",
  AURORAJEANNEMARIE:
    "Mutant with the power of flight and the ability to generate blinding light.",
  BANSHEESEANCASSIDY:
    "Mutant with a sonic scream that can stun opponents and propel him through the air.",
  BEASTHENRYHANKP:
    "Brilliant scientist and mutant with enhanced strength, agility, and blue fur.",
  BEDLAMJESSEAARONSO:
    "Mutant with the power to generate and control bio-electromagnetic fields.",
  BISHOP:
    "Time-traveling mutant law enforcement officer with energy absorption powers.",
  BOOMERTABITHASMITH:
    "Mutant with the ability to generate explosive energy spheres.",
  BOXIIJERRYJAXXON:
    "Pilot of the Box armor, granting superhuman strength and durability.",
  BOXIVMADISONJEFFR:
    "Wearer of the Box armor with enhanced strength and advanced weaponry.",
  BOXROGERBOCHS:
    "Inventor of the Box armor and cyborg with technological expertise.",
  CALIBAN: "Mutant with the ability to sense and track other mutants.",
  CANDYSOUTHERN:
    "Mutant with sonic scream abilities and a member of the X-Men.",
  CANNONBALLIISAMGU:
    "Mutant with the ability to propel himself through the air like a human cannonball.",
  CAPTAINBRITAINBRIA:
    "British superhero with superhuman strength, flight, and the ability to generate force fields.",
  CERISEIISHIAR:
    "Shi'ar alien and former Imperial Guard member with energy manipulation abilities.",
  CHOD: "Alien warrior with enhanced strength and durability, often associated with the Starjammers.",
  CHAMBERJONOTHONSTA:
    "Mutant with a gaping chest cavity that releases psionic energy blasts.",
  CHANGELING:
    "Shape-shifting mutant with the ability to mimic the appearance and powers of others.",
  COLOSSUSIIPETERRA:
    "Russian mutant with the power to transform his body into organic steel, granting superhuman strength.",
  CORSAIR: "Spacefaring adventurer and father of Scott Summers (Cyclops).",
  CRREEE: "Alien member of the Starjammers with reptilian characteristics.",
  CYCLOPSSCOTTSUMMER:
    "Leader of the X-Men with optic blasts capable of leveling mountains.",
  CYPHERDOUGRAMSEY:
    "Mutant with the ability to understand and communicate in any language.",
  DAYTRIPPERAMANDASE: "Mutant teleporter and former member of Excalibur.",
  DAZZLERIIALLISONB:
    "Mutant with the ability to convert sound into light and energy blasts.",
  DIAMONDLILLILLIAN: "Mutant with diamond-hard skin and superhuman strength.",
  DOMINOIIBEATRICE:
    "Mercenary with exceptional marksmanship and luck-manipulating abilities.",
  DRCECELIAREYES:
    "Mutant doctor and X-Men member with force field generation powers.",
  FERALMARIACALLASAN:
    "Mutant with feline characteristics, enhanced agility, and retractable claws.",
  FERON: "Alien healer and member of the Starjammers with empathic abilities.",
  FORGE:
    "Mutant inventor and skilled technomancer, known for creating advanced weaponry.",
  GAMBITREMYLEBEAU:
    "Mutant with the ability to charge objects with kinetic energy and exceptional card-throwing skills.",
  GUARDIANJAMESMACDO:
    "Canadian superhero with enhanced strength, flight, and a suit of power armor.",
  HAVOKALEXSUMMERS:
    "Mutant with the power to absorb and project plasma energy blasts.",
  HEATHERHUDSON:
    "Scientist and former superhero associated with Alpha Flight and Department H.",
  HEPZIBAH:
    "Shi'ar warrior with feline characteristics and agility, associated with the Starjammers.",
  HUSKPAIGEGUTHRIE:
    "Mutant with the ability to shed her outer skin, revealing a new form with different powers.",
  ICEMANROBERTBOBBY:
    "Original member of the X-Men with the ability to generate and control ice.",
  ILLYANAIRASPUTINA:
    "Mutant sorceress and sister of Colossus, known for her magical abilities.",
  JUBILEEJUBILATIONL:
    "Mutant with the ability to generate energy plasmoids and fireworks.",
  KARMAXIANCOYMANH:
    "Mutant with the power of psychic possession and telepathy.",
  KYLUNCOLINMCKAY:
    "Mutant with enhanced strength and durability, often associated with Excalibur.",
  LILACHENEY:
    "Interdimensional teleporter and rock star associated with the New Mutants.",
  LILANDRANERAMANI:
    "Shi'ar empress and powerful telepath, often associated with the X-Men.",
  LOCKHEED:
    "Extraterrestrial dragon and companion of Kitty Pryde, known for his fire-breathing abilities.",
  LONGSHOT:
    "Luck-manipulating mutant with acrobatic skills, known for his association with the X-Men.",
  M: "Mysterious mutant with telepathic and telekinetic abilities, often associated with X-Factor.",
  MAGGOTTJAPHETH:
    "Mutant with the ability to generate and control bio-mechanical slugs.",
  MAGIKILLYANARASPUT:
    "Powerful sorceress and mutant teleporter, sister of Colossus.",
  MAGMAAMARAAQUILLA:
    "Mutant with the ability to control molten lava and geothermal energy.",
  MAGNETOMAGNUSERIC:
    "Master of magnetism and mutant with control over magnetic fields.",
  MARIKOYASHIDA:
    "Yakuza leader and former love interest of Wolverine, known for her leadership and honor.",
  MARRINASMALLWOOD:
    "Atlantean mutant with aquatic abilities, associated with Alpha Flight.",
  MARROWSARAH:
    "Mutant with the ability to create weapons from her own bones, associated with the X-Men.",
  MARVELGIRLJEANGREY:
    "Original member of the X-Men with powerful telepathic and telekinetic abilities.",
  MAVERICKCHRISTOPHER:
    "Mercenary and former operative of Weapon X, known for his combat skills.",
  MEGGAN:
    "Metamorphic mutant with shape-shifting abilities and ties to the British superhero community.",
  MICROMAXSCOTTWRIGHT:
    "Size-changing superhero with the ability to manipulate his own size.",
  MIMICCALVINRANKIN:
    "Mutant with the ability to mimic the powers of other mutants in proximity.",
  MIRAGEDANIELLEM:
    "Mutant with the ability to create realistic illusions, associated with the New Mutants.",
  MOIRAKIMACTAGGERT:
    "Geneticist and mutant expert, often associated with the X-Men.",
  MULTIPLEMANJAMESA:
    "Mutant with the ability to create duplicates of himself upon physical impact.",
  NATHANCHRISUMMERS:
    "Son of Cyclops and Jean Grey, known for his powerful telekinetic and telepathic abilities.",
  NIGHTCRAWLERKURTWA:
    "Mutant with the ability to teleport and adhesive hands and feet, known for his acrobatic skills.",
  NORTHSTARJEANPAUL:
    "Speedster mutant and former member of Alpha Flight, known for his superhuman speed and agility.",
  PERSUASIONKARAKILL:
    "Mutant with the power of psychic persuasion, capable of influencing others' thoughts and emotions.",
  PETERWISDOM:
    "British superhero and former intelligence agent, skilled in combat and espionage.",
  POLARISLORNADANE:
    "Mutant with the power to control magnetic fields, often associated with the X-Men.",
  PROFESSORXCHARLES:
    "Founder of the X-Men and powerful telepath, dedicated to peaceful coexistence between mutants and humans.",
  PSYLOCKEELISABETHB:
    "Ninja and psychic mutant, known for her martial arts skills and telepathic abilities.",
  PUCKEUGENEMILTONJ:
    "Canadian superhero with enhanced strength and agility, known for his small stature.",
  RAZALONGKNIFE:
    "Shi'ar warrior and member of the Starjammers, skilled in combat and marksmanship.",
  RICTORJULIOESTEBAN:
    "Mutant with seismic vibration powers, associated with X-Force.",
  ROGUE:
    "Mutant with the ability to absorb the powers and memories of others through touch.",
  SASQUATCHWALTERLANGKOW:
    "Canadian superhero with the ability to transform into a giant, powerful creature.",
  SHADOWCATKATHERINE:
    "Mutant with the ability to phase through solid objects, known for her association with the X-Men.",
  SHAMANMICHAELTWOYO:
    "First Nations healer and superhero, member of Alpha Flight.",
  SHATTERSTARII:
    "Superhuman warrior with enhanced physical abilities and combat skills, associated with X-Force.",
  SIKORSKY:
    "Extraterrestrial ally and companion of the X-Men, with advanced technological capabilities.",
  SIRYNTHERESIAROURKE:
    "Mutant with sonic scream powers, associated with X-Force and X-Factor.",
  SNOWBIRDNARYAANNE:
    "Inuit goddess and superhero with the ability to transform into various arctic animals.",
  STORMOROROMUNROES:
    "Weather-controlling mutant and former queen of Wakanda, known for her leadership and elemental powers.",
  STRONGGUYGUIDOCAR:
    "Superhuman with enhanced strength and durability, associated with X-Factor.",
  SUNFIRESHIROYOSHIDA:
    "Mutant with the ability to generate and control solar energy, associated with the X-Men.",
  SUNSPOTROBERTODACOSTA:
    "Mutant with the ability to absorb and channel solar energy, known for his association with the New Mutants.",
  SYNCH:
    "Mutant with the ability to synchronize his powers with others, often associated with Generation X.",
  TALISMANIIELIZABET:
    "First Nations sorceress and member of Alpha Flight, with mystical abilities.",
  TESSA:
    "Former intelligence agent and skilled martial artist, associated with the X-Men and S.H.I.E.L.D.",
  THUNDERBIRDIIJAMES:
    "Mutant with enhanced strength and durability, associated with the X-Men and X-Force.",
  THUNDERBIRDIIINEAL:
    "Mutant with the ability to generate and control electricity, associated with X-Force.",
  THUNDERBIRDJOHNPRO:
    "Mutant with enhanced strength and senses, former member of the X-Men.",
  TRISHPATRICITILBY:
    "Journalist and ally of the X-Men, known for her reporting on mutant affairs.",
  WALDO:
    "Mutant with the ability to manipulate and control machines, associated with X-Factor.",
  WARLOCKIII:
    "Extraterrestrial techno-organic being and member of the New Mutants.",
  WEAPONXIIIGARRISON:
    "Former government operative and mutant with enhanced strength and healing abilities.",
  WHITEQUEENEMMAFROST:
    "Telepathic mutant and former member of the Hellfire Club, known for her psychic abilities and leadership.",
  WIDGET:
    "Mysterious and reality-manipulating being, often associated with Excalibur.",
  WILDCHILDKYLEGIBNEY:
    "Feral mutant with enhanced physical abilities, associated with Alpha Flight and X-Factor.",
  WITCHFIRE:
    "Sorceress with magical abilities and connections to the supernatural.",
  WOLFSBANERAHNESINC:
    "Mutant with the ability to transform into a wolf-like creature, often associated with X-Factor.",
  XMANATHANGREY:
    "Alternate reality version of Cyclops, possessing telepathic and telekinetic abilities.",
  YUKIO:
    "Skilled martial artist and ally of Wolverine, known for her acrobatic skills.",
};
