<script setup lang="ts">

import router from '@/Router';

import type { IRouter } from '@/Interface/IRouter';
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
    routerObj: IRouter
}>();

const handleClick = (routerObj: IRouter) => {
    // if (router.router.currentRoute.value.path !== routerObj.path) {

    // }
    router.router.push(routerObj as RouteLocationRaw);
}

</script>

<template>
    <div class="menu-item" @click="handleClick(props.routerObj)">
        <div class="menu-item-label">
            <slot></slot>
        </div>
    </div>

</template>

<style scoped>
.menu-item {
    display: inline-block;
    position: relative;
    text-align: center;
    color: #666666;
    cursor: pointer;
}

.menu-item:hover::after {
    content: "";
    position: absolute;
    background-color: var(--primary-bg-color);
    width: 100%;
    height: 4px;
    bottom: -4px;
    left: 0%;
}

.menu-item .menu-item-label {
    color: #666666;
}
</style>