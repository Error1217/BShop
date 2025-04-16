<script setup lang="ts">
import BackendLayout from "@/components/BackendLayout.vue";
import BackendSideNavList from "@/components/BackendSideNavList.vue";
import type { ILink } from "@/Interface/ILink";

const navList = [
    {title: "首頁", router: {name: "BackendHomeBtn"}},
    {title: "商品管理", router: {name: "BackendProductBtn"}},
] as Array<ILink>


</script>

<template>
    <BackendLayout>

        <template #title>
            後台管理系統
        </template>

        <template #sideNavList>
            <BackendSideNavList :navList="navList"></BackendSideNavList>
        </template>

        <template #main>
            <RouterView v-slot="{ Component }">
                <KeepAlive>
                    <Component :is="Component"></Component>
                </KeepAlive>
            </RouterView>
        </template>
    </BackendLayout>

</template>

<style scoped></style>
