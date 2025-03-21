<script setup lang="ts">

import { paths } from '@/router';

import NavMenuList from '@/components/NavMenuList.vue';
import NavMenuItem from '@/components/NavMenuItem.vue';

import AccountCircleIcon from '@/icons/AccountCircleIcon.vue';
import SearchIcon from '@/icons/SearchIcon.vue';
import ShoppingCartIcon from '@/icons/ShoppingCartIcon.vue';

import NavHeaderLayout from '@/components/NavHeaderLayout.vue';
import type { IRouter } from '@/Interface/IRouter';

import { useWindowStore } from '@/stores/useWindowStore';
import { handleClickRouter } from '@/common';


const menuList = [
    { id: 0, "name": "首頁", router: { path: paths.homeView } },
    { id: 1, "name": "所有商品", router: { path: paths.categoryView, query: { type: "products" } } },
    { id: 2, "name": "女裝", router: { path: paths.categoryView, query: { type: "woman" } } },
    { id: 3, "name": "鞋子", router: { path: paths.categoryView, query: { type: "shoes" } } },
]


const windowStore = useWindowStore();

const openLoginWindow = () => {
    windowStore.openWindow("modal");
    windowStore.openWindow("loginWindow");
}

const openShoppingCartWindow = () => {
    handleClickRouter({ path: paths.shoppingCartView })
};


</script>

<template>
    <NavHeaderLayout>
        <template #left></template>
        <template #title>BShop</template>
        <template #right>
            <NavMenuList :count="3">
                <template #item-0="{ item }">
                    <div class="icon-button" @click="openLoginWindow">
                        <AccountCircleIcon></AccountCircleIcon>
                    </div>

                </template>
                <template #item-1="{ item }">
                    <div class="icon-button" @click="openShoppingCartWindow">
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </div>
                </template>
                <template #item-2="{ item }">
                    <div class="icon-button">
                        <SearchIcon></SearchIcon>
                    </div>
                </template>
            </NavMenuList>
        </template>

        <template #bottom>
            <NavMenuList :items="menuList">
                <template #default="{ item }">
                    <NavMenuItem :routerObj="item.router as IRouter">{{ item.name }}</NavMenuItem>
                </template>
            </NavMenuList>
        </template>
    </NavHeaderLayout>
</template>

<style scoped>
.icon-button {
    display: inline-block;
    color: var(--header-text-color);
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.icon-button:hover {
    color: var(--hover-color);
}
</style>
