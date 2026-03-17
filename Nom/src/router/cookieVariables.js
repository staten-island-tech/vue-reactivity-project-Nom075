import { ref} from 'vue'
import Decimal from 'decimal.js'

export const currentCrumbs = ref(new Decimal(0))
export const LicksPerSecond = ref(new Decimal(0))
export const LickPower = ref(new Decimal(1))
export const LickPowerConversion = ref(new Decimal(0))
export const totalCookieMade = ref(new Decimal(0))
export const purchasedUpgrades = ref([])

export const buildings = ref([
  {
    name: 'Tongue',
    description: 'A tongue to help you lick the cookie!',
    price: new Decimal(15),
    licksPerSecondBoost: new Decimal(1),
    image: '/Tongue.png',
    owned: 0,
  },
  {
    name: 'Cat',
    description: 'Helps you lick the cookie. This one is immune to chocolate.',
    price: new Decimal(120),
    licksPerSecondBoost: new Decimal(8),
    image: '/Cat.png',
    owned: 0,
  },
  {
    name: 'Dog',
    description: 'Slobbery Kisses for the cookie! Also immune to chocolate.',
    price: new Decimal(800),
    licksPerSecondBoost: new Decimal(35),
    image: '/Dog.png',
    owned: 0,
  },
  {
    name: 'Licker-Bot',
    description: 'It may not seem like it has a mouth but it is good at licking things.',
    price: new Decimal(5000),
    licksPerSecondBoost: new Decimal(180),
    image: '/Robot.webp',
    owned: 0,
  },
  {
    name: 'Lickman',
    description: `A failure who couldn't be a hitman, so now he is a lickman.`,
    price: new Decimal(25000),
    licksPerSecondBoost: new Decimal(800),
    image: '/Lickman.png',
    owned: 0,
  },
  {
    name: 'Portal',
    description: `Summons evil entities to lick cookies.`,
    price: new Decimal(200000),
    licksPerSecondBoost: new Decimal(5000),
    image: '/portal.png',
    owned: 0,
  },
  {
    name: 'Pink Ball',
    description: `This is just a little pink ball...`,
    price: new Decimal("2.5e7"),
    licksPerSecondBoost: new Decimal(80000),
    image: '/KirbyEvo0.png',
    owned: 0,
  },
])

export const upgrades = ref([
  {
    name: 'Conversion I',
    price: new Decimal(75),
    description: 'One day, you came along and saw a large cookie.',
    usefulDes: 'Clicks gain 1% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => totalCookieMade.value.greaterThanOrEqualTo(30),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.01)),
  },
  {
    name: 'Conversion II',
    price: new Decimal(300),
    description: "You licked and chewed, but you couldn't get rid of it.",
    usefulDes: 'Clicks gain 1% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion I'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.01)),
  },
  {
    name: 'Conversion III',
    price: new Decimal(700),
    description: 'You tried buying tongues to help lick, but it would not budge.',
    usefulDes: 'Clicks gain 1% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion II'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.01)),
  },
  {
    name: 'Conversion IV',
    price: new Decimal(2500),
    description:
      'You pruchased upgrades with your legendary cookie crumbs, it still will not budge.',
    usefulDes: 'Clicks gain 2% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion III'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.02)),
  },
  {
    name: 'Conversion V',
    price: new Decimal("8e3"),
    description: 'Desperation leads you to buy more and more insane things.',
    usefulDes: 'Clicks gain 2% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion IV'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.02)),
  },
  //
  {
    name: 'Conversion VI',
    price: new Decimal("6e4"),
    description: 'The cooking looms over you, refusing to be eaten.',
    usefulDes: 'Clicks gain 3% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion V'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.03)),
  },
  {
    name: 'Conversion VII',
    price: new Decimal("5e5"),
    description: 'Unsatisfied and frustrated, you seek more options.',
    usefulDes: 'Clicks gain 5% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion VI'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.05)),
  },
  {
    name: 'Conversion VIII',
    price: new Decimal("6e6"),
    description: 'You turn to the dark side, pulling creatures of evil just to lick a cookie.',
    usefulDes: 'Clicks gain 5% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion VII'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.05)),
  },
  {
    name: 'Conversion IX',
    price: new Decimal("5e7"),
    description: 'Cracks in the cookie appear, signaling the near end.',
    usefulDes: 'Clicks gain 7% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion VIII'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.07)),
  },
  {
    name: 'Conversion X',
    price: new Decimal("2.5e8"),
    description:
      'Pieces start falling from the cookie at extreme speed. Are you almost going to make it?',
    usefulDes: 'Clicks gain 10% of licks per second.',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion IX'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.1)),
  },
  //
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  {
    name: 'World Ender',
    price: new Decimal("3e9"),
    description: 'Congratulations, you finished licking the cookie. But at what cost?',
    usefulDes: 'Was it worth it?',
    image: '/UPIC/Convert.png',
    unlocked: () => purchasedUpgrades.value.includes('Conversion X'),
    boost: () => (LickPowerConversion.value = LickPowerConversion.value.plus(0.1)),
  },
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  //
  {
    name: 'Saliva I',
    price: new Decimal(75),
    description: 'Extra Saliva to dissolve the cookie.',
    usefulDes: 'Tongues are twice as efficient.',
    image: '/UPIC/WaterDrop.png',
    unlocked: () => buildings.value[0].owned >= 1,
    boost: () => (buildings.value[0].licksPerSecondBoost *= 2),
  },
  {
    name: 'Saliva II',
    price: new Decimal(300),
    description: 'Who asked for more Saliva?',
    usefulDes: 'Tongues are twice as efficient.',
    image: '/UPIC/WaterDrop.png',
    unlocked: () => buildings.value[0].owned >= 5 && purchasedUpgrades.value.includes('Saliva I'),
    boost: () => (buildings.value[0].licksPerSecondBoost *= 2),
  },
  {
    name: 'Saliva III',
    price: new Decimal(1200),
    description: 'Dripping faucet of saliva.',
    usefulDes: 'Tongues are twice as efficient.',
    image: '/UPIC/WaterDrop.png',
    unlocked: () => buildings.value[0].owned >= 10 && purchasedUpgrades.value.includes('Saliva II'),
    boost: () => (buildings.value[0].licksPerSecondBoost *= 2),
  },
  {
    name: 'Saliva IV',
    price: new Decimal(3500),
    description: 'Saliva factory.',
    usefulDes: 'Tongues are twice as efficient.',
    image: '/UPIC/WaterDrop.png',
    unlocked: () =>
      buildings.value[0].owned >= 15 && purchasedUpgrades.value.includes('Saliva III'),
    boost: () => (buildings.value[0].licksPerSecondBoost *= 2),
  },
  {
    name: 'Saliva V',
    price: new Decimal(8000),
    description: 'Rename this building to Saliva already.',
    usefulDes: 'Tongues are twice as efficient.',
    image: '/UPIC/WaterDrop.png',
    unlocked: () => buildings.value[0].owned >= 25 && purchasedUpgrades.value.includes('Saliva IV'),
    boost: () => (buildings.value[0].licksPerSecondBoost *= 2),
  },
  //
  {
    name: 'Kitty',
    price: new Decimal(200),
    description: 'A biggie that helps you lick your cookie.',
    usefulDes: 'Cats are twice as efficient.',
    image: '/UPIC/WTFCat2.png',
    unlocked: () => buildings.value[1].owned >= 1,
    boost: () => (buildings.value[1].licksPerSecondBoost *= 2),
  },
  {
    name: 'Cat',
    price: new Decimal(600),
    description: 'A big biggie that helps lick your cookie.',
    usefulDes: 'Cats are twice as efficient.',
    image: '/UPIC/WTFCat.png',
    unlocked: () => buildings.value[1].owned >= 5 && purchasedUpgrades.value.includes('Kitty'),
    boost: () => (buildings.value[1].licksPerSecondBoost *= 2),
  },
  {
    name: 'Gray Cat',
    price: new Decimal(3000),
    description: 'Biggest chocolate biggie.',
    usefulDes: 'Cats are twice as efficient.',
    image: '/UPIC/WTFCat3.png',
    unlocked: () => buildings.value[1].owned >= 10 && purchasedUpgrades.value.includes('Cat'),
    boost: () => (buildings.value[1].licksPerSecondBoost *= 2),
  },
  {
    name: 'Insane Cat',
    price: new Decimal(8000),
    description: 'He looks funny.',
    usefulDes: 'Cats are twice as efficient.',
    image: '/UPIC/WTFCat4.png',
    unlocked: () => buildings.value[1].owned >= 15 && purchasedUpgrades.value.includes('Gray Cat'),
    boost: () => (buildings.value[1].licksPerSecondBoost *= 2),
  },
  {
    name: 'Nyan Cat',
    price: new Decimal(20000),
    description: 'NYAN CATTTTTTTTT',
    usefulDes: 'Cats are twice as efficient.',
    image: '/UPIC/WTFCat5.png',
    unlocked: () =>
      buildings.value[1].owned >= 25 && purchasedUpgrades.value.includes('Insane Cat'),
    boost: () => (buildings.value[1].licksPerSecondBoost *= 2),
  },
  //
  {
    name: 'Doggie',
    price: new Decimal(1200),
    description: 'Nibble nibble.',
    usefulDes: 'Dogs are twice as efficient.',
    image: '/UPIC/Dog1.png',
    unlocked: () => buildings.value[2].owned >= 1,
    boost: () => (buildings.value[2].licksPerSecondBoost *= 2),
  },
  {
    name: 'Dog',
    price: new Decimal(4000),
    description: "Isn't this... the one in the shop...?",
    usefulDes: 'Dogs are twice as efficient.',
    image: '/Dog.png',
    unlocked: () => buildings.value[2].owned >= 5 && purchasedUpgrades.value.includes('Doggie'),
    boost: () => (buildings.value[2].licksPerSecondBoost *= 2),
  },
  {
    name: 'Sneaky Dog',
    price: new Decimal(12000),
    description: "He licks your cookies while you ain't looking.",
    usefulDes: 'Dogs are twice as efficient.',
    image: '/UPIC/Dog3.png',
    unlocked: () => buildings.value[2].owned >= 10 && purchasedUpgrades.value.includes('Dog'),
    boost: () => (buildings.value[2].licksPerSecondBoost *= 2),
  },
  {
    name: 'King Dog V',
    price: new Decimal(30000),
    description: 'Ruler of all dogs.',
    usefulDes: 'Dogs are twice as efficient.',
    image: '/UPIC/Dog4.png',
    unlocked: () =>
      buildings.value[2].owned >= 15 && purchasedUpgrades.value.includes('Sneaky Dog'),
    boost: () => (buildings.value[2].licksPerSecondBoost *= 2),
  },
  {
    name: 'Doge',
    price: new Decimal(80000),
    description: 'The coolest dog.',
    usefulDes: 'Dogs are twice as efficient.',
    image: '/UPIC/Dog5.png',
    unlocked: () =>
      buildings.value[2].owned >= 25 && purchasedUpgrades.value.includes('King Dog V'),
    boost: () => (buildings.value[2].licksPerSecondBoost *= 2),
  },
  //
  {
    name: 'Analytics',
    price: new Decimal(8000),
    description: 'Studies the best parts to lick for optimal crumb generation.',
    usefulDes: 'Licker-Bots are twice as efficient.',
    image: '/UPIC/Bot1.png',
    unlocked: () => buildings.value[3].owned >= 1,
    boost: () => (buildings.value[3].licksPerSecondBoost *= 2),
  },
  {
    name: 'Machinery',
    price: new Decimal(20000),
    description: 'Increases its licking speed.',
    usefulDes: 'Licker-Bots are twice as efficient.',
    image: '/UPIC/Bot2.png',
    unlocked: () => buildings.value[3].owned >= 5 && purchasedUpgrades.value.includes('Analytics'),
    boost: () => (buildings.value[3].licksPerSecondBoost *= 2),
  },
  {
    name: 'Software Upgrade',
    price: new Decimal(50000),
    description: 'More cookie studying!',
    usefulDes: 'Licker-Bots are twice as efficient.',
    image: '/UPIC/Bot3.png',
    unlocked: () => buildings.value[3].owned >= 10 && purchasedUpgrades.value.includes('Machinery'),
    boost: () => (buildings.value[3].licksPerSecondBoost *= 2),
  },
  {
    name: 'AI',
    price: new Decimal(120000),
    description: 'Strategizes together with the other bots.',
    usefulDes: 'Licker-Bots are twice as efficient.',
    image: '/UPIC/Bot4.png',
    unlocked: () =>
      buildings.value[3].owned >= 15 && purchasedUpgrades.value.includes('Software Upgrade'),
    boost: () => (buildings.value[3].licksPerSecondBoost *= 2),
  },
  {
    name: 'ChatGPT',
    price: new Decimal(300000),
    description: 'The birth of a new era, the death of the cookie.',
    usefulDes: 'Licker-Bots are twice as efficient.',
    image: '/UPIC/Bot5.png',
    unlocked: () => buildings.value[3].owned >= 25 && purchasedUpgrades.value.includes('AI'),
    boost: () => (buildings.value[3].licksPerSecondBoost *= 2),
  },
  //
  {
    name: 'Contract',
    price: new Decimal(40000),
    description: 'Establishes a contract to coordinate plans.',
    usefulDes: 'Lickmans are twice as efficient.',
    image: '/UPIC/Lickman1.png',
    unlocked: () => buildings.value[4].owned >= 1,
    boost: () => (buildings.value[4].licksPerSecondBoost *= 2),
  },
  {
    name: 'Mystery Man',
    price: new Decimal(100000),
    description: 'Interesting guy to help you lick the cookie.',
    usefulDes: 'Lickmans are twice as efficient.',
    image: '/UPIC/Lickman2.png',
    unlocked: () => buildings.value[4].owned >= 5 && purchasedUpgrades.value.includes('Contract'),
    boost: () => (buildings.value[4].licksPerSecondBoost *= 2),
  },
  {
    name: 'Contract II',
    price: new Decimal(250000),
    description: 'Even better contract -- signed by cookie crumbs.',
    usefulDes: 'Lickmans are twice as efficient.',
    image: '/UPIC/Lickman3.png',
    unlocked: () =>
      buildings.value[4].owned >= 10 && purchasedUpgrades.value.includes('Mystery Man'),
    boost: () => (buildings.value[4].licksPerSecondBoost *= 2),
  },
  {
    name: 'Paid in crumbs',
    price: new Decimal(600000),
    description: 'Why pay real money when you can pay in cookie crumbs?',
    usefulDes: 'Lickmans are twice as efficient.',
    image: '/UPIC/Lickman4.webp',
    unlocked: () =>
      buildings.value[4].owned >= 15 && purchasedUpgrades.value.includes('Contract II'),
    boost: () => (buildings.value[4].licksPerSecondBoost *= 2),
  },
  {
    name: 'Shadowman',
    price: new Decimal("1.5e6"),
    description: "I wouldn't hire this guy if I were you...",
    usefulDes: 'Lickmans are twice as efficient.',
    image: '/UPIC/Lickman5.png',
    unlocked: () =>
      buildings.value[4].owned >= 25 && purchasedUpgrades.value.includes('Paid in crumbs'),
    boost: () => (buildings.value[4].licksPerSecondBoost *= 2),
  },
  //
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  //
  { price: -1, unlocked: () => null, X: true },
  {
    name: 'Fettuccine Alfredo',
    price: new Decimal("1.2e6"),
    description: 'This guy speaks math and only math.',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/Math.png',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Fear'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  {
    name: 'Whale--n',
    price: new Decimal("1.2e6"),
    description: 'That horror when the nukes get dropped...',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/whale.png',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Fear'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  {
    name: 'Ion Lee',
    price: new Decimal("1.2e6"),
    description: 'Ian Lee the Li-ion.',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/Ion.png',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Fear'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  { price: -1, unlocked: () => null, X: true },
  //
  {
    name: 'Zhi-ro',
    price: new Decimal("1.2e6"),
    description: 'This guy always steals food, pairs with the guy below very well.',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/Zero.png',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Doom'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  { price: -1, unlocked: () => null, X: true },
  {
    name: 'Pillar of Fear',
    price: new Decimal(400000),
    description: 'The guardian pillar of the greatest fears.',
    usefulDes: 'Portals are 50% more efficient.',
    image: '/UPIC/Pillar.png',
    unlocked: () => purchasedUpgrades.value.includes('Portal Gateway'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.5),
  },
  { price: -1, unlocked: () => null, X: true },
  {
    name: '白红',
    price: new Decimal("1.2e6"),
    description: 'White and Red.',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/pink.webp',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Mystery'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  //
  {
    name: 'Megaback Chaojie',
    price: new Decimal("1.2e6"),
    description: 'The final boss of food... is BACK!',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/HumpbackWhale.webp',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Doom'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  {
    name: 'Pillar of Doom',
    price: new Decimal(400000),
    description: 'The guardian pillar of the final bosses.',
    usefulDes: 'Portals are 50% more efficient.',
    image: '/UPIC/Pillar.png',
    unlocked: () => purchasedUpgrades.value.includes('Portal Gateway'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.5),
  },
  {
    name: 'Portal Gateway',
    price: new Decimal(100000),
    description: 'Invites the entities to Earth. Probably not a good idea.',
    usefulDes: 'Portals are twice as efficient.',
    image: '/UPIC/Gateway.png',
    unlocked: () => buildings.value[5].owned >= 1,
    boost: () => (buildings.value[5].licksPerSecondBoost *= 2),
  },
  {
    name: 'Pillar of Mystery',
    price: new Decimal(400000),
    description: 'The guardian pillar of all mystery.',
    usefulDes: 'Portals are 50% more efficient.',
    image: '/UPIC/Pillar.png',
    unlocked: () => purchasedUpgrades.value.includes('Portal Gateway'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.5),
  },
  {
    name: 'Meowchael Catiychenko',
    price: new Decimal("1.2e6"),
    description: 'www.instagram.com/mikeblackbelt/',
    usefulDes: 'Cats are 10 times more efficient.',
    image: '/UPIC/Michael.jpg',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Mystery'),
    boost: () => (buildings.value[1].licksPerSecondBoost *= 10),
  },
  //
  {
    name: 'Neldaughter',
    price: new Decimal("1.2e6"),
    description: 'His eyes of doom when he looks at me:',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/Eyes.png',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Doom'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  { price: -1, unlocked: () => null, X: true },
  {
    name: 'Pillar of Ascension',
    price: new Decimal(400000),
    description: 'The guardian pillar of those who wish to ascend.',
    usefulDes: 'Portals are 50% more efficient.',
    image: '/UPIC/Pillar.png',
    unlocked: () => purchasedUpgrades.value.includes('Portal Gateway'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.5),
  },
  { price: -1, unlocked: () => null, X: true },
  {
    name: 'Expired Cookie',
    price: new Decimal("1.2e6"),
    description: 'Why would you ever want to date or lick an expired cookie?',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/Expired.png',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Mystery'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  //
  { price: -1, unlocked: () => null, X: true },
  {
    name: 'Cerberus',
    price: new Decimal("1.2e6"),
    description: 'The dog that stands between you and the afterlife!',
    usefulDes: 'Dogs are 20% more efficient.',
    image: '/UPIC/Cerberus.png',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Ascension'),
    boost: () => (buildings.value[2].licksPerSecondBoost *= 1.2),
  },
  {
    name: 'Unfunthony',
    price: new Decimal("1.2e6"),
    description: 'Defeat the god of unfun, and you move on!',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/white.jpg',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Ascension'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  {
    name: 'Charles Darwen',
    price: new Decimal("1.2e6"),
    description: 'The dude of evolution - ripoff edition.',
    usefulDes: 'Portals are 20% more efficient.',
    image: '/UPIC/Darwen.png',
    unlocked: () => purchasedUpgrades.value.includes('Pillar of Ascension'),
    boost: () => (buildings.value[5].licksPerSecondBoost *= 1.2),
  },
  { price: -1, unlocked: () => null, X: true },
  //
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  { price: -1, unlocked: () => null, X: true },
  //
  {
    name: 'Evolution I',
    price: new Decimal("1.5e7"),
    description: 'Evolve the Pink Ball',
    usefulDes: `Pink Balls lick twice as fast.`,
    image: '/UPIC/Evolve.png',
    unlocked: () => buildings.value[6].owned >= 1,
    boost: () => {(buildings.value[6].licksPerSecondBoost *= 2);
        buildings.value[6].image = '/KirbyEvo1.png';
        buildings.value[6].name = `Kirby`;
        buildings.value[6].description = `Woah! Is that Kirby???`;
    },
  },
  {
    name: 'Kirby Power',
    price: new Decimal("3e7"),
    description: 'Harness the power of Kirby!',
    usefulDes: `Clicks gain 5% of licks per second.`,
    image: '/UPIC/KirbyPower.png',
    unlocked: () => purchasedUpgrades.value.includes('Evolution I'),
    boost: () => {(LickPowerConversion.value = LickPowerConversion.value.plus(0.05));
        buildings.value[6].image = '/UPIC/KirbyPower.png';
        buildings.value[6].description = `Kirby is a strong licker!`;
    },
  },
  {
    name: 'Fire Kirby',
    price: new Decimal("0.6e8"),
    description: 'Flame energy to melt the cookie.',
    usefulDes: `Kirby melts cookies 3 times as fast.`,
    image: '/UPIC/FireKirby.png',
    unlocked: () => purchasedUpgrades.value.includes('Kirby Power'),
    boost: () => {(buildings.value[6].licksPerSecondBoost *= 3);
        buildings.value[6].image = '/KirbyFireEvo.png';
        buildings.value[6].name = `Fire Kirby`;
        buildings.value[6].description = `Harness the power of fire to melt cookies!`;
    },
  },
  {
    name: 'King Kirby',
    price: new Decimal("1.5e8"),
    description: 'The ruler of eating stuff.',
    usefulDes: `Kirby licks 4 times as fast.`,
    image: '/UPIC/KingKirby.png',
    unlocked: () => purchasedUpgrades.value.includes('Fire Kirby'),
    boost: () => {
      buildings.value[6].licksPerSecondBoost *= 4;
      buildings.value[6].name = `King Kirby`;
      buildings.value[6].image = '/UPIC/KingKirby.png'
    },
  },
  {
    name: 'Final Evolution',
    price: new Decimal("6e8"),
    description: 'Ultimate form of Kirby.',
    usefulDes: `Kirby EATS 5 times as fast.`,
    image: '/UPIC/Evolve.png',
    unlocked: () => purchasedUpgrades.value.includes('King Kirby'),
    boost: () => {
      buildings.value[6].licksPerSecondBoost *= 5;
      buildings.value[6].name = `Swallower Kirby`;
      buildings.value[6].image = `KirbyEvo5.gif`
    },
  },
])

export function calculateLPS() {
  LicksPerSecond.value = new Decimal(0)
  buildings.value.forEach((building) => {
    LicksPerSecond.value = LicksPerSecond.value.plus(building.owned * building.licksPerSecondBoost)
  })
}

export function rounder(number, variable) {
  if (variable === 'cc') {
    if (number.isNaN()) {
      return 0
    }
    return number.toDecimalPlaces(2)
  }
}
export function D(number) {
  return new Decimal(number)
}

export function format(n) {
  if (n < 1000) return n
  const suffixes = [
    'Thousand',
    'Million',
    'Billion',
    'Trillion',
    'Quadrillion',
    'Quintillion',
    'Sextillion',
    'Septillion',
    'Octillion',
    'Nonillion',
    'Decillion',
    'Undecillion',
    'Duodecillion',
    'Tredecillion',
    'Quattordecillion',
    'Quindecillion',
    'Sexdecillion',
    'Septemdecillion',
  ]
  let e = Math.floor(Math.log10(n) / 3)
  let value = n / Math.pow(1000, e)
  return value.toFixed(2) + ' ' + suffixes[e - 1]
}
