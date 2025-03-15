<script setup lang="ts">

import { handleClickRouter } from '@/common';
import type { IRouter } from '@/Interface/IRouter';

const props = defineProps<{
    routerObj: IRouter
}>();


</script>

<template>
    <div class="menu-item" @click="handleClickRouter(props.routerObj)">
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
    cursor: pointer;
}

.menu-item:hover::after {
    content: "";
    position: absolute;
    background-color: var(--hover-color);
    width: 100%;
    height: 4px;
    bottom: -4px;
    left: 0%;
}

.menu-item .menu-item-label {
    color: var(--header-text-color);
}
</style>