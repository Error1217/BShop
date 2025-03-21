<script setup lang="ts">
import { ref } from 'vue';


const quantity = ref(1);

const quantityPlus = () => {
    quantity.value++;
};

const quantityMinus = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

</script>

<template>
    <div class="input-group">
        <div class="input-group-btn">
            <button type="button" class="minus font-weight-600" @click="quantityMinus">-
            </button>
        </div>
        <input type="text" class="font-weight-600" name="" id="" v-model.number="quantity" >
        <div class="input-group-btn">
            <button type="button" class="plus font-weight-600" @click="quantityPlus">+
            </button>
        </div>
    </div>
</template>

<style scoped>

.input-group {
    display: inline-table;
    width: 147px;
    height: 100%;

}

.input-group .input-group-btn {
    display: table-cell;
    width: 34px;
    height: 100%;

}

.input-group .input-group-btn button {
    background-color: transparent;
    padding: 6px 12px;
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    color: var(--cart-item-text-color);
}

.input-group .input-group-btn button:hover {
    color: var(--btn-bg-color);
}

.input-group input {
    width: 100%;
    height: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    color: var(--cart-item-text-color);
}

.input-group .input-group-btn button:disabled,
.input-group input:disabled{
    background-color: var(--disabled-bg-color);
    color: var(--disabled-text-color);
}


</style>
