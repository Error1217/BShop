<script setup lang="ts">
import { handleClickRouter } from '@/common';
import { paths } from '@/router/index';
import { useUserStore } from '@/stores/useUserStore';
import { showToast } from '@/utils/toast';

const userStore = useUserStore();

const signOutClickHandle = async () => {
    await userStore.signOut();
    handleClickRouter({ path: paths.homeView });
    const close = showToast("登出成功");
    setTimeout(close, 2000);
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
