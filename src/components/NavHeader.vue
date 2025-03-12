<script setup lang="ts">

import NavMenuList from '@/components/NavMenuList.vue';
import NavMenuItem from '@/components/NavMenuItem.vue';

import AccountCircleIcon from '@/icons/AccountCircleIcon.vue';
import SearchIcon from '@/icons/SearchIcon.vue';
import ShoppingCartIcon from '@/icons/ShoppingCartIcon.vue';

import NavHeaderLayout from '@/components/NavHeaderLayout.vue';

const menuList = [
    { id: 0, "name": "首頁" },
    { id: 1, "name": "所有商品" },
    { id: 2, "name": "女裝" },
    { id: 3, "name": "鞋子" },
]

</script>

<template>
        <NavHeaderLayout>
            <template #left></template>
            <template #title>BShop</template>
            <template #right>
                <NavMenuList :count="3">
                    <template #item-0="{ item }">
                        <a class="icon-button" href="">
                            <AccountCircleIcon></AccountCircleIcon>
                        </a>

                    </template>
                    <template #item-1="{ item }">
                        <a class="icon-button" href="">
                            <ShoppingCartIcon></ShoppingCartIcon>
                        </a>
                    </template>
                    <template #item-2="{ item }">
                        <a class="icon-button" href="">
                            <SearchIcon></SearchIcon>
                        </a>
                    </template>
                </NavMenuList>
            </template>

            <template #bottom>
                <NavMenuList :items="menuList">
                    <template #default="{ item }">
                        <NavMenuItem>{{ item.name }}</NavMenuItem>
                    </template>
                </NavMenuList>
            </template>
        </NavHeaderLayout>
</template>

<style scoped>



.icon-button {
    display: inline-block;
    color: black;
    width: 100%;
    height: 100%;

}

.icon-button:hover {
    color: #baa799;
}
</style>
