<template>
    <div>
        <h1 class = "justify-self-center text-5xl p-5">Cookie Licker</h1>
        <h2 class = "justify-self-center text-2xl p-5">Lick the cookie until it is completly gone!</h2>
        <div class = "flex flex-row justify-center w-full h-150">
            <div class = "flex flex-col h-full w-[30%] bg-cyan-100 justify-center items-center gap-5">
                <h2 class = "text-4xl">Cookie</h2>
                <h2 class = "text-2xl">Cookie crumbs: {{ crumbs }}</h2>
                <button class = "h-[40%] w-[50%] hover:w-[55%] border-none" @click = "addCookie(1)"><img src = "/Cookie.png"></button>
                <h2 class = "text-xl">Cookie remaining: {{ totalCookie }}</h2>
            </div>
            <div class = "w-[45%] bg-amber-950">
                <shop></shop>
            </div>
            <div class = "w-[25%]  bg-amber-100">
                <shop></shop>
            </div>

        </div>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
import shop from '@/components/shop.vue'

const crumbs = ref(0)
const totalCookie = ref(1000000000)

function addCookie(number){
    crumbs.value += number
    totalCookie.value -= number
}

</script>

<style scoped>

</style>