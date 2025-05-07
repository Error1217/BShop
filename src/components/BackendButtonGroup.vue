<script setup lang="ts">
import { ref } from 'vue';
import BackendButton from './BackendButton.vue';

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

const emit = defineEmits(["selectedValue"]);

const selectedIndex = ref(0);

const getVariationByIndex = (index:number) => {
    return props.content[index];
}

const selectVariation = (index: number) => {
    selectedIndex.value = index;
    emit("selectedValue", getVariationByIndex(index));
};


</script>

<template>
    <div class="variation">
        <div class="variation-title font-weight-600">
            {{ `${props.title}：` }}
            <span class="font-weight-600">{{ getVariationByIndex(selectedIndex) }}</span>
        </div>
        <div class="variation-select-box flex gap-4 py-4">
            <div v-for="(item, index) in props.content" :key="index" class="variation-select-label"
                :class="{ 'active': (selectedIndex == index) }"
                @click="selectVariation(index)">
                <BackendButton :title="item" :isActive="selectedIndex === index"></BackendButton>
            </div>
            
        </div>
    </div>


</template>

<style scoped src="@/css/backend.css"></style>
