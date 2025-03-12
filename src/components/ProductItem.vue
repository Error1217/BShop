<script setup lang="ts">

import ProductImage from './ProductImage.vue';
import ProductInfo from './ProductInfo.vue';

import type { IItem } from '@/Interface/IItem';

const props = defineProps<{
    item: IItem,
}>();

</script>

<template>

    <div class="product-item">
        <div class="product-image">
            <ProductImage :item="props.item">
                <template #label-content>
                    <slot name="label-content"></slot>
                </template>
            </ProductImage>
        </div>
        <div class="product-info">
            <ProductInfo :item="item"></ProductInfo>
        </div>
    </div>

</template>

<style scoped>

.product-item{
    border: 1px var(--primary-bg-color) solid;
    border-radius: 3px;

    box-sizing: border-box;
}

.product-item .product-image{
    margin-bottom: 16px;
}

</style>
