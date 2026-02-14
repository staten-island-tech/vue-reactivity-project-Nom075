<template>
    <div>
        <h1 class = "text-center">Buy upgrades here!</h1>
        <upgradeCard v-for = "upgrade in upgrades" :key = "upgrade.name" :upgrade = "upgrade"></upgradeCard>

    </div>
</template>

<script setup>
import {ref} from 'vue'
import upgradeCard from '@/components/upgrade.vue';
const upgrades= ref([
  { name: 'Tongue', price: 10, power: 1},
  { name: 'Kirby', price: 100, power: 10},

])



</script>

<style scoped>

</style>