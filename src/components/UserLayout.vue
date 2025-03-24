<script setup lang="ts">
import UserBanner from "@/assets/userItem/user-banner.png"
import UserIcon from "@/assets/userItem/user-icon.png"
</script>

<template>
    <div class="container">
        <div class="user-header">
            <img :src="UserBanner" alt="">

            <div class="user-header-info">
                <div class="user-icon">
                    <img :src="UserIcon" alt="">
                </div>
                <div class="user-name">MinatoMio</div>
                <button type="button" class="edit-btn">編輯個人資料</button>
            </div>
        </div>
        <div class="user-nav-bar">
            <slot name="user-nav-bar"></slot>
        </div>
        <div class="user-info-group">
            <slot name="user-info-group"></slot>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
}

.container .user-header {
    display: flex;
    width: 100%;
    height: 240px;
    box-shadow: 0px 0px 3px var(--header-box-shadow-color);
    position: relative;
    overflow: hidden;
}

.container .user-header>img {
    display: flex;
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

}

.container .user-header .user-header-info {
    display: flex;
    width: 100%;
    /* background-color: rgb(231, 58, 58); */
    align-self: flex-end;
    padding: 0px 60px 22px 60px;
    z-index: 10;
}

.container .user-header .user-header-info .user-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: blue;
    margin-right: 22px;
    border: 2px var(--user-header-border-color) solid;
    box-sizing: border-box;
    overflow: hidden;
}

.container .user-header .user-header-info .user-icon>img {
    width: 100%;
    height: 100%;
}

.container .user-header .user-header-info .user-name {
    padding: 10px 0px;
    font-size: 24px;
    color: var(--user-header-text-color);
}

.container .user-header .user-header-info .edit-btn {
    width: 120px;
    height: 30px;
    border: 1px rgba(255, 255, 255, 0.54) solid;
    color: var(--user-header-text-color);
    background-color: rgba(255, 255, 255, 0.14);
    margin-left: auto;
    border-radius: 8px;
    align-self: center;
    cursor: pointer;
    transition: 0.4s;
}

.container .user-header .user-header-info .edit-btn:hover {
    background-color: rgba(255, 255, 255, 0.54);
}

.container .user-nav-bar {
    position: sticky;
    top: 96px;
    z-index: 100;
}

.container .user-info-group {
    padding: 0px 60px;
}
</style>
