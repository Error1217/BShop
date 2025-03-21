<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: Array<String>,
        required: true
    }
});

const selectedIndex = ref(0);

const selectVariation = (index: number) => {
    selectedIndex.value = index;
    return props.content[index];
};


</script>

<template>
    <div class="variation">
        <div class="variation-title font-weight-600">
            {{ `${props.title}：` }}
            <span class="font-weight-600">{{ selectVariation(selectedIndex) }}</span>
        </div>
        <div class="variation-select-box">
            <div v-for="(item, index) in props.content" :key="index" class="variation-select-label"
                :class="{ 'active': (selectedIndex == index) }"
                @click="selectVariation(index)">
                {{ item }}
            </div>
        </div>
    </div>


</template>

<style scoped>
.variation .variation-title {
    font-size: 12px;
    color: #9A9898;
}

.variation .variation-select-box {
    display: flex;
    gap: 8px;
}

.variation .variation-select-box .variation-select-label {
    display: inline-block;
    margin: 8px 0px;
    padding: 8px 10px;
    border: 1px var(--variation-border-color) solid;
    border-radius: 4px;
    font-size: 14px;
    color: var(--primary-text-color);
    box-sizing: border-box;
    cursor: pointer;

    transition: 0.2s;
}

.variation .variation-select-box .variation-select-label.active,
.variation .variation-select-box .variation-select-label:hover {
    border-color: var(--btn-bg-hover-color);
    color: var(--btn-bg-hover-color);
}
</style>
