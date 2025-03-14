<script setup lang="ts">

import ArrowDownIcon from '@/icons/ArrowDownIcon.vue';

</script>

<template>

    <div class="product-list-info">
        <h1 class="label font-weight-600">全部商品</h1>
        <div class="product-list-select">
            <div class="select-sort">
                <span class="font-weight-600">商品排序</span>
                <ArrowDownIcon color="var(--primary-text-color)" width="12px" height="12px"></ArrowDownIcon>
            </div>
            <div class="select-limit font-weight-600">
                <span class="font-weight-600">每頁顯示 48 個</span>
                <ArrowDownIcon color="var(--primary-text-color)" width="12px" height="12px"></ArrowDownIcon>
            </div>
        </div>
        
    </div>

</template>

<style scoped>
.product-list-info{
    display: flex;
    padding: 0px 15px;
    margin-bottom: 8px;
    justify-content: space-between;

}

.product-list-info .label{
    padding-bottom: 25px;
    font-size: 15px;
    color: var(--primary-text-color);
}

.product-list-info .product-list-select{
    display: flex;
    gap: 15px;
}

.product-list-info .product-list-select span{
    font-size: 12px;
    color: var(--primary-text-color);
    margin-right: 6px;
}

.product-list-info .product-list-select .select-sort,
.product-list-info .product-list-select .select-limit{
    display: flex;
    justify-content: center;
}


</style>
