<script setup lang="ts">

import ProductLayout from '@/components/ProductLayout.vue';

import Breadcrumb from '@/components/Breadcrumb.vue';
import ProductImage from '@/components/ProductImage.vue';
import ProductDescribe from '@/components/ProductSummary.vue';

import { getProduct } from '@/lib/supabaseClient';

import { useRoute } from 'vue-router';
import type { UUID } from 'crypto';
import { onMounted, ref } from 'vue';

const product = ref()
const productVariants = ref<any>([]);

onMounted(async () => {
    const productId = useRoute().params.id as UUID
    product.value = await getProduct(productId, "*, Product_Variants(price, size)");
    productVariants.value = product.value.Product_Variants;
})

</script>

<template>

    <ProductLayout v-if="product">
        <template #breadcrumb>
            <Breadcrumb></Breadcrumb>
        </template>
        <template #product-image>
            <ProductImage :item="product"></ProductImage>
        </template>
        <template #product-describe>
            <ProductDescribe :item="product" :variants="productVariants"></ProductDescribe>
        </template>
    </ProductLayout>

</template>

<style scoped></style>
