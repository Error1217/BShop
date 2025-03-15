<script setup lang="ts">

import NavHeader from '@/components/NavHeader.vue';

import { RouterView } from 'vue-router';

import Footer from '@/components/Footer.vue';
import Login from './components/Login.vue';


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

        <Login></Login>
    </div>


</template>

<style scoped>


</style>
