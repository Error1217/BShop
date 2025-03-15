<script setup lang="ts">

defineProps({
    color: {
        type: String,
        default: "currentColor"
    },
    height: {
        type: String,
        default: '24px'
    },
    width: {
        type: String,
        default: '24px'
    }
})

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :height="height" viewBox="0 -960 960 960" :width="width" :fill="color">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
</template>
