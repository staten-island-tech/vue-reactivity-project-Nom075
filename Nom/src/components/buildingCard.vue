<template>
<div class = "flex p-3">
    <div class="card w-[95%] h-40 bg-white card-sm shadow-sm">
    <div class="flex flex-row card-body">
        <div class = "flex h-full w-[20%] bg-black justify-center items-center">
            <img :src="building.image" alt="cookie">
        </div>
        <div class = "h-full w-[75%]">
            <div class = "flex flex-col items-center gap-3">
                <h2 class="text-black text-xl">{{building.name}} (x{{ building.owned }})</h2>
                <p class = "text-black text-base">{{ building.description}}</p>
                <p class = "text-black text-base">Crumbs cost: {{ building.price}}</p>
                <button @click = "emit('boughtSelf', building)" class="btn btn-primary h-5 w-[40%] justify-center">Buy!</button>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script setup>
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