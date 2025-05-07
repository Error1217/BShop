<script setup lang="ts">

import QuantitySelector from './QuantitySelector.vue';
import VariationSelector from './VariationSelector.vue';

import type { IItem } from '@/Interface/IItem';
import { useUserStore } from '@/stores/useUserStore';
import { useWindowStore } from '@/stores/useWindowStore';
import { computed, ref } from 'vue';
import { setCartItem, getSku } from '@/lib/supabaseClient';
import type { UUID } from 'crypto';
import type { ICartItem } from '@/Interface/ICartItem';

import { showLogin } from '@/utils/login';

const props = defineProps<{
    item: IItem,
    variants: any[]
}>();

const size = props.variants.map((item) => {
    return item.size;
})

const userStore = useUserStore();

const openLoginWindow = () => {
    showLogin();
}


const product_size = ref(props.variants[0].size);
// const product_quantity = ref(1);
const product_price = ref(props.variants[0].price);


const price = computed(() => {
    if (!product_size.value) {
        return props.variants[0].price;
    }

    for (let index = 0; index < props.variants.length; index++) {
        const element = props.variants[index];

        if (element.size === product_size.value) {
            product_price.value = element.price;
            return element.price;
        }
        
    }
    return props.variants[0].price;
});


const addItem = async () => {
    const user = userStore.user;

    if (user) {
        //商品加入購物車
        const sku = await getSku(props.item.id as UUID, product_size.value || props.variants[0].size);
        // console.log(sku);
        if (sku !== undefined) {
            setCartItem(user.id as UUID, {
                sku: sku,
                userId: user.id,
                name: props.item.name,
                price: product_price.value,
                quantity: 1,
                size: product_size.value,
                image_url: props.item.image_url
            } as ICartItem);
        }



    } else {
        openLoginWindow();
    }

}

const buyItem = ()=>{
    const user = userStore.user;

    if(user){

    }else{
        openLoginWindow();
    }


}

const getSize = (size: string) => {
    product_size.value = size;
}

</script>

<template>
    <div class="product-describe">
        <div v-if="item" class="product-title">{{ props.item.name }}</div>
        <pre v-if="item" class="product-summary" v-html="item.summary"></pre>
        <hr>
        <div class="product-promotions">
            <p class="product-promotions-tag">
                全店，滿2000享超商&宅配免運
            </p>
        </div>
        <div class="product-action">
            <div class="product-price font-weight-600">
                {{ price }}
            </div>
            <!-- <VariationSelector title="顏色" :content="[`知性深灰色`,`溫柔杏色`]"></VariationSelector> -->
            <VariationSelector @size="getSize" title="尺寸" :content="size"></VariationSelector>

            <div class="product-quantity">
                <!-- <QuantitySelector></QuantitySelector> -->
            </div>
            <div class="button-container">
                <button type="button" class="btn-purchase-action" @click="addItem">加入購物車</button>
                <button type="button" class="btn-purchase-action" @click="buyItem">直接購買</button>
            </div>
        </div>
    </div>



</template>

<style scoped>
.product-describe .product-title {
    font-size: 26px;
    margin-bottom: 16px;
    color: var(--primary-text-color);
}

.product-describe .product-summary {
    font-size: 14px;
    line-height: 1.5;
    color: var(--primary-text-color);
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
    color: var(--primary-text-color);
}

.product-describe .product-action .product-price::before{
    content: "NT$";
}

.product-describe .product-action .product-price {
    margin-bottom: 21px;
    font-size: 16px;
    color: var(--primary-text-color);
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
    color: var(--primary-text-color);
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

.product-describe .product-action .button-container {
    display: flex;
    gap: 8px;

}

.product-describe .product-action .button-container .btn-purchase-action {
    flex-grow: 1;
    height: 47px;
    border: none;
    background-color: var(--btn-bg-color);
    color: var(--btn-text-color);
    cursor: pointer;
}

.product-describe .product-action .button-container .btn-purchase-action:hover {
    background-color: var(--btn-bg-hover-color);
}
</style>
