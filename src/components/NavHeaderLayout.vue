<script setup lang="ts">

</script>

<template>
    <div class="section-full-width">
        <div class="container">
            <div class="top">
                <div class="left">
                    <slot name="left"></slot>
                </div>
                <h1 class="center title">
                    <slot name="title"></slot>
                </h1>
                <div class="right">
                    <div class="menu-list">
                        <slot name="right"></slot>
                    </div>
                </div>
            </div>

            <div class="bottom">
                <slot name="bottom"></slot>
            </div>
        </div>
    </div>


</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 96px;
    padding: 0px 24px;
    box-sizing: border-box;
    background-color: hsla(var(--header-bg-h), var(--header-bg-s), var(--header-bg-l), 1);
    box-shadow: 0px 0px 3px var(--header-box-shadow-color);
}

.container .top {
    display: flex;
    flex-direction: row;
    height: 70%;

}

.container .top .left {
    display: flex;
    align-items: center;
    width: 500px;
    /* background-color: red; */
    flex: 1;
}

.container .top .center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    font-size: 26px;
    flex: 1;
}

.container .top .title {
    color: var(--logo-color);
}

.container .top .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 500px;
    /* background-color: blue; */
    flex: 1;
}

.container .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
    /* background-color: aqua; */
}
</style>
