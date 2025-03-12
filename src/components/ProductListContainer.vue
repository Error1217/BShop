<script setup lang="ts">

import ProductListTitle from './ProductListTitle.vue';
import ProductList from './ProductList.vue';


import type { IItem } from '@/Interface/IItem';

const props = defineProps({
    items: {
        type: Array<IItem>
    },
    gridTemplateColumns:{
        type:String,
        default: "repeat(auto-fill, minmax(0px, 300px))"
    },
    listGap:{
        type:String,
        default: "15px"
    },
    padding:{
        type:String,
        default:"30px 15px 15px 15px"
    }

});

</script>

<template>
    <div class="product-list-container" :style="`padding:${props.padding}`">

        <div class="title">
            <ProductListTitle>
                <slot name="title"></slot>
            </ProductListTitle>
        </div>

        <div class="product-list clearfix">

            <ProductList :items="props.items" :gridTemplateColumns="props.gridTemplateColumns" :gap="props.listGap">

                <template #default="{ item }">
                    <slot :item="item"></slot>
                </template>

            </ProductList>

        </div>
    </div>

</template>

<style scoped>
.product-list-container {
    width: 100%;
}

.product-list {
    padding: 15px;
}
</style>
