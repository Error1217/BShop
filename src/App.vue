<script setup lang="ts">

import NavHeader from '@/components/NavHeader.vue';

import { RouterView } from 'vue-router';

import Footer from '@/components/Footer.vue';


</script>

<template>
    <div class="body">
        <nav class="head">
            <NavHeader></NavHeader>
        </nav>

        <RouterView></RouterView>

        <div class="section-width">
            <Footer></Footer>
        </div>
    </div>


</template>

<style scoped>
.body{
    width: 100%;
    height: 100%;
    background-color: var(--body-bg-color);
}
</style>
