<script setup lang="ts">

</script>

<template>
    <div class="absolute top-10 right-10 left-10 bottom-10 m-auto bg-blue-100 rounded-lg p-8">
        <div class="top">
            <slot name="title"></slot>
        </div>

        <div class="mid absolute flex flex-row gap-4 top-20 right-10 left-10 bottom-10">
            <div class="left flex flex-1 flex-col gap-2">
                <slot name="left"></slot>

            </div>
            <div class="right flex flex-1 justify-center border border-gray-400 rounded-lg">

               <slot name="right"></slot>
            </div>
        </div>

        <div class="absolute right-10 top-10 text-gray-500 hover:text-red-700">
            <slot name="closeBtn"></slot>
        </div>
    </div>
</template>

<style scoped src="@/css/backend.css"></style>
