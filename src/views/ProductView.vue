<script setup lang="ts">

import ProductLayout from '@/components/ProductLayout.vue';

import NavHeader from '@/components/NavHeader.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import ProductImage from '@/components/ProductImage.vue';
import ProductDescribe from '@/components/ProductSummary.vue';

import Footer from '@/components/Footer.vue';

import Item01 from "@/assets/items/item01.png"
import type { IItem } from '@/Interface/IItem';

const product: IItem = {
    "id": 0,
    name: "【🌸 Early Spring 】Manju質感經典西裝外套( 1 colors)",
    img: Item01,
    price: 2746,
    label: "早春5% OFF ✨ ",
    summary: `
    絕對會驚艷的西外！✨ <br>
    面料採用挺版滑順的西裝面料 <br>
    <br>
    不僅能輕鬆駕馭 還能穿出屬於您的時尚感 <br>
    無論是在職場或日常穿搭都非常合適 <br>
    以剛剛好的長度剪裁設計,剛好及腰! <br>
    不過長不過短 <br>
    <br>
    經典不敗，穿出質感日常 <br>
    ✨做工精緻 <br>
    ✨琥珀鈕扣點綴更讓質感更具提升,手袖添加3顆琥珀鈕扣設計 <br>
    <br>
    <br>
    👉🏻 換季時的必備單品 <br>
    早晚微涼的天氣，外面隨手帶件西裝外套，保暖剛剛好，還能讓整體穿搭更完整 <br>
    <br>
    👉🏻不用想太多，這件就對了 <br>
    T-shirt＋牛仔褲有點太隨性？外面加件西裝外套，剛剛好的正式感，連今天的咖啡都喝得更有儀式感了 <br>
    搭配裙子更優雅了 <br>
    <br>
    帶溫柔感的米杏色和知性灰色 <br>
    你最愛哪色呢💗💗 <br>
    ` 

};

</script>

<template>

    <ProductLayout>
        <template #head>
            <NavHeader></NavHeader>
        </template>
        <template #breadcrumb>
            <Breadcrumb></Breadcrumb>
        </template>
        <template #product-image>
            <ProductImage :item="product"></ProductImage>
        </template>
        <template #product-describe>
            <ProductDescribe :item="product"></ProductDescribe>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </ProductLayout>

</template>

<style scoped></style>
