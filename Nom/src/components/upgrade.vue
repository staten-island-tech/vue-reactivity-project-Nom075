<template>
<div class = "flex p-3">
    <div class="card w-[95%] bg-white card-sm shadow-sm">
    <div class="card-body">
        <div class = "flex flex-col justify-center">
            <h2 class="text-black text-center text-xl">{{upgrade.name}}</h2>
            <p class = "text-black text-center text-base">{{ upgrade.price }}</p>
        </div>
        <div class="justify-center card-actions">
            <button class="btn btn-primary h-5">Buy 1 for {{ upgrade.price }} cookie crumbs.</button>
        </div>
    </div>
    </div>
</div>
</template>

<script setup>
defineProps({
    upgrade: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>

</style>