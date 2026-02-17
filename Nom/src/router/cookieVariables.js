import {ref} from "vue"
import Decimal from "decimal.js"

export const currentCrumbs = ref(new Decimal(0))
export const LicksPerSecond = ref(new Decimal(0))
export const LickPower = ref(new Decimal(1))
export const LickPowerConversion = ref(new Decimal(0))
export const totalCookieMade = ref(new Decimal(0))
export const purchasedUpgrades = ref([])

export const buildings= ref([
  { name: 'Tongue', description: "A tongue to help you lick the cookie!", price: new Decimal(15), licksPerSecondBoost: new Decimal(10000000000000000000000), image: "/Tongue.png", owned: 0,},
  { name: 'Cat', description: "Helps you lick the cookie. This one is immune to chocolate.", price: new Decimal(180), licksPerSecondBoost: new Decimal(5), image: "/Cat.png", owned: 0,},
    {name: 'Dog', description: "Slobbery Kisses for the cookie! Also immune to chocolate.", price: new Decimal(2500), licksPerSecondBoost: new Decimal(15), image: "/Dog.png", owned: 0,},
    {name: 'Licker-Bot', description: "It may not seem like it has a mouth but it is good at licking things.", price: new Decimal(17500), licksPerSecondBoost: new Decimal(55), image: "/Robot.webp", owned: 0,},
    {name: 'King Vaccum V', description: `Sucking is its middle name. Licking is for babies.`, price: new Decimal(100000), licksPerSecondBoost: new Decimal(350), image: "/Vaccum.png", owned: 0,},
])

export const upgrades= ref([
    {name: "Conversion I", price: new Decimal(75), description: "One day, you came along and saw a large cookie.", usefulDes: "Clicks gain 1% of licks per second.",  image: "/UPIC/Convert.png", unlocked: () => totalCookieMade.value.greaterThanOrEqualTo(30),  boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.01)},
    {name: "Conversion II", price: new Decimal(500), description: "You licked and chewed, but you couldn't get rid of it.", usefulDes: "Clicks gain 1% of licks per second.", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion I"),  boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.01)},
    {name: "Conversion III", price: new Decimal(6000), description: "You tried buying tongues to help lick, but it would not budge.", usefulDes: "Clicks gain 1% of licks per second.", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion II"), boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.01)},
    {name: "Conversion IV", price: new Decimal(1), description: "You pruchased upgrades with your legendary cookie crumbs, it still will not budge.", usefulDes: "Clicks gain 2% of licks per second.", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion III"), boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.02)},
    {name: "Conversion V", price: new Decimal(1), description: "Desperation leads you to buy more and more insane things.", usefulDes: "Clicks gain 2% of licks per second.", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion IV"), boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.02)},
    {name: "Conversion VI", price: new Decimal(30), description: "The cooking looms over you, refusing to be eaten.", usefulDes: "Clicks gain 3% of licks per second.",  image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion V"),  boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.03)},
    {name: "Conversion VII", price: new Decimal(1), description: "Unsatisfied and frustrated, you seek more options.", usefulDes: "Clicks gain 5% of licks per second.", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion VI"),  boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.05)},
    {name: "Conversion VIII", price: new Decimal(1), description: "You turn to the dark side, pulling creatures of evil just to lick a cookie.", usefulDes: "Clicks gain 5% of licks per second.", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion VII"), boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.05)},
    {name: "Conversion IX", price: new Decimal(1), description: "Cracks in the cookie appear, signaling the near end.", usefulDes: "Clicks gain 7% of licks per second.", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion VIII"), boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.07)},
    {name: "Conversion X", price: new Decimal(1), description: "Pieces start falling from the cookie at extreme speed. Are you almost going to make it?", usefulDes: "Clicks gain 10% of licks per second.", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion IX"), boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.1)},
    {price: -1, unlocked: () => null, X: true},
    {price: -1, unlocked: () => null, X: true},
    {name: "World Ender", price: new Decimal(1), description: "Congrajulations, you finished licking the cookie. But at what cost?", usefulDes: "Was it worth it?", image: "/UPIC/Convert.png", unlocked: () => purchasedUpgrades.value.includes("Conversion X"), boost: () => LickPowerConversion.value = LickPowerConversion.value.plus(0.1)},
    {price: -1, unlocked: () => null, X: true},
    {price: -1, unlocked: () => null, X: true},
    {name: "Saliva I", price: new Decimal(75), description: "Extra Saliva to dissolve the cookie.", usefulDes: "Tongues are twice as efficient.",  image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 3,  boost: () => buildings.value[0].licksPerSecondBoost *= 2},
    {name: "Saliva II", price: new Decimal(500), description: "Who asked for more Saliva?", usefulDes: "Tongues are three times as efficient.", image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 10 && purchasedUpgrades.value.includes("Saliva I"),  boost: () => buildings.value[0].licksPerSecondBoost *= 3},
    {name: "Saliva III", price: new Decimal(3000), description: "Dripping faucet of saliva.", usefulDes: "Tongues are twice as efficient.", image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 20 && purchasedUpgrades.value.includes("Saliva II"), boost: () => buildings.value[0].licksPerSecondBoost *= 2},
    {name: "Saliva IV", price: new Decimal(7500), description: "Saliva factory.", usefulDes: "Tongues are twice as efficient.", image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 30 && purchasedUpgrades.value.includes("Saliva III"), boost: () => buildings.value[0].licksPerSecondBoost *= 2},
    {name: "Saliva V", price: new Decimal(15000), description: "Rename this building to Saliva already.", usefulDes: "Tongues are twice as efficient.", image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 40 && purchasedUpgrades.value.includes("Saliva IV"), boost: () => buildings.value[0].licksPerSecondBoost *= 2},
    
    {name: "Kitty", price: new Decimal(1000), description: "A biggie that helps you lick your cookie.", usefulDes: "Cats are twice as efficient",  image: "/UPIC/WTFCat2.png", unlocked: () => buildings.value[1].owned >= 3,  boost: () => buildings.value[1].licksPerSecondBoost *= 2},
    {name: "Cat", price: new Decimal(4500), description: "A big biggie that helps lick your cookie.", usefulDes: "Cats are twice as efficient", image: "/UPIC/WTFCat.png", unlocked: () => buildings.value[1].owned >= 10 && purchasedUpgrades.value.includes("Kitty"),  boost: () => buildings.value[1].licksPerSecondBoost *= 2},
    {name: "Gray Cat", price: new Decimal(10000), description: "Biggest chocolate biggie.", usefulDes: "Cats are twice as efficient", image: "/UPIC/WTFCat3.png", unlocked: () => buildings.value[1].owned >= 20 && purchasedUpgrades.value.includes("Cat"), boost: () => buildings.value[1].licksPerSecondBoost *= 2},
    {name: "Insane Cat", price: new Decimal(25000), description: "He looks funny.", usefulDes: "Cats are twice as efficient", image: "/UPIC/WTFCat4.png", unlocked: () => buildings.value[1].owned >= 30 && purchasedUpgrades.value.includes("Gray Cat"), boost: () => buildings.value[1].licksPerSecondBoost *= 2},
    {name: "Nyan Cat", price: new Decimal(75000), description: "NYAN CATTTTTTTTT", usefulDes: "Cats are twice as efficient", image: "/UPIC/WTFCat5.png", unlocked: () => buildings.value[1].owned >= 40 && purchasedUpgrades.value.includes("Insane Cat"), boost: () => buildings.value[1].licksPerSecondBoost *= 2},

    {name: "Doggie", price: new Decimal(1000), description: "Nibble nibble.", usefulDes: "Dogs are twice as efficient",  image: "/UPIC/Dog1.png", unlocked: () => buildings.value[2].owned >= 3,  boost: () => buildings.value[2].licksPerSecondBoost *= 2},
    {name: "Dog", price: new Decimal(4500), description: "Isn't this... the one in the shop...?", usefulDes: "Dogs are twice as efficient", image: "/Dog.png", unlocked: () => buildings.value[2].owned >= 10 && purchasedUpgrades.value.includes("Doggie"),  boost: () => buildings.value[2].licksPerSecondBoost *= 2},
    {name: "Sneaky Dog", price: new Decimal(10000), description: "He licks your cookies while you ain't looking.", usefulDes: "Dogs are twice as efficient", image: "/UPIC/Dog3.png", unlocked: () => buildings.value[2].owned >= 20 && purchasedUpgrades.value.includes("Dog"), boost: () => buildings.value[2].licksPerSecondBoost *= 2},
    {name: "King Dog V", price: new Decimal(25000), description: "Ruler of all dogs.", usefulDes: "Dogs are twice as efficient", image: "/UPIC/Dog4.png", unlocked: () => buildings.value[2].owned >= 30 && purchasedUpgrades.value.includes("Sneaky Dog"), boost: () => buildings.value[2].licksPerSecondBoost *= 2},
    {name: "Doge", price: new Decimal(75000), description: "The coolest dog.", usefulDes: "Dogs are twice as efficient", image: "/UPIC/Dog5.png", unlocked: () => buildings.value[2].owned >= 40 && purchasedUpgrades.value.includes("King Dog V"), boost: () => buildings.value[2].licksPerSecondBoost *= 2},
])

export function calculateLPS(){
    LicksPerSecond.value = new Decimal(0)
        buildings.value.forEach((building) => {
            LicksPerSecond.value = LicksPerSecond.value.plus(building.owned*building.licksPerSecondBoost)
        })
    console.log(LicksPerSecond.value)
}


export function rounder(number, variable){
    if (variable === "cc"){
        if (number.isNaN()){
            return (0)
        }
        return (number.toDecimalPlaces(2))
    }
}
export function D(number){
    return (new Decimal(number))
}

export function format(n) {
  if (n < 1000) return n
  const suffixes = ["Thousand","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion","Septillion"]
  let e = Math.floor(Math.log10(n) / 3)
  let value = n / Math.pow(1000, e)
  return value.toFixed(2) + " " + suffixes[e-1]
}
