<script setup lang="ts">


</script>

<template>

    <div class="flex flex-row h-1/2 flex-1 h-screen">
        <div class="left w-60 bg-blue-200">
            <div class=" text-3xl pb-8 pt-4 pl-4">
                <slot name="title"></slot>
            </div>
            <div class="">
                <slot name="sideNavList"></slot>
            </div>

        </div>
        <div class="right flex-1 bg-red-100">
            <slot name="main"></slot>

        </div>
    </div>

</template>

<style scoped src="@/css/backend.css"></style>
