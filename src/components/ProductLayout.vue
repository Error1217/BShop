<script setup lang="ts">

</script>

<template>
     <div class="container">
        <header class="head">
            <slot name="head"></slot>
        </header>

        <div class="top">
            <slot name="breadcrumb"></slot>
        </div>
        <div class="mid">
            <div class="left">
                <div class="image">
                    <slot name="product-image"></slot>
                </div>
            </div>

            <div class="right">
                <slot name="product-describe"></slot>
            </div>
        </div>

        <div class="footer">
            <slot name="footer"></slot>
        </div>

    </div>


</template>

<style scoped>

.container .top {
    margin-bottom: 20px;
}

.container .mid {
    display: flex;
    justify-content: center;

    padding: 55px 55px;
}

.container .mid .left {
    padding: 32px;
    padding-top: 0px;
}

.container .mid .left .image{
    width: 500px;
}

.container .mid .right {
    width: 100%;
}

</style>
