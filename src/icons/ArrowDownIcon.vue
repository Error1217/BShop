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
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
</template>
