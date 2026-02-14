<template>
    <div class = "bg-white text-black flex flex-col items-center p-3">
        <h1 class = "text-5xl p-5">Cookie Licker</h1>
        <h2 class = "text-2xl p-5">Lick the cookie until it is completly gone!</h2>
        <div class = "flex flex-row justify-center w-full h-160">
            <actual-cookie></actual-cookie>
            <div class = "w-[40%] border-4">
            </div>
            <shop></shop>
        </div>
    </div>
</template>

<script setup>
import actualCookie from "@/components/actualCookie.vue"
import shop from '@/components/shop.vue'
import {currentCrumbs, LicksPerSecond } from "@/router/cookieVariables";

const game_ID = setInterval(() => {
    currentCrumbs.value += LicksPerSecond.value/10
    currentCrumbs.value = Math.round(currentCrumbs.value*10)/10
}, 100)



</script>

<style scoped>

</style>