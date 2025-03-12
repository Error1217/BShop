<script setup lang="ts">

import NavHeader from '@/components/NavHeader.vue';

import { RouterView } from 'vue-router';

import Footer from '@/components/Footer.vue';

</script>

<template>

    <nav class="head">
        <NavHeader></NavHeader>
    </nav>

    <RouterView></RouterView>

    <div class="section-width">
        <Footer></Footer>
    </div>

</template>

<style scoped></style>
