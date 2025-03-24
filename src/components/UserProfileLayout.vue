<script setup lang="ts">
import UserProfileBoxLayout from './UserProfileBoxLayout.vue';
</script>

<template>


    <div class="container">
        <div class="item left">
            <slot name="left"></slot>
        </div>
        <div class="item right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    gap: 10px;
    height: auto;
}

/* .container .left{
    width: 100%;
    height: 100%;
}

.container .right{
    width: 100%;
} */

.container .item{
    width: 100%;
}

</style>
