<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BackendProductLayout from './BackendProductLayout.vue';
import { getProducts } from '@/lib/supabaseClient';


const products = ref();

onMounted(async () => {
    products.value = await getProducts(" *, Product_Variants!inner(price)");

    for (let index = 0; index < products.value.length; index++) {
        const element = products.value[index];
        element.price = element.Product_Variants[0].price;
        console.log(element);
    }
})

</script>

<template>
    <BackendProductLayout :gridTitles="['名稱', '原價', '標籤', '日期']" :products="products">
        <template #title>
            商品管理
        </template>

        <template #navlist>
            <li
                class="inline-block bg-blue-200 
                border border-blue-300 
                text-center px-4 py-2 rounded 
                hover:bg-blue-300 hover:text-white box-border cursor-pointer">
                新增
            </li>
            <li
                class="inline-block bg-blue-200 
                border border-blue-300 
                text-center px-4 py-2 rounded 
                hover:bg-blue-300 hover:text-white box-border cursor-pointer">
                刪除
            </li>
        </template>

        <template #search>
            <input type="text" name="" id="" placeholder="search" class="bg-blue-200 py-2 px-4 rounded">
        </template>


    </BackendProductLayout>


</template>

<style scoped src="@/css/backend.css"></style>
