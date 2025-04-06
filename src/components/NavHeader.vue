<script setup lang="ts">

import { paths } from '@/Router';

import NavMenuList from '@/components/NavMenuList.vue';
import NavMenuItem from '@/components/NavMenuItem.vue';

import AccountCircleIcon from '@/icons/AccountCircleIcon.vue';
import SearchIcon from '@/icons/SearchIcon.vue';
import CartIcon from './CartIcon.vue';
import SignOutBtn from './SignOutBtn.vue';

import NavHeaderLayout from '@/components/NavHeaderLayout.vue';
import type { IRouter } from '@/Interface/IRouter';
import { handleClickRouter } from '@/common';
import { useWindowStore } from '@/stores/useWindowStore';
import { useUserStore } from '@/stores/useUserStore';


const menuList = [
    { title: "首頁", router: { path: paths.homeView } },
    { title: "所有商品", router: { path: paths.categoryView, query: { type: "products" } } },
    { title: "女裝", router: { path: paths.categoryView, query: { type: "woman" } } },
    { title: "鞋子", router: { path: paths.categoryView, query: { type: "shoes" } } },
]


const windowStore = useWindowStore();
const userStore = useUserStore();

const openLoginWindow = () => {
    windowStore.openWindow("modal");
    windowStore.openWindow("loginWindow");
}

const openUserWindow = () =>{
    if(!userStore.user){
        openLoginWindow();
    }else{
        handleClickRouter({ name: "UserView", params: {id: userStore.user.id}});
    }
}

const openShoppingCartWindow = () => {
    if(!userStore.user){
        openLoginWindow();
    }else{
        handleClickRouter({ path: paths.shoppingCartView });
    }
    
};


</script>

<template>
    <NavHeaderLayout>
        <template #left></template>
        <template #title>BShop</template>
        <template #right>
            <NavMenuList :count="4">
                <template #item-0="{ item }">
                    <div class="icon-button" @click="openUserWindow">
                        <AccountCircleIcon></AccountCircleIcon>
                    </div>

                </template>
                <template #item-1="{ item }">
                    <div class="icon-button" @click="openShoppingCartWindow">
                        <CartIcon></CartIcon>
                    </div>
                </template>
                <template #item-2="{ item }">
                    <div class="icon-button">
                        <SearchIcon></SearchIcon>
                    </div>
                </template>
                <template #item-3="{ item }">
                    <div class="icon-button">
                        <SignOutBtn></SignOutBtn>
                    </div>
                </template>
            </NavMenuList>
        </template>

        <template #bottom>
            <NavMenuList :items="menuList">
                <template #default="{ item }">
                    <NavMenuItem :routerObj="item.router as IRouter">{{ item.title }}</NavMenuItem>
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
