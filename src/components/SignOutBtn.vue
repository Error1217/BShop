<script setup lang="ts">
import { handleClickRouter } from '@/common';
import { paths } from '@/router';
import { useUserStore } from '@/stores/useUserStore';

const userStore = useUserStore();

const signOutClickHandle = async () => {
    await userStore.signOut();
    handleClickRouter({ path: paths.homeView });
}

</script>

<template>
    <button v-if="userStore.user" type="button" @click="signOutClickHandle">登出</button>
</template>

<style scoped>
button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--logo-color);
}

button:hover{
    color: var(--hover-color);
}
</style>
