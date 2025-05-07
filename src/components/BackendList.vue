<script setup lang="ts">
import type { IItem } from '@/Interface/IItem';
import type { UUID } from 'crypto';
import { computed, ref } from 'vue';


const props = defineProps({
    titles: {
        type: Array<{ title: string, key: keyof IItem, widthRate: string }>,
        // required: true
    },
    items: {
        type: Array<IItem>,
        // required: true
    }
})

const selectedIds = ref<Set<string>>(new Set());
const selectedAll = computed(()=> selectedIds.value.size === props.items?.length);

const toggleSelect = (id: UUID) => {
    if (selectedIds.value.has(id)) {
        selectedIds.value.delete(id);
    }
    else {
        selectedIds.value.add(id);
    }
    console.log(selectedIds.value);
}

const toggleSelectAll = () => {
    if (!props.items) {
        return;
    }
    

    if (!selectedAll.value) {
        for (let index = 0; index < props.items.length; index++) {
            const item = props.items[index];
            selectedIds.value.add(item.id);
        }
    }
    else{
        selectedIds.value.clear()
    }

}

</script>

<template>

    <div class="flex-1 bg-blue-300 h-full overflow-y-auto">
        <ul class="">
            <li class="flex px-2 py-4 gap-4 bg-blue-500 sticky top-0">
                <div class="checkbox flex-none ">
                    <input type="checkbox" name="" id="" :checked="selectedAll" @change="toggleSelectAll">
                </div>
                <div v-for="(title, index) in props.titles" :class="`flex-[${title.widthRate}]`">
                    {{ title.title }}
                </div>
            </li>
            <li v-for="(item, index) in props.items"
                class="flex px-2 py-4 gap-4 box-border hover:border-blue-700 hover:border" :key="item.id" :class="{
                    'bg-blue-500': selectedIds.has(item.id)
                }">
                <div class="checkbox flex-none">
                    <input type="checkbox" name="" id="" :checked="selectedIds.has(item.id)"
                        @change="toggleSelect(item.id)">
                </div>
                <div v-for="(title, index) in props.titles" :class="`flex-[${title.widthRate}]`">
                    {{ item[title.key] }}
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped src="@/css/backend.css"></style>
