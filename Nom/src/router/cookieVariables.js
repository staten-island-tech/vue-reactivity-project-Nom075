import {ref} from "vue"
import Decimal from "decimal.js"

export const currentCrumbs = ref(new Decimal(0))
export const LicksPerSecond = ref(new Decimal(0))
export const LickPower = ref(new Decimal(1))
export const totalCookieMade = ref(new Decimal(0))

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
