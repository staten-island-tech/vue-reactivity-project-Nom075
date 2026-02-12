<template>
    <div>
        <h1 class = "justify-self-auto">Cookie Licker</h1>
        <h2 class = "justify-self-auto">Directions: Lick the cookie until it disappears! Buy stuff to help you.</h2>
        <div class = "flex flex-row justify-content-center">
            <div class = "h-50% w-50%">
                <button class = "h-500 w-500 bg-none border-none" @click = "addCookie(1)"><img src = "/Cookie.png"></button>
            </div>
            <div class = "h-50% w-50%">
                <shop></shop>
            </div>
        </div>
        
        
        <h2 class = "justify-self-auto">Cookie crumbs: {{ crumbs }}</h2>
        <h2 class = "justify-self-auto">Cookie remaining: {{ totalCookie }}</h2>
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
@import "tailwindcss";
</style>