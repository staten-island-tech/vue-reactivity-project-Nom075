import {ref} from "vue"
import Decimal from "decimal.js"

export const currentCrumbs = ref(new Decimal(0))
export const LicksPerSecond = ref(new Decimal(0))
export const LickPower = ref(new Decimal(1))
export const totalCookieMade = ref(new Decimal(0))
export const purchasedUpgrades = ref([])

export const buildings= ref([
  { name: 'Tongue', description: "A tongue to help you lick the cookie!", price: 25, licksPerSecondBoost: 1, image: "/Tongue.png", owned: 0,},
  { name: 'Cat', description: "Helps you lick the cookie. This one is immune to chocolate.", price: 180, licksPerSecondBoost: 3, image: "/Cat.png", owned: 0,},
    {name: 'Dog', description: "Slobbery Kisses for the cookie! Also immune to chocolate.", price: 1000, licksPerSecondBoost: 15, image: "/Dog.png", owned: 0,},
    {name: 'Licker-Bot', description: "It may not seem like it has a mouth but it is good at licking things.", price: 6900, licksPerSecondBoost: 55, image: "/Robot.webp", owned: 0,},
    {name: 'King Vaccum V', description: `Sucking is its middle name. Licking is for babies.`, price: 45000, licksPerSecondBoost: 350, image: "/Vaccum.png", owned: 0,},
])

export const upgrades= ref([
    {name: "Saliva I", price: 1, image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 3, price: 10, boost: () => buildings.value[0].licksPerSecondBoost *= 2},
    {name: "Saliva II", price: 5, image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 10 && purchasedUpgrades.value.includes("Saliva I"), price: 100, boost: () => buildings.value[0].licksPerSecondBoost *= 2},
    {name: "Saliva III", price: 10, image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 25 && purchasedUpgrades.value.includes("Saliva II"),price: 1000, boost: () => buildings.value[0].licksPerSecondBoost *= 2},
    {name: "Saliva IV", price: 15, image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 50 && purchasedUpgrades.value.includes("Saliva III"), price: 10000, boost: () => buildings.value[0].licksPerSecondBoost *= 2},
    {name: "Saliva V", price: 20, image: "/UPIC/WaterDrop.png", unlocked: () => buildings.value[0].owned >= 75 && purchasedUpgrades.value.includes("Saliva IV"), price: 1000000, boost: () => buildings.value[0].licksPerSecondBoost *= 2},
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
