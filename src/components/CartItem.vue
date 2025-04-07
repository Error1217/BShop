<script setup lang="ts">
import item01 from '@/assets/items/item01.png'
import CartItemLayout from './CartItemLayout.vue';
import QuantitySelector from './QuantitySelector.vue';

import DeleteIcon from '@/icons/DeleteIcon.vue';
import { ref, type Ref } from 'vue';

const props = defineProps({
    sku: {
        type: String,
    },
    title: {
        type: String,
    },
    variation: {
        type: String,
    },
    image_url: {
        type: String,
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        required:true,
    }
})

const quantity = ref(props.quantity || 0);

const emit = defineEmits(["removeEvent", "quantityEvent"]);

const reomveItem = () => {
    emit("removeEvent", { sku: props.sku, isRemove: true });
}

const updateQuantity = () => {
    emit("quantityEvent", { "sku": props.sku, "quantity": quantity.value });
}

const handleUpdateQuantity = (newQuantity:number) => {
    quantity.value = newQuantity
    updateQuantity();
}
</script>

<template>
    <CartItemLayout>
        <template #edit-btn>
            <input type="checkbox" name="" id="">
        </template>
        <template #image>
            <img :src="props.image_url" alt="">
        </template>
        <template #title>
            {{ props.title }}
        </template>
        <template #variation>
            <div class="">{{ props.variation }}</div>
        </template>
        <template #product-quantity>
            <QuantitySelector :quantity="quantity" @quantityEvent="handleUpdateQuantity"></QuantitySelector>
        </template>
        <template #product_price>
            {{ props.price }}
        </template>
        <template #reomve-btn>
            <div @click="reomveItem">
                <DeleteIcon></DeleteIcon>
            </div>
        </template>
    </CartItemLayout>
</template>

<style scoped>
img {
    width: auto;
    height: 100%;
}
</style>
