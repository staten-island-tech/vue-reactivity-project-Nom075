<template>
    <div class = "flex flex-col h-full w-[30%] bg-cyan-100 justify-center items-center gap-3 border-4">
        <h2 class = "text-4xl">Cookie</h2>
        <h2 class = "text-2xl">Cookie crumbs: {{ currentCrumbs }}</h2>
        <h2 class = "text-lg">Licks per second: {{LicksPerSecond}}</h2>
        <button class = "h-[40%] w-[50%] hover:w-[55%] border-none" @click = "addCookie()"><img src = "/Cookie.png"></button>
    </div>
</template>

<script setup>
import { currentCrumbs, LicksPerSecond, LickPower } from '@/router/cookieVariables';
function addCookie(){
    currentCrumbs.value += LickPower.value
}

</script>

<style lang="scss" scoped>

</style>