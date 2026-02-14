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
import { currentCrumbs, LicksPerSecond, LickPower } from '@/router/cookieVariables';

const buildings= ref([
  { name: 'Tongue', description: "A tongue to help you lick the cookie!", price: 10, licksPerSecondBoost: 1, image: "/Tongue.png", owned: 0},
  { name: 'Kirby', description: "Eater of all.", price: 100, licksPerSecondBoost: 10, image: "/Cookie.png", owned: 0},
])

function buyingCalculation(building){
    if (currentCrumbs.value >= building.price){
        LicksPerSecond.value += building.licksPerSecondBoost
        currentCrumbs.value -= building.price
        building.price = Math.floor(building.price*1.5)
        currentCrumbs.value = Math.round(currentCrumbs.value*10)/10
        building.owned += 1
    }
}


</script>

<style scoped>

</style>