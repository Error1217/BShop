<script setup lang="ts">

import { onMounted, ref } from 'vue';

import CategoryLayout from '@/components/CategoryLayout.vue';

import Breadcrumb from '@/components/Breadcrumb.vue';
import Aside from '@/components/Aside.vue';
import ProductListInfo from '@/components/ProductListInfo.vue';
import ProductList from '@/components/ProductList.vue';
import ProductItem from '@/components/ProductItem.vue';
import Paginator from '@/components/Paginator.vue';

import { getProducts, getProductVariants } from '@/lib/supabaseClient';
import { addRouteForItems } from '@/router/index';
import type { UUID } from 'crypto';

const products = ref();


onMounted(async () => {
    products.value = await getProducts(" *, Product_Variants!inner(price)");
    addRouteForItems(products.value);

    for (let index = 0; index < products.value.length; index++) {
        const element = products.value[index];
        element.price = element.Product_Variants[0].price;
        // console.log(element);
    }
    
})



</script>

<template>
    <CategoryLayout>
        <template #breadcrumb>
            <Breadcrumb></Breadcrumb>
        </template>
        <template #aside>
            <Aside></Aside>
        </template>
        <template #main>
            <ProductListInfo></ProductListInfo>

            <ProductList :items="products" :grid-template-columns="`repeat(auto-fill, minmax(0px, 240px))`">
                <template #default="{ item }">
                    <ProductItem :item="item" :isLabel="true" :width="`200px`">
                        <template #label-content>{{ item.label }}</template>
                    </ProductItem>
                </template>
            </ProductList>

            <div class="product-list-paginator">
                <Paginator></Paginator>
            </div>
        </template>
    </CategoryLayout>


</template>

<style scoped>
.product-list-paginator {
    text-align: center;
    padding-top: 72px;
}
</style>
