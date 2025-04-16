<script setup lang="ts">

import NavHeader from '@/components/NavHeader.vue';

import { RouterView } from 'vue-router';

import Footer from '@/components/Footer.vue';
import Login from '@/components/Login.vue';
import GoToTopButton from '@/components/GoToTopButton.vue';

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

        <div class="go-to-top">
            <GoToTopButton></GoToTopButton>
        </div>
        
    </div>


</template>

<style scoped>
.go-to-top{  
    position: fixed;
    right: 20px;
    bottom: 20px;
}

</style>
