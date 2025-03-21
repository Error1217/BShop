<script setup lang="ts">

import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';
import QuantitySelector from './QuantitySelector.vue';
import VariationSelector from './VariationSelector.vue';

import type { IItem } from '@/Interface/IItem';
import { computed, ref } from 'vue';

const props = defineProps<{
    item: IItem
}>();


</script>

<template>
    <div class="product-describe">
        <div class="product-title">{{ props.item.name }}</div>
        <p class="product-summary" v-html="item.summary"></p>
        <hr>
        <div class="product-promotions">
            <p class="product-promotions-tag">
                全店，滿2000享超商&宅配免運
            </p>
        </div>
        <div class="product-action">
            <div class="product-price font-weight-600">
                NT$2890
            </div>
            <VariationSelector title="顏色" :content="[`知性深灰色`,`溫柔杏色`]"></VariationSelector>
            <VariationSelector title="尺寸" :content="[`L`,`XL`]"></VariationSelector>
            
            <div class="product-quantity">
                <QuantitySelector></QuantitySelector>
            </div>
            <div class="button-container">
                <button type="button" class="btn-purchase-action">加入購物車</button>
                <button type="button" class="btn-purchase-action">直接購買</button>
            </div>
        </div>
    </div>



</template>

<style scoped>
.product-describe .product-title {
    font-size: 26px;
    margin-bottom: 16px;
    color: var(--label-color);
}

.product-describe .product-summary {
    font-size: 14px;
    line-height: 1.5;
    color: var(--label-color);
    padding-bottom: 14px;
    box-sizing: border-box;

}

.product-describe hr {
    margin-bottom: 20px;
    border: 0;
    border-top: 1px #eeeeee solid;
    box-sizing: border-box;
}

.product-describe .product-promotions {
    margin-bottom: 24px;
    background-color: rgba(204, 204, 204, 0.2);

}

.product-describe .product-promotions .product-promotions-tag {
    padding: 8px 12px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.5;
    border-left: 2px var(--primary-bg-color) solid;
    color: var(--label-color);
}

.product-describe .product-action .product-price {
    margin-bottom: 21px;
    font-size: 16px;
    color: var(--label-color);
    line-height: 1.5;
}

.product-describe .product-action .variation .variation-title {
    font-size: 12px;
    color: #9A9898;
}

.product-describe .product-action .variation .variation-select-box {
    display: flex;
    gap: 8px;
}

.product-describe .product-action .variation .variation-select-box .variation-select-label {
    display: inline-block;
    margin: 8px 0px;
    padding: 8px 10px;
    border: 1px rgba(204, 204, 204, 0.5) solid;
    border-radius: 4px;
    font-size: 14px;
    color: var(--label-color);
    box-sizing: border-box;
    cursor: pointer;

    transition: 0.2s;
}

.product-describe .product-action .variation .variation-select-box .variation-select-label.active,
.product-describe .product-action .variation .variation-select-box .variation-select-label:hover {
    border-color: var(--primary-bg-color);
    color: var(--primary-bg-color);
}

.product-describe .product-action .product-quantity {
    margin-bottom: 8px;
    height: 38px;
    text-align: center;
}

.product-describe .product-action .product-quantity .input-group {
    display: inline-table;
    width: 147px;
    height: 100%;

}

.product-describe .product-action .product-quantity .input-group .input-group-btn {
    display: table-cell;
    width: 34px;
    height: 100%;

}

.product-describe .product-action .product-quantity .input-group .input-group-btn button {
    background-color: transparent;
    padding: 6px 12px;
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    color: var(--label-color);
}

.product-describe .product-action .product-quantity .input-group .input-group-btn button:hover {
    color: var(--primary-bg-color);
}

.product-describe .product-action .product-quantity .input-group input {
    width: 100%;
    height: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
}

.product-describe .product-action .button-container{
    display: flex;
    gap: 8px;

}

.product-describe .product-action .button-container .btn-purchase-action{
    flex-grow: 1;
    height: 47px;
    border: none;
    background-color: var(--btn-bg-color);
    color: var(--btn-text-color);
    cursor: pointer;
}

.product-describe .product-action .button-container .btn-purchase-action:hover{
    background-color: var(--btn-bg-hover-color);
}

</style>
