<script setup lang="ts">

import type { ILink } from "@/Interface/ILink";

defineProps({
    items:{
        type: Array<ILink>,
    },
    count:{
        type: Number
    }
})


</script>

<template>

    <ul>
        <li v-if="items" v-for=" (item, i) in items" :key="i">
            <slot :item="item"></slot>
        </li>
        <li v-if="count" v-for=" (item, i) in count" :key="i">
            <slot :name="`item-${i}`" :item="item"></slot>
        </li>
    </ul>


</template>

<style scoped>
ul {
    display: flex;
    box-sizing: border-box;
    padding: 4px;
    width: 100%;
    justify-content: center;
}

ul li {
    margin: 8px 12px;
    box-sizing: border-box;
}
</style>
