<script setup lang="ts">

import FacebookIcon from '@/icons/socialIcon/FacebookIcon.vue';
import InstagramIcon from '@/icons/socialIcon/InstagramIcon.vue';
import LineIcon from '@/icons/socialIcon/LineIcon.vue';
import YoutubeIcon from '@/icons/socialIcon/YoutubeIcon.vue';


</script>

<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-items">
                <div class="footer-item">
                    <p class="text-title">關於我們</p>
                    <div class="contents">
                        <p><a href="">品牌故事</a></p>
                        <p><a href="">隱私權政策</a></p>
                    </div>
                </div>
                <div class="footer-item">
                    <p class="text-title">購物須知 Notice</p>
                    <div class="contents">
                        <p><a href="">購物須知</a></p>
                        <p><a href="">會員等級</a></p>
                        <p><a href="">物流服務</a></p>
                        <p><a href="">售後服務</a></p>
                    </div>
                </div>
                <div class="footer-item">
                    <p class="text-title">Customer Service</p>
                    <div class="contents">
                        <p>Time / Mon-Fri 9:00-18:00</p>
                        <p>Email /mood.kr2022@gmail.com</p>
                    </div>
                </div>
                <div class="footer-item">
                    <p class="text-title">Social media</p>
                    <div class="contents">
                        <div class="social-icon-list">
                            <FacebookIcon></FacebookIcon>
                            <InstagramIcon></InstagramIcon>
                            <LineIcon></LineIcon>
                            <YoutubeIcon></YoutubeIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-payment-icon-list">
                <img src="../assets/payment/visa.svg" loading="lazy">
                <img src="../assets/payment/master.svg" loading="lazy">
                <img src="../assets/payment/jcb.svg" loading="lazy">
                <img src="../assets/payment/apple_pay.svg" loading="lazy">
                <img src="../assets/payment/family_mart.svg" loading="lazy">
                <img src="../assets/payment/7_eleven.svg" loading="lazy">
                <img src="../assets/payment/line.svg" loading="lazy">
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    width: 100%;
    background-color: var(--footer-bg-color);
}

.footer .footer-container {
    height: 100%;

    margin: 0px 90px;
    padding: 30px 0px;
    box-sizing: border-box;
}

.footer .footer-container .footer-items {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-around;
    word-break: break-word
}

.footer .footer-container .footer-items .footer-item {
    flex-grow: 1;
    padding: 15px;
    line-height: 1.5;
    box-sizing: border-box;
    color: #000
}

.footer .footer-container .footer-items .footer-item .text-title {
    margin-bottom: 30px;
    font-size: 16px;
}

.footer .footer-container .footer-items .footer-item .contents {
    font-size: 14px;
}

.footer .footer-container .footer-items .footer-item .contents p a:visited{
    color: inherit
}

.footer .footer-container .footer-items .footer-item .contents .social-icon-list {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    gap: 5px;
}

.footer .footer-container .footer-payment-icon-list {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;

    width: 100%;
    padding: 15px;
    box-sizing: border-box;

}
</style>
