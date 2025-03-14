<script setup lang="ts">

</script>

<template>
    <div class="aside">
        <ul class="aside-menu">
            <li class="list-item"><a class="font-weight-600" href="">所有商品</a></li>
            <li class="list-item"><a class="font-weight-600" href="">女裝</a></li>
            <li class="list-item"><a class="font-weight-600" href="">鞋子</a></li>
        </ul>
    </div>

</template>


<style scoped>

/* .aside{
    
} */

.aside .aside-menu{
    font-size: 16px;
    line-height: 1.5;

}

.aside .aside-menu .list-item{
    display: block;
}

.aside .aside-menu .list-item a{
    display: block;
    padding: 12px 25px 12px 0px;

    color: var(--primary-text-color);
    box-sizing: border-box;
}

.aside .aside-menu .list-item a:visited{
    color: var(--primary-text-color);
}

</style>
