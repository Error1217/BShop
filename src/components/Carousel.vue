<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import ArrowLeft from '@/icons/ArrowLeftIcon.vue';
import ArrowRight from '@/icons/ArrowRightIcon.vue';


import carouselItem01 from "@/assets/carouselList/carouselItem01.png"
import carouselItem02 from "@/assets/carouselList/carouselItem02.png"
import carouselItem03 from "@/assets/carouselList/carouselItem03.png"
import carouselItem04 from "@/assets/carouselList/carouselItem04.png"


import type { IItem } from '@/Interface/IItem';

const props = defineProps({
    autoCarousel: {
        type: Boolean,
        default: false
    }
});

const carouselList = [
    { "id": 0, name: "carouselItem01", img: carouselItem01 },
    { "id": 1, name: "carouselItem02", img: carouselItem02 },
    { "id": 2, name: "carouselItem03", img: carouselItem03 },
    { "id": 3, name: "carouselItem04", img: carouselItem04 },

]

// 定時輪播
onMounted(() => {

    //定時輪播
    if (props.autoCarousel) {
        setInterval(() => {
            rightButton();
        }, 5000);
    }

});


//添加而外圖片
carouselList.unshift(carouselList[carouselList.length - 1]);
carouselList.push(carouselList[1]);

const currentIndex = ref(1);
const carouselStyleType = ref(true);
const isTransitioning = ref(false);

//中間圖片style
const carouselStyle = computed(() => {
    return {
        transform: `translateX(-${currentIndex.value * 100}%)`,
        transition: `transform 0.5s`,
    }
});

//first, last圖片style
const carsouelSideStyle = computed(() => {
    return {
        transform: `translateX(-${currentIndex.value * 100}%)`,
    }
})

const moveTo = (index: number) => {
    currentIndex.value = index;
}


const leftButton = () => {
    //防止連按
    if(isTransitioning.value) return;

    isTransitioning.value = true;

    if (currentIndex.value == 1) {
        carouselStyleType.value = false;
        moveTo(carouselList.length - 1);

        setTimeout(() => {
            currentIndex.value = (currentIndex.value - 1 + carouselList.length) % carouselList.length;
            carouselStyleType.value = true;
        }, 50);



    } else {
        currentIndex.value = (currentIndex.value - 1 + carouselList.length) % carouselList.length;
    }

    setTimeout(()=>{
        isTransitioning.value = false;
    }, 500);

}

const rightButton = () => {
    //防止連按
    if(isTransitioning.value) return;

    isTransitioning.value = true;

    if (currentIndex.value == carouselList.length - 2) {
        carouselStyleType.value = false;
        moveTo(0);

        setTimeout(() => {
            currentIndex.value = (currentIndex.value + 1) % carouselList.length;
            carouselStyleType.value = true;
        }, 50);
    } else {
        currentIndex.value = (currentIndex.value + 1) % carouselList.length;
    }

    setTimeout(()=>{
        isTransitioning.value = false;
    }, 500);
}



</script>

<template>
    <div class="view">
        <button class="carousel-arrow arrow-left" @click="leftButton">
            <ArrowLeft width="100%" height="100%" color="#fff"></ArrowLeft>
        </button>
        <button class="carousel-arrow arrow-right" @click="rightButton">
            <ArrowRight width="100%" height="100%" color="#fff"></ArrowRight>
        </button>
        <div class="carousel-list" :style="carouselStyleType ? carouselStyle : carsouelSideStyle">
            <div v-for="(item, index) in carouselList" :key="index" class="carousel-item"
                :class="`item-${index}`">
                <img :src="item.img" alt="">
            </div>
        </div>
        <div class="indicator">
            <span v-for="(item, index) in carouselList.slice(1, carouselList.length - 1)" :key="index + 1"
                :class="{ 'active': currentIndex == index + 1 }" @click="moveTo(index + 1)"></span>
        </div>
    </div>
</template>

<style scoped>
.view {
    display: block;
    width: 100%;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
}

.view .carousel-arrow {
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    width: 60px;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: auto 0;
    text-align: center;
    z-index: 50;
    padding: 0px;
    border: 0px;
}

.view .carousel-arrow.arrow-left {
    left: 0px;
}


.view .carousel-arrow.arrow-right {
    right: 0px;
}

.view .carousel-list {
    display: flex;
    width: 100%;
    height: 100%;

}



.view .carousel-list .carousel-item {
    display: flex;
    flex: 0 0 100%;
    /* flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100%; */

    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;
}

.view .carousel-list .carousel-item img {
    width: 100%;
}

.view .indicator {
    display: flex;
    position: absolute;
    bottom: 15px;

    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.view .indicator span {
    display: block;
    background-color: #eee;
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin: 0 5px;
    padding: 0px;
    box-sizing: border-box;
    cursor: pointer;
}

.view .indicator .active {
    background-color: var(--primary-bg-color);
}
</style>