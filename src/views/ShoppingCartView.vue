<script setup lang="ts">
import ShoppingCartLayout from '@/components/ShoppingCartLayout.vue';

import CartItem from '@/components/CartItem.vue';
import TotalDetail from '@/components/TotalDetail.vue';

import { getCartAllItem } from '@/lib/supabaseClient';
import { useUserStore } from '@/stores/useUserStore';

import { onMounted, ref } from 'vue';
import type { ICartItem } from '@/Interface/ICartItem';
import type { UUID } from 'crypto';

const isRemove = ref(false);
const cartItems = ref();

//獲取用戶購物車
const userStore = useUserStore();

onMounted(async ()=>{
    if(userStore.user){
        cartItems.value = await getCartAllItem(userStore.user.id as UUID);
        console.log(cartItems.value)

    }
    
    
});


</script>

<template>
    <ShoppingCartLayout>
        <template #title>
            購物車
        </template>
        <template #cart-item>
            <CartItem v-if="!isRemove" v-for="(item, index) in ([] as ICartItem[])" :key="index" :title="item.name"
                :variation="item.size" :image_url="item.image_url" @removeEvent=""></CartItem>
        </template>
        <template #total-detail>
            <TotalDetail></TotalDetail>
        </template>
    </ShoppingCartLayout>
</template>

<style scoped></style>
