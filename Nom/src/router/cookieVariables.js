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

