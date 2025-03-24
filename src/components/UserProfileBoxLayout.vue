<script setup lang="ts">

defineProps({
    count:{
        type: Number
    }
})

</script>

<template>
    <div class="container">
        <div class="title font-weight-600">
            <slot name="title"></slot>
        </div>
        <div class="user-profile-guoup">
            <div class="user-profille-item" v-for="(item, index) in count" :key="index">
                <span class="label item">
                    <slot :name="`label-${index}`"></slot>
                </span>
                <span class="info item">
                    <slot :name="`info-${index}`"></slot>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    padding: 20px;
    position: relative;
}

.container .title{
    padding: 0px 2px;
    background-color: var(--body-bg-color);
    margin-bottom: 20px;
    position: absolute;
    top:12px;
    left: 60px;
    z-index: 10;
}

.container .user-profile-guoup{
    width: 100%;
    border: 1px var(--user-header-border-color) solid;
    padding: 20px;
    border-radius: 8px;
}

.container .user-profile-guoup .user-profille-item{
    display: flex;
    padding: 20px;
    margin: 3px 0px;
    border-bottom: 1px var(--primary-text-color) solid;
}

.container .user-profile-guoup .user-profille-item .item{
    font-size: 16px;
    color: var(--primary-text-color);

}

.container .user-profile-guoup .user-profille-item .label{
    flex: 1;
}

.container .user-profile-guoup .user-profille-item .info{
    flex: 3;
}

</style>
