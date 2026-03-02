<template>
<div v-if = "totalCookieMade.greaterThanOrEqualTo(building.price) || building.owned > 0"class = "flex p-3">
    <div class="card w-[95%] h-auto bg-white card-sm shadow-sm">
    <div class="flex flex-row card-body">
        <div class = "flex h-full w-[20%] justify-center items-center">
            <img :src="building.image" alt="cookie">
        </div>
        <div class = "h-full w-[75%]">
            <div class = "flex flex-col items-center gap-1">
                <h2 class="text-black text-center text-xl">{{building.name}} (x{{ building.owned}})</h2>
                <p class = "text-black text-center text-base italic">"{{ building.description}}"</p>
                <p class = "text-green-600 text-center text-base">Increases LPS by: {{format(building.licksPerSecondBoost)}}</p>
                <p class = "text-black text-center text-sm">Total LPS: {{format(D(building.licksPerSecondBoost).mul(building.owned))}} ({{rounder((D(building.licksPerSecondBoost).mul(building.owned)).div(LicksPerSecond).mul(100), "cc")}}% of total LPS.)</p>
                <p class = "text-black text-center text-base">Crumbs cost: {{ format(building.price)}}</p>
                <button v-if = "currentCrumbs.greaterThanOrEqualTo(building.price)" @click = "emit('boughtSelf', building)" class="btn btn-success h-7 w-[40%] justify-center">Buy!</button>
                <button v-else @click = "emit('boughtSelf', building)" class="btn btn-error h-7 w-[40%] justify-center">Buy!</button>
            </div>
        </div>
    </div>
    </div>
</div>
<div v-else class = "flex p-3">
    <div class="flex flex-col items-center card w-[95%] h-auto bg-white card-sm shadow-sm gap-2">
        <h2 class = "text-3xl text-center">???</h2>
        <div class = "flex h-[80%] w-[20%]">
            <img src="/Lock.png" alt="Lock">
        </div>
        <p class = "text-black text-center text-base">{{(totalCookieMade.dividedBy(building.price)).mul(100).toDecimalPlaces(2)}}% unlocked.</p>
        <p class = "text-black text-center text-base">Collect more cookie crumbs to unlock this building.</p>
    </div>
</div>
</template>

<script setup>
import { currentCrumbs, totalCookieMade, format, D, LicksPerSecond, rounder } from '@/router/cookieVariables';

defineProps({
    building: {
        type: Object,
        required: true,
    }
})

const emit = defineEmits(["boughtSelf"])

</script>

<style scoped>

</style>