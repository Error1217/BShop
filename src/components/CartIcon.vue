<script setup lang="ts">

import ShoppingCartIcon from '@/icons/ShoppingCartIcon.vue';



</script>


<template>
    <div class="container">
        <ShoppingCartIcon></ShoppingCartIcon>
        <div class="quantity-bg">
            <div class="quantity font-weight-600">
                1
            </div>
        </div>
        
    </div>

</template>

<style scoped>
.container {
    position: relative;
}

.container .quantity-bg{
    display: flex;
    position: absolute;
    right: -6px;
    top: -6px;
    color: var(--btn-text-hover-color);
    background-color: var(--btn-bg-hover-color);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-size: 12px;

    justify-content: center;
    align-items: center;
}


</style>
