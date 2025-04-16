<script setup lang="ts">
import { handleClickRouter } from '@/common';
import type { ILink } from '@/Interface/ILink';


const props = defineProps({
    navList: {
        type: Array<ILink>
    }
})



</script>

<template>

    <ul class="">
        <li v-for="(item, index) in props.navList" :key="index" @click="handleClickRouter(item.router)"
            class="px-4 py-4 cursor-pointer">{{ item.title }}</li>
    </ul>

</template>

<style scoped src="@/css/backend.css"></style>
