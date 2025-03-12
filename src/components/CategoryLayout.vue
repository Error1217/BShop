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
                <slot name="aside"></slot>
            </div>

            <div class="right">
                <slot name="main"></slot>
            </div>
        </div>

        <div class="footer">
            <slot name="footer"></slot>
        </div>

    </div>


</template>


<style scoped>

.container .top{
    margin-bottom: 20px;
    margin-top: 0px;
}

.container .mid{
    display: flex;

    padding: 32px 32px 10px 32px;

}

.container .mid .left{
    margin-right: 60px;
    box-sizing: border-box;
    flex-grow: 1;
}

.container .mid .right{
    flex-grow: 4;
}

</style>
