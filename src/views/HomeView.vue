<script setup lang="ts">
//HomeView 新增route

import Carousel from '@/components/Carousel.vue';
import AboutMe from '@/components/AboutMe.vue';


import ProductListContainer from '@/components/ProductListContainer.vue';
import ProductImage from '@/components/ProductImage.vue';
import ProductItem from '@/components/ProductItem.vue';

import Item01 from "@/assets/items/item01.png"

const newArrivals = [
    { "id": 0, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 1 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 2 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 3 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 4 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 5 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 6 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 7 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
]

const weeklyBest = [
    { "id": 0, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 1 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 2 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 3 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 4 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 5 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 6 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 7 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
    { "id": 1, name: "【🌸 Early Spring 】Manju質感經典西裝外套( 8 colors)", img: Item01, price: 2746, label: "早春5% OFF ✨ " },
]

</script>

<template>

    <div class="container">
        <div class="section-full-width">
            <Carousel :autoCarousel="true"></Carousel>
        </div>

        <div class="section-width">
            <AboutMe></AboutMe>
        </div>

        <div class="section-width">
            <ProductListContainer :items="weeklyBest" :grid-template-columns="`repeat(5, 1fr)`" :listGap="`5px`"
                :padding="`30px 140px 15px 140px`">
                <template #title>WEEKLY BEST</template>

                <template #default="{ item }">
                    <ProductImage :item="item">
                        <template #label-content>{{ item.label }}</template>
                    </ProductImage>
                </template>

            </ProductListContainer>
        </div>

        <div class="section-width">
            <ProductListContainer :items="newArrivals">
                <template #title>NEW ARRIVALS</template>

                <template #default="{ item }">
                    <ProductItem :item="item" :width="`100px`">
                        <template #label-content>{{ item.label }}</template>
                    </ProductItem>
                </template>

            </ProductListContainer>
        </div>

    </div>


</template>

<style scoped></style>
