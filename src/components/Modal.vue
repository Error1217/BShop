<script setup lang="ts">

import { useWindowStore } from '@/stores/useWindowStore';

const windowStore = useWindowStore();

</script>

<template>
    <div class="modal">
        <slot></slot>
    </div>


</template>

<style scoped>
.modal {
    position: fixed;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    left: 0;
    top: 0;
    z-index: 9999;
}
</style>
