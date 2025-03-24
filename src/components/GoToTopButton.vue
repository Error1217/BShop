<script setup lang="ts">

import VerticalAlignTop from '@/icons/VerticalAlignTop.vue';

const scrollTop = () => {
    window.scrollTo({top:0, behavior:"smooth"})
}


</script>


<template>
    <div class="container">
        <div class="arrow-top" @click="scrollTop">
            <VerticalAlignTop width="25px" height="25px"></VerticalAlignTop>
        </div>
    </div>

</template>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--btn-bg-color);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.container .arrow-top{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    color: var(--primary-bg-color);
    transition: .2s;
}

.container .arrow-top:hover{
    color: var(--btn-text-hover-color);
}

</style>
