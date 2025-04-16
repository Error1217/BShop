<script setup lang="ts">
import { handleClickRouter } from '@/common';
import { useUserStore } from '@/stores/useUserStore';
import { ref } from 'vue';

const userStore = useUserStore();

const navBarList = [
    {title:"個人資料", router: { name: "UserProfileBtn", params: {id: userStore.user?.id}}},
    {title: "收藏", router: { name: "UserFavoriteListBtn", params: {id: userStore.user?.id}}},
    {title: "訂單資訊", router: { name: "UserFavoriteListBtn", params: {id: userStore.user?.id}}}
]

const activeIndex = ref(0);

const select = (index: number) => {
    activeIndex.value = index;
    handleClickRouter(navBarList[index].router);
};

</script>

<template>
    <div class="user-nav-bar-bg">
        <div class="user-nav-bar-list">
            <div v-for="(item, index) in navBarList" class="user-nav-bar-item" :key="index"
                :class="{ 'active': (activeIndex == index) }" 
                @click="select(index)">{{ item.title }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-nav-bar-bg {
    width: 100%;
    height: 60px;
    background-color: var(--body-bg-color);
    opacity: 100%;

    box-shadow: 0px 0px 1px var(--header-box-shadow-color);
    padding: 0px 60px;
    margin-bottom: 30px;
}

.user-nav-bar-bg .user-nav-bar-list {
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 100%;
    position: relative;
}

.user-nav-bar-bg .user-nav-bar-list .user-nav-bar-item {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    transition: .1s;
}

.user-nav-bar-bg .user-nav-bar-list .user-nav-bar-item:hover {
    color: var(--btn-bg-color);
}

.user-nav-bar-bg .user-nav-bar-list .user-nav-bar-item.active {
    color: var(--btn-bg-color);
    border-bottom: 3px var(--btn-bg-color) solid;
}

</style>
