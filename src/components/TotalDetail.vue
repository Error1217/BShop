<script setup lang="ts">

const props = defineProps({
    total_price: {
        type: Number,
        requured: true
    }
})



</script>

<template>
    <div class="total-detail">
        <div class="title font-weight-600">結帳明細</div>
        <div class="line"></div>
        <div class="total row">
            <div class="subtotal-title">
                商品總金額
            </div>
            <div class="price font-weight-600">
                {{ props.total_price }}
            </div>
        </div>
        <div class="line"></div>
        <div class="total-group row">
            <div class="total">
                <div class="total-title font-weight-600">
                    結帳金額
                </div>
                <div class="price font-weight-600">
                    {{ props.total_price }}
                </div>
            </div>
            <button type="button">結帳</button>
        </div>


    </div>
</template>

<style scoped>
.total-detail {
    position: sticky;
    top: 100px;
    width: 100%;
    background-color: var(--cart-item-bg-color);
    box-shadow: 1px 2px 1px #999999;
    border-radius: 8px;
    border: 1px var(--primary-text-color) solid;
}

.total-detail .title {
    font-size: 22px;
    padding: 20px;
}

.total-detail .row {
    width: 100%;
    font-size: 16px;
    padding: 20px;
}

.total-detail .total {
    display: flex;
    justify-content: space-between;
}

.total-detail .price::before {
    content: "NT$ ";
}

.total-detail .total-group .total .price {
    color: var(--purchase-btn-bg-color);
}


.total-detail button {
    margin-top: 15px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: var(--purchase-btn-bg-color);
    color: var(--btn-text-color);
}
</style>