<template>
<div class = "w-[40%] border-4 border-black bg-blue-200">
    <div class = "h-[91%] p-1 grid grid-cols-5 overflow-auto justify-items-center gap-1 items-center">
        <upgradeCard v-for = "upgrade in upgrades" :key = "upgrade.name" :upgrade = "upgrade"></upgradeCard>
    </div>
</div>
</template>

<script setup>
import upgradeCard from "@/components/upgradeCard.vue"
import { upgrades } from "@/router/cookieVariables";


</script>

<style scoped>

</style>