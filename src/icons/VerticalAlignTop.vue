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
        <path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"/>
    </svg>
</template>
