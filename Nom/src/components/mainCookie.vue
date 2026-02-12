<template>
    <div>
        <h1 class = "justify-self-auto">Cookie Licker</h1>
        <h2 class = "justify-self-auto">Directions: Lick the cookie until it disappears! Buy stuff to help you.</h2>
        <div class = "flex">
            <div class = "cookieScreen">
                <button class = "h-500 w-500 bg-none border-none" @click = "addCookie(1)"><img src = "/Cookie.png"></button>
            </div>
            <div class = "shopScreen">
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
    .Screen{
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: aqua;
    }
    .cookieScreen{
        width: 50%;
        height: 100%;
    }
    .shopScreen{
        width: 50%;
        height: 100%;
    }
</style>