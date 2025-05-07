<script setup lang="ts">

</script>

<template>

    <div class="flex flex-col px-8 bg-blue-100 h-screen">
        <div class="nav bg-blue-100 pt-4 flex-col">
            <h2 class="title text-2xl mb-8">
                <slot name="title"></slot>
            </h2>
            <div class="flex flex-row mb-8">
                <ul class="flex gap-4">
                    <slot name="navlist"></slot>
                </ul>
                <div class="search ml-auto ">
                    <slot name="search"></slot>
                </div>
            </div>
        </div>
        <div class="min-h-0">
            <slot name="list"></slot>
        </div>
        
    </div>

</template>

<style scoped src="@/css/backend.css"></style>
