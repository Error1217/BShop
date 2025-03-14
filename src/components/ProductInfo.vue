<script setup lang="ts">

import type { IItem } from '@/Interface/IItem';

const props = defineProps<{
    item: IItem
}>();

</script>

<template>
    <div class="info-box">
        <div class="title">
            {{ props.item.name }}
        </div>
        <div class="product-price">
            {{ props.item.price }}
        </div>
    </div>

</template>

<style scoped>

.info-box{
    width: 100%;
    text-align: center;
    line-height: 1.5;
}

.info-box .title{
    width: 100%;
    font-size: 18px;
    
    font-weight: lighter;
    color: var(--primary-text-color);
    margin-bottom: 4px;
}

.info-box .product-price{
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    color: var(--primary-text-color);
}

.info-box .product-price::before{
    content: "NT$";
    color: var(--primary-text-color);
}


</style>
