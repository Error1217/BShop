<script setup lang="ts">
import Modal from './Modal.vue';
import CloseIcon from '@/icons/CloseIcon.vue';
import { useUserStore } from '@/stores/useUserStore';
import { ref } from 'vue';
import { handleClickRouter } from '@/common';
import { paths } from '@/router/index';

import { showToast } from '@/utils/toast';

const props = defineProps<{
    onClose: Function
}>()

//更新彈窗事件
const closeHandle = () => {
    props.onClose?.();
}


const userStore = useUserStore();

const email = ref<string>("");
const passward = ref<string>("");

const signUpClickHandle = async () => {
    const state = await userStore.signUp(email.value, passward.value);

    switch (state) {
        case userStore.SignUpState.EXIST:
            showToast("帳號已存在");
            break;
        case userStore.SignUpState.FAIL:
            showToast("註冊失敗");
            break;
        case userStore.SignUpState.SUCCESS:
            closeHandle();
            showToast("註冊成功");
        default:
            break;
    }
}

const signInClickHandle = async () => {
    const success = await userStore.signIn(email.value, passward.value);
    if (success) {
        closeHandle();
        showToast("登入成功");
    }
    else {
        showToast("登入失敗");
    }

}


</script>

<template>
    <Modal>
        <div class="container">
            <div class="title"> 登入/註冊</div>
            <div class="main">
                <div class="tab-form">
                    <div class="form-item login-id">
                        <div class="form-info">帳號</div>
                        <input type="email" name="" id="email" placeholder="請輸入電子信箱" v-model="email" autocomplete="off">
                    </div>
                    <div class="line"></div>
                    <div class="form-item login-password">
                        <div class="form-info">密碼</div>
                        <input type="password" name="" id="pwd" placeholder="請輸入密碼" v-model="passward"
                            autocomplete="off">
                    </div>
                </div>

                <div class="btn-group">
                    <button class="btn-item" @click="signUpClickHandle" autocomplete="off">註冊</button>
                    <button class="btn-item" @click="signInClickHandle" autocomplete="off">登入</button>
                </div>
                <div class="forget-password">忘記密碼？</div>
                <div class="line"></div>
                <div class="google-login">google</div>
            </div>
            <div class="close-btn" @click="closeHandle">
                <CloseIcon></CloseIcon>
            </div>
        </div>
    </Modal>

</template>

<style scoped>
.container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    background-color: var(--body-bg-color);
    width: 460px;
    height: 480px;
    border-radius: 20px;

    text-align: center;

    padding: 30px 50px;
    box-sizing: border-box;
}

.container .title {
    font-size: 24px;
    width: 100%;
    margin-bottom: 10px;
    color: var(--primary-text-color);
}

.container .main {
    margin: 0 auto;
    /* background-color: aqua; */
    padding: 20px 0px;
    box-sizing: border-box;
}

.container .main .tab-form {
    width: 100%;
    border-radius: 8px;
    border: 1px var(--placeholder-color) solid;
}

.container .main .tab-form .form-item {
    display: flex;
    padding: 12px 20px;
    box-sizing: border-box;
    align-items: center;
}

.container .main .tab-form .form-item .form-info {
    color: var(--primary-text-color);
}

.container .main .tab-form .form-item input[type=email],
.container .main .tab-form .form-item input[type=password] {
    flex-grow: 1;
    margin-left: 20px;
    background-color: transparent;
    border: 0px;
    color: var(--primary-text-color);
}

.container .main .tab-form .form-item input[type=email]::placeholder,
.container .main .tab-form .form-item input[type=password]::placeholder {
    color: var(--placeholder-color);
}

.container .main .btn-group {
    display: flex;
    margin: 20px 0px;
    gap: 10px;
}

.container .main .btn-group .btn-item {
    flex-grow: 1;
    font-size: 14px;
    line-height: 40px;
    border-radius: 8px;
    border: 0px;
    padding: 0px;
    cursor: pointer;
    background-color: var(--btn-bg-color);
    color: var(--btn-text-color);
}

.container .main .btn-group .btn-item:hover {
    background-color: var(--btn-bg-hover-color);
    color: var(--btn-text-hover-color);
}

.container .main .forget-password {
    display: flex;
    justify-content: flex-end;
    padding: 10px 0px;
    color: var(--primary-text-color);
    cursor: pointer;
}

.container .main .google-login {

    margin: 20px auto;
    color: var(--btn-text-color);
    background-color: var(--btn-bg-color);
    width: 200px;
    padding: 20px 30px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 8px;
}

.container .close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    color: var(--primary-text-color);
    cursor: pointer;
}
</style>
