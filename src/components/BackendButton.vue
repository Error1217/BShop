<script setup lang="ts">

const props = defineProps<{
    title: String
    isActive: Boolean
}>()



</script>

<template>
    <div class="inline-block bg-blue-200 
                border border-blue-300 
                text-center px-4 py-2 rounded 
                box-border cursor-pointer
                hover:bg-blue-300 hover:text-white"
                :class=" {'bg-blue-300 text-white': props.isActive}">
        {{ props.title }}
    </div>
</template>

<style scoped src="@/css/backend.css"></style>
