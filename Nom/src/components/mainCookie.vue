<template>
    <div class = "bg-white text-black flex flex-col items-center p-3">
        <h1 class = "text-5xl p-5">Cookie Licker</h1>
        <h2 class = "text-2xl p-5">Lick the cookie until it is completly gone!</h2>
        <div class = "flex flex-row justify-center w-full h-160">
            <actual-cookie></actual-cookie>
            <upgrade-screen></upgrade-screen>
            <shop></shop>
        </div>
    </div>
</template>

<script setup>
import actualCookie from "@/components/actualCookie.vue"
import shop from '@/components/shop.vue'
import upgradeScreen from '@/components/upgrade.vue'
import {currentCrumbs, LicksPerSecond, rounder, totalCookieMade } from "@/router/cookieVariables";

const game_ID = setInterval(() => {
    if (LicksPerSecond !== 0){
        currentCrumbs.value += LicksPerSecond.value/5
        totalCookieMade.value += LicksPerSecond.value/5
    }
    currentCrumbs.value = rounder(currentCrumbs.value, "cc")
}, 200)




</script>

<style scoped>

</style>