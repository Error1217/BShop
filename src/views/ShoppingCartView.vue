<script setup lang="ts">
import ShoppingCartLayout from '@/components/ShoppingCartLayout.vue';

import CartItem from '@/components/CartItem.vue';
import TotalDetail from '@/components/TotalDetail.vue';
</script>

<template>
    <ShoppingCartLayout>
        <template #title>
            購物車
        </template>
        <template #cart-item>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
        </template>
        <template #total-detail>
            <TotalDetail></TotalDetail>
        </template>
    </ShoppingCartLayout>
</template>

<style scoped></style>
