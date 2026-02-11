<template>
    <div>
        <h1>Cookie Licker</h1>
        <h2>Directions: Lick the cookie until it disappears! Buy stuff to help you.</h2>
        <div class = "cookieScreen">
            <button @click = "addCookie(1)"><img src = "/Cookie.png"></button>
        </div>
        
        
        <h2>Cookie crumbs: {{ crumbs }}</h2>
        <h2>Cookie remaining: {{ totalCookie }}</h2>
    </div>
</template>

<script setup>

import {ref, reactive} from 'vue';

const crumbs = ref(0)
const totalCookie = ref(1000000000)

function addCookie(number){
    crumbs.value += number
    totalCookie.value -= number
}






</script>

<style scoped>
    h1, h2{
        justify-self: center;
    }
    img{
        height: 500px;
        width: 500px;
    }
    button{
        background: none;
        border: none;
    }
    .cookieScreen{
        flex: auto;
        flex-direction: column;
        justify-content: center;
        background-color: aqua;
    }
</style>