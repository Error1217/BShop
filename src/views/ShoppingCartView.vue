<script setup lang="ts">
import ShoppingCartLayout from '@/components/ShoppingCartLayout.vue';

import CartItem from '@/components/CartItem.vue';
import TotalDetail from '@/components/TotalDetail.vue';

import { getCartAllItem, removeCartItem, updateCartItem } from '@/lib/supabaseClient';
import { useUserStore } from '@/stores/useUserStore';

import { computed, onMounted, reactive, ref, watch, watchEffect } from 'vue';
import type { ICartItem } from '@/Interface/ICartItem';
import type { UUID } from 'crypto';

const isRemove = ref(false);
let cartItems = ref<ICartItem[]>([]);

//獲取用戶購物車
const userStore = useUserStore();

onMounted(async () => {
    if (userStore.user) {
        cartItems.value = await getCartAllItem(userStore.user.id as UUID) || [];
        console.log(cartItems.value)
    }
});

//計算總價
const total_price = computed(() => {
    return cartItems.value.reduce((total: number, item: ICartItem) => {
        return total + item.price * item.quantity;
    }, 0);
})

const handleRemoveItemEvent = async (message: any) => {
    const isRemove = await removeCartItem(message.sku);
    if (isRemove && userStore.user) {
        cartItems.value = await getCartAllItem(userStore.user.id as UUID) || [];
    }
}

const handleUpdateQuantity = async (sku: string, val: any)=>{
    console.log(sku, val);
    if(userStore.user){
        await updateCartItem(userStore.user.id as UUID, sku, val);
        cartItems.value = await getCartAllItem(userStore.user.id as UUID) || [];
    }
    
}

</script>

<template>
    <ShoppingCartLayout>
        <template #title>
            購物車
        </template>
        <template #cart-item>
            <CartItem v-if="!isRemove" v-for="(item, index) in cartItems" :key="item.sku"
                :sku="item.sku" :title="item.name" :variation="item.size" :image_url="item.image_url"
                :price="item.price" :quantity="item.quantity" @removeEvent="handleRemoveItemEvent" @quantityEvent="(val)=>handleUpdateQuantity(item.sku, val)"></CartItem>
        </template>
        <template #total-detail>
            <TotalDetail :total_price="total_price"></TotalDetail>
        </template>

    </ShoppingCartLayout>
</template>

<style scoped></style>
