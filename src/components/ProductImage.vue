<script setup lang="ts">

import type { IItem } from '@/Interface/IItem';

const props = defineProps<{
    item: IItem;
}>();

</script>

<template>

<div v-if="props.item" class="box">
    <div v-if="props.item.label !== ' '" class="label-bg">
        <div class="label-content ">
            {{ props.item.label }}
        </div>
    </div>
    <div class="img">
        <img :src="props.item.image_url" alt="">
    </div>

</div>
</template>

<style scoped>

.box{
    height: 100%;
    width: 100%;
    font-size: 0px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.box .label-bg{
    top: 0;
    left: 0;
    padding: 4px 16px;
    font-size: 10px;
    background-color: var(--label-color);

    position: absolute;
    z-index: 10;
}

.box .label-bg .label-content{
    color: var(--primary-text-color);
}

.box .img{
    width: 100%;
    height: 100%;
}

.box .img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>
