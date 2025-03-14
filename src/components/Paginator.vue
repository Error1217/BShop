<script setup lang="ts">

import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';

</script>

<template>

    <ul class="paginator">
        <li class="paginator-button hidden">
            <a href="" class="font-weight-600">
                <ArrowLeftIcon></ArrowLeftIcon>
            </a>
        </li>
        <li class="paginator-button active">
            <a href="" class="font-weight-600">1</a>
        </li>
        <li class="paginator-button ">
            <a href="" class="font-weight-600">2</a>
        </li>
        <li class="paginator-button ">
            <a href="" class="font-weight-600">3</a>
        </li>
        <li class="paginator-button ">
            <a href="" class="font-weight-600">
                <ArrowRightIcon></ArrowRightIcon>
            </a>
        </li>
       
    </ul>

</template>

<style scoped>

.paginator {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.paginator .paginator-button{
    display: flex;
    width: 32px;
    height: 32px;
    color: var(--primary-text-color);
    align-items: center;
    justify-content: center;
}
.paginator .paginator-button>a{
    color: var(--primary-text-color);
}

.paginator .paginator-button:last-child{
    margin-right: 0px;
}

.paginator .paginator-button.active{
    background-color: var(--primary-bg-color);
}

.paginator .paginator-button.active a{
    color: var(--primary-text-color);
}


.paginator .paginator-button a{
    display: flex;
    font-size: 14px;
    line-height: 32px;

    justify-content: center;
    
}

.hidden{
    visibility: hidden;
}

</style>
