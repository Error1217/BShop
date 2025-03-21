<script setup lang="ts">


</script>

<template>
    <div class="container">
        <div class="left">
            <div class="top">
                <h3 class="title">
                    <slot name="title"></slot>
                </h3>
            </div>
            <div class="line"></div>
            <div class="mid">
                <div class="cart-list">
                    <slot name="cart-item"></slot>
                </div>
            </div>
        </div>
        <div class="right">
            <slot name="total-detail"></slot>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    padding: 30px 100px;
    gap: 30px;
}

.container .left {
    flex: 3;
}

.container .right {
    flex: 1;
}

.container .left .top .title {
    font-size: 40px;
    color: var(--primary-text-color);
}

.container .left .mid {
    margin-top: 10px;
    /* background-color: aqua; */
}

.container .left .mid .cart-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;

}

.container .right .total-info {
    background-color: antiquewhite;
}
</style>