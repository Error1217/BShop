<script setup lang="ts">

import { onMounted, ref } from 'vue';

import CategoryLayout from '@/components/CategoryLayout.vue';

import Breadcrumb from '@/components/Breadcrumb.vue';
import Aside from '@/components/Aside.vue';
import ProductListInfo from '@/components/ProductListInfo.vue';
import ProductList from '@/components/ProductList.vue';
import ProductItem from '@/components/ProductItem.vue';
import Paginator from '@/components/Paginator.vue';

import Item01 from "@/assets/items/item01.png"

/*
添加資料庫 替換產品圖片
*/
import { getProducts } from '@/lib/supabaseClient';

const products = ref();
// const products = [
//     { "id": 0, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 1 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 2 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 3 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 4 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 5 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 6 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 7 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
//     { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
// ]

onMounted(async () => {
    products.value = await getProducts();
    console.log(products);
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
                    <ProductItem :item="item" :width="`200px`">
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
