<script setup lang="ts">

import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';

import type { IItem } from '@/Interface/IItem';
import { computed, ref } from 'vue';

const props = defineProps<{
    item: IItem
}>();

const quantity = ref(1);
const selectedIndex = ref({
    color:0,
    size: 0
});

const variationSelectlabel = {
    color: {
        title: "顏色",
        type: ["知性深灰色", "溫柔杏色"]
    },
    size: {
        title: "尺寸",
        type: ["XL", "L"]
    },
};

const quantityPlus = () => {
    quantity.value++;
};

const quantityMinus = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const selectVariation = (variation: keyof typeof variationSelectlabel, index: number) => {
    selectedIndex.value[variation] = index;
};


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
            <div v-for="(variation, variationIndex) in (variationSelectlabel)" class="variation">
                <div class="variation-title font-weight-600">
                    {{ `${variation.title}：` }}
                    <span class="font-weight-600">{{ variationSelectlabel[variationIndex].type[selectedIndex[variationIndex]] }}</span>
                </div>
                <div class="variation-select-box">
                    <div v-for="(item, index) in variation.type" :key="index" class="variation-select-label"
                        :class="{ 'active': (selectedIndex[variationIndex] == index) }" @click="selectVariation(variationIndex, index)">
                        {{ item }}
                    </div>
                    <!-- <div class="variation-select-label active">溫柔杏色</div> -->
                </div>
            </div>
            <div class="product-quantity">
                <div class="input-group">
                    <div class="input-group-btn">
                        <button type="button" class="minus font-weight-600" @click="quantityMinus">-
                        </button>
                    </div>
                    <input type="text" class="font-weight-600" name="" id="" v-model.number="quantity">
                    <div class="input-group-btn">
                        <button type="button" class="plus font-weight-600" @click="quantityPlus">+
                        </button>
                    </div>
                </div>
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
    background-color: var(--primary-bg-color);
    color: var(--primary-text-color);
    cursor: pointer;
}

.product-describe .product-action .button-container .btn-purchase-action:hover{
    background-color: #F3EEEA;
}

</style>
