<script setup lang="ts">


</script>

<template>
    <div class="cart-item-group">
        <div class="edit-btn">
            <slot name="edit-btn"></slot>
        </div>
        <div class="image">
            <slot name="image"></slot>
        </div>
        <div class="content">
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="variable-group">
                <div class="variable_item variation">
                    <slot name="variation"></slot>
                </div>
                <div class="variable_item product-quantity">
                    <slot name="product-quantity"></slot>
                </div>
                <div class="variable_item product_price font-weight-600">
                    <slot name="product_price"></slot>
                </div>
            </div>

        </div>
        <div class="remove-btn">
            <slot name="reomve-btn"></slot>
        </div>

    </div>
</template>

<style scoped>
.cart-item-group {
    display: flex;

    height: 150px;
    border: 1px var(--primary-text-color) solid;
    border-radius: 8px;
    background-color: var(--cart-item-bg-color);
    align-items: center;
    overflow: hidden;
    box-shadow: 1px 2px 1px #999999;
}

.cart-item-group .edit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 100%;
    padding: 0px 5px;
    background-color: var(--cart-item-bg-color);
    box-sizing: border-box;
}

.cart-item-group .image {
    height: 100%;
    padding: 20px 20px;
    text-align: center;
}

.cart-item-group .content {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}

.cart-item-group .content .title {
    width: auto;
    font-size: 20px;
    color: var(--cart-item-text-color);
    align-self: self-start;
    margin: 10px 10px 0px 0px;

    word-wrap: break-word;
}

.cart-item-group .content .variable-group {
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    padding-right: 30px;
    margin: 8px 0px;
}

.cart-item-group .content .variable-group .variable_item{
    display: flex;
    align-items: center;
    font-size: 14px;
}

/* .cart-item-group .content .variable-group .variation {
    
    
} */

.cart-item-group .content .variable-group .product-quantity {
    /* width: 147px; */
    height: 38px;
    border: 1px var(--variation-border-color) solid;
    margin: 0px 10px;
    border-radius: 4px;
    overflow: hidden;

    margin-left: auto;
}

.cart-item-group .content .variable-group .product_price{
    color: var(--purchase-btn-bg-color);
    
}

.cart-item-group .content .variable-group .product_price::before{
    content: "NT$";
}



.cart-item-group .remove-btn {
    display: flex;

    align-items: flex-end;
    justify-content: center;
    width: 60px;
    height: 100%;
    padding: 15px 5px;
    box-sizing: border-box;
    color: var(--cart-item-text-color);
}

.cart-item-group .remove-btn:hover{
    color: var(--remove-btn-bg-color);
}
</style>
