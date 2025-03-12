<script setup lang="ts">

import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';

</script>

<template>
    
    <div class="breadcrumb">
        <div class="contents">
            <a href="" class="label">首頁</a>

            <div class="arrow-right">
                <ArrowRightIcon :height="`100%`" :width="`100%`"></ArrowRightIcon>
            </div>
            
            <a href="" class="label current">全部商品</a>
        </div>
    </div>

</template>


<style scoped>

.breadcrumb {
    background-color: #CCCCCC33
}

.breadcrumb .contents{
    display: flex;
    align-items: center;

    font-size: 12px;
    line-height: 12px;
    padding: 10px 32px;
    box-sizing: border-box;

    color: var(--primary-bg-color);
}

.breadcrumb .contents a:visited{
    color: inherit;
}

.breadcrumb .contents .current:visited{
    color: #676565;
}



.breadcrumb .contents .arrow-right{
    width: 24px;
    height: 16px;
    text-align: center;
    color: #676565;
}

</style>
