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
import { currentCrumbs, LicksPerSecond, LickPower, rounder, D, buildings, calculateLPS} from '@/router/cookieVariables';


function buyingCalculation(building){
    if (currentCrumbs.value.greaterThanOrEqualTo(building.price)){
        
        currentCrumbs.value = currentCrumbs.value.minus(building.price)
        currentCrumbs.value = rounder(currentCrumbs.value, "cc")
        building.price = D(building.price).mul(1.2).floor()
        building.owned = D(building.owned).plus(1)
        calculateLPS()
        
    }
}


</script>

<style scoped>

</style>