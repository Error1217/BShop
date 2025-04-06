<script setup lang="ts">
import item01 from '@/assets/items/item01.png'
import CartItemLayout from './CartItemLayout.vue';
import QuantitySelector from './QuantitySelector.vue';

import DeleteIcon from '@/icons/DeleteIcon.vue';
import { ref } from 'vue';

const props = defineProps({
    id: {
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
    }
})

const emit = defineEmits(["removeEvent"]);

const reomveItem = () => {
    emit("removeEvent", {itemId: props.id, isRemove:true});
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
            <QuantitySelector></QuantitySelector>
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
