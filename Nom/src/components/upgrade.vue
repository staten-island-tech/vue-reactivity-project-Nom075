<template>
<div class = "w-[40%] border-4 border-black bg-blue-200">
    <div class = "h-[91%] p-1 grid grid-cols-5 overflow-auto justify-items-center gap-1 items-center">
        <upgradeCard v-for = "upgrade in upgrades" :key = "upgrade.name" :upgrade = "upgrade"></upgradeCard>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import upgradeCard from "@/components/upgradeCard.vue"

const upgrades= ref([
    {name: "Saliva I", price: 1, image: "/Cookie.png"},
    {name: "Saliva II", price: 5, image: "/Cookie.png"},
    {name: "Saliva III", price: 10, image: "/Cookie.png"},
    {name: "Saliva IV", price: 15, image: "/Cookie.png"},
    {name: "Saliva V", price: 20, image: "/Cookie.png"},

])


</script>

<style scoped>

</style>