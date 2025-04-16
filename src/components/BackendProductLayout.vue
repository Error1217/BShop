<script setup lang="ts">
import type { IItem } from '@/Interface/IItem';


const props = defineProps({
    gridTitles: {
        type: Array<String>,
        required: true
    },
    products: {
        type: Array<IItem>,
        required: true
    }
})

</script>

<template>

    <div class="px-8 bg-blue-100 h-screen overflow-y-auto">
        <div class="nav bg-blue-100 pt-4 flex-col sticky top-0">
            <h2 class="title text-2xl mb-8">
                <slot name="title"></slot>
            </h2>
            <div class="flex flex-row mb-8">
                <ul class="flex gap-4">
                    <slot name="navlist"></slot>
                </ul>
                <div class="search ml-auto ">
                    <slot name="search"></slot>
                </div>
            </div>
            <div class="flex px-2 py-4 gap-4 bg-blue-500">
                <div class="checkbox flex-none ">
                    <input type="checkbox" name="" id="">
                </div>
                <div class="name flex-[2]">
                    名稱
                </div>
                <div class="price flex-[1]">
                    原價
                </div>
                <div class="label flex-[1]">
                    標籤
                </div>
                <div class="create_at flex-[2]">
                    創建日期
                </div>
            </div>
        </div>

        <div class="flex-1 bg-blue-300">
            <ul class="">
                <li v-for="(item, index) in props.products" class="flex px-2 py-4 gap-4 hover:bg-blue-400"
                    :key="item.id">
                    <div class="checkbox flex-none">
                        <input type="checkbox" name="" id="">
                    </div>
                    <div class="name flex-[2]">
                        {{ item.name }}
                    </div>
                    <div class="price flex-[1]">
                        ＄{{ item.price }}
                    </div>
                    <div class="label flex-[1]">
                        {{ item.label }}
                    </div>
                    <div class="create_at flex-[2]">
                        {{ item.created_at }}
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped src="@/css/backend.css"></style>
