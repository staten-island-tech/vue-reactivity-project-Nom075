<template>
<div class = "w-[30%] border-4">
    <h1 class = "text-center text-2xl p-3">Store</h1>
    <div class = "overflow-auto bg-blue-100 h-[91%] w-full">
        <buildingCard v-for = "building in buildings" :key = "building.name" :building = "building" @bought-self="buyingCalculation"></buildingCard>
</div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import buildingCard from '@/components/buildingCard.vue';
import { currentCrumbs, LicksPerSecond, LickPower, rounder } from '@/router/cookieVariables';

const buildings= ref([
  { name: 'Tongue', description: "A tongue to help you lick the cookie!", price: 25, licksPerSecondBoost: 1, image: "/Tongue.png", owned: 0},
  { name: 'Cat', description: "Helps you lick the cookie. This one is immune to chocolate.", price: 180, licksPerSecondBoost: 3, image: "/Cat.png", owned: 0},
    {name: 'Dog', description: "Slobbery Kisses for the cookie! Also immune to chocolate.", price: 1000, licksPerSecondBoost: 15, image: "/Dog.png", owned: 0},
    {name: 'Licker-Bot', description: "It may not seem like it has a mouth but it is good at licking things.", price: 6900, licksPerSecondBoost: 55, image: "/Robot.webp", owned: 0},
    {name: 'King Vaccum V', description: `Sucking is its middle name. Licking is for babies.`, price: 45000, licksPerSecondBoost: 350, image: "/Vaccum.png", owned: 0},
])

function buyingCalculation(building){
    if (currentCrumbs.value >= building.price){
        
        LicksPerSecond.value += building.licksPerSecondBoost
        currentCrumbs.value -= building.price
        currentCrumbs.value = rounder(currentCrumbs.value, "cc")
        building.price = Math.floor(building.price*1.2)
        building.owned += 1

    }
}


</script>

<style scoped>

</style>