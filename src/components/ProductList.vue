<script setup lang="ts">

import type { IItem } from '@/Interface/IItem';

const props = defineProps({
    items: {
        type: Array<IItem>
    },

    gridTemplateColumns:{
        type:String,
        default: "repeat(auto-fill, minmax(0px, 300px))"
    },
    gap:{
        type:String,
        default: "15px"
    }
});

</script>

<template>
    <div class="product-list" :style="`grid-template-columns:${props.gridTemplateColumns}; gap:${props.gap};`">
        <div v-for="(item, index) in props.items" :key="index" class="product-list-slot">
            <slot :item="item"></slot>
        </div>
    </div>

</template>

<style scoped>
.product-list {
    display: grid;

    /* grid-template-columns: repeat(auto-fill, minmax(0px, 300px)); */
    grid-template-rows: auto;
    /* gap:15px; */
    justify-content: center;
    width: 100%;
    padding: 15px;
        
}

</style>
