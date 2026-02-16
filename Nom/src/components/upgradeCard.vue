<template>
    <button v-if = "currentCrumbs.greaterThanOrEqualTo(upgrade.price)"@click = "what()" class = "bg-white h-25 w-[95%] p-1 justify-items-center hover:bg-blue-300">
            <div class = "flex flex-col h-full w-full">
                <div class = "flex h-[70%] justify-center">
                    <img :src="upgrade.image" alt="cook">
                </div>
                <div class = "h-[30%] w-auto text-center">
                    <h2 class = "text-lg">{{ upgrade.name }}</h2>
                </div>
            </div>
        </button>
    <button v-else class = "bg-red-700 h-25 w-[95%] p-1 justify-items-center hover:bg-blue-300">
            <div class = "flex flex-col h-full w-full">
                <div class = "flex h-[70%] justify-center">
                    <img src="/Lock.png" alt="cook">
                </div>
                <div class = "h-[30%] w-auto text-center">
                    <h2 class = "text-lg">???</h2>
                </div>
            </div>
        </button>
</template>

<script setup>
import { currentCrumbs } from '@/router/cookieVariables';

defineProps({
    upgrade: {
        type: Object,
        required: true,
    }
})

function what(){
    console.log("whatttttt")
}
</script>

<style lang="scss" scoped>

</style>