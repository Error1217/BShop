<script setup lang="ts">
import { handleClickRouter } from '@/common';
import { paths } from '@/router';
import { useUserStore } from '@/stores/useUserStore';

const userStore = useUserStore();

const backendClickHandle = async () => {
    if(userStore.user){
        handleClickRouter({ path: paths.backendView});
    }
}

</script>

<template>
    <button v-if="userStore.role==='admin' " type="button" @click="backendClickHandle">後台管理</button>
</template>

<style scoped>
button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--logo-color);
}

button:hover {
    color: var(--hover-color);
}
</style>
