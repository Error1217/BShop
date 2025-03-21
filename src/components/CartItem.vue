<script setup lang="ts">
import item01 from '@/assets/items/item01.png'
import CartItemLayout from './CartItemLayout.vue';
import QuantitySelector from './QuantitySelector.vue';

import DeleteIcon from '@/icons/DeleteIcon.vue';

const deleteItem = () => {
    //刪除頁面樣式
    //刪除資料庫的物品
}


</script>

<template>
    <CartItemLayout>
        <template #edit-btn>
            <input type="checkbox" name="" id="">
        </template>
        <template #image>
            <img :src="item01" alt="">
        </template>
        <template #title>
            黑色絲緞高領襯衫
        </template>
        <template #variation>
            <div class="">知性深灰色 / XL</div>
        </template>
        <template #product-quantity>
            <QuantitySelector></QuantitySelector>
        </template>
        <template #reomve-btn>
            <DeleteIcon></DeleteIcon>
        </template>
    </CartItemLayout>
</template>

<style scoped>
img {
    width: auto;
    height: 100%;
}
</style>
