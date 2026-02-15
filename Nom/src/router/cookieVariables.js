import {ref} from "vue"

export const currentCrumbs = ref(0)
export const LicksPerSecond = ref(0)
export const LickPower = ref(1)
export const totalCookieMade = ref(0)

export function rounder(number, variable){
    if (variable === "cc"){
        return Math.round(number*100)/100
    }
}

