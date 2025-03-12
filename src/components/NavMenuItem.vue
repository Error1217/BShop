<script setup lang="ts">

</script>

<template>
<div class="menu-item">
    <a class="menu-item-label" href="">
        <slot></slot>
    </a>
</div>

</template>

<style scoped>
.menu-item{
    display: inline-block;
    position: relative;
    text-align: center;
    color: #666666;
}

.menu-item:hover::after{
    content: "";
    position: absolute;
    background-color: var(--primary-bg-color);
    width: 100%;
    height: 4px;
    bottom: -4px;
    left: 0%;
}

.menu-item .menu-item-label{
    color: #666666;
}

</style>