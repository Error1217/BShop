<script setup lang="ts">
import { ref, type InputHTMLAttributes } from 'vue'

const props = defineProps<{
    title: string,
    inputType: InputHTMLAttributes["type"]
}>()

const inputValue = ref("")

const emit = defineEmits(["inputValueEvent"]);

const sendInputValue = () => {
    emit("inputValueEvent", inputValue.value);
}

</script>

<template>

    <div v-if="props.inputType === 'textarea'" class="flex flex-col w-full">
        <div class="text-center my-4">
            {{ props.title }}
        </div>
        <div class="line border-b h-0"></div>
        <div class="flex-1 h-full p-4">
            <textarea name="" id="" class="resize-none w-full h-full bg-transparent rounded-lg" v-model="inputValue"
                @change="sendInputValue" :placeholder="props.title"></textarea>
        </div>
    </div>

    <div v-else-if="props.inputType !== 'none'"
        class="flex gap-4 border border-gray-400 px-8 py-4 rounded-lg box-border">
        <div class="w-20">
            {{ props.title }}
        </div>
        <div class="flex-1">
            <input :type="props.inputType" name="" id="" v-model="inputValue" @change="sendInputValue"
                :placeholder="props.title" class="bg-transparent w-full pl-2">
        </div>
    </div>



</template>

<style scoped src="@/css/backend.css"></style>
