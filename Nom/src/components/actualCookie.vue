<template>
    <div class = "flex flex-col h-full w-[30%] bg-cyan-100 justify-center items-center gap-3 border-4">
        <h2 class = "text-4xl">Cookie</h2>
        <h2 class = "text-2xl">Cookie crumbs: {{ format(currentCrumbs) }}</h2>
        <h2 class = "text-lg">Licks per second: {{format(LicksPerSecond)}}</h2>
        <h2 class = "text-lg">All {{format(totalCookieMade)}}</h2>
        <button class = "h-[40%] w-[50%] hover:w-[55%] border-none" @click = "addCookie()"><img src = "/Cookie.png"></button>
    </div>
</template>

<script setup>
import { currentCrumbs, LicksPerSecond, LickPower, totalCookieMade, format } from '@/router/cookieVariables';
function addCookie(){
    currentCrumbs.value = currentCrumbs.value.plus(LickPower.value)
    totalCookieMade.value = totalCookieMade.value.plus(LickPower.value)
}

</script>

<style lang="scss" scoped>

</style>