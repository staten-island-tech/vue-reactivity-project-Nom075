<template>
    <div>
        <button>{{ upgrade.name }}</button>
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