<script setup lang="ts">

const props = defineProps<{
    msg: String
}>()

// 設計提示彈窗
</script>

<template>

    <div class="container">
        <div class="content">
            <div class="text">
                {{ props.msg }}
            </div>
        </div>
    </div>

</template>

<style scoped>
.container {
    display: inline-block;

    background-color: var(--btn-bg-color);
    color: var(--btn-text-color);
    padding: 8px 16px 8px 16px;
    border-radius: 8px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);



    z-index: 9999;    
}
</style>
