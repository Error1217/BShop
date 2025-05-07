<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BackendProductLayout from './BackendProductLayout.vue';
import { getProducts } from '@/lib/supabaseClient';
import BackendList from './BackendList.vue';
import type { IItem } from '@/Interface/IItem';

import BackendButton from './BackendButton.vue';
import { showBackendAddProduct } from '@/utils/backendProduct';

const products = ref();

onMounted(async () => {
    products.value = await getProducts(" *, Product_Variants!inner(price)");

    for (let index = 0; index < products.value.length; index++) {
        const element = products.value[index];
        element.price = element.Product_Variants[0].price;
        // console.log(element);
    }
})

// ['名稱', '原價', '標籤', '日期']
const listTitle = [
    {title:"名稱", key: "name" as keyof IItem, widthRate:"2"},
    {title:"原價", key: "price" as keyof IItem, widthRate:"1"},
    {title:"標籤", key: "label" as keyof IItem, widthRate:"1"},
    {title:"創建日期", key: "created_at" as keyof IItem, widthRate:"2"},
]

//新增

const openAddProductWindow = ()=>{
    showBackendAddProduct();
}


</script>

<template>
    <BackendProductLayout>
        <template #title>
            商品管理
        </template>

        <template #navlist>
            <BackendButton title="新增" :isActive="false" @click="openAddProductWindow"></BackendButton>
            <BackendButton title="刪除" :isActive="false"></BackendButton>
        </template>

        <template #search>
            <input type="text" name="" id="" placeholder="search" class="bg-blue-200 py-2 px-4 rounded">
        </template>

        <template #list>
            <BackendList :titles="listTitle" :items="products"></BackendList>
        </template>


    </BackendProductLayout>

</template>

<style scoped src="@/css/backend.css"></style>
