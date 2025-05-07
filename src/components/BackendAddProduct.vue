<script setup lang="ts">
import Modal from './Modal.vue';
import BackendAddProductLayout from './BackendAddProductLayout.vue';
import BackendFormItem from './BackendFormItem.vue';
import BackendButton from './BackendButton.vue';
import BackendButtonGroup from './BackendButtonGroup.vue';
import CloseIcon from '@/icons/CloseIcon.vue';
import { ref, type InputHTMLAttributes, type Ref } from 'vue'

import { setProduct } from '@/lib/supabaseClient';
import type { IItem } from '@/Interface/IItem';

const props = defineProps<{
    onClose: Function
}>()

const formMap = new Map<string, { title: string, inputType: InputHTMLAttributes["type"], value: Ref<any> }>();

const close = () => {
    props.onClose?.();
}

const addProduct = async ()=>{

    await setProduct({
        name: formMap.get("name")?.value.value || "",
        summary: formMap.get("summary")?.value.value || "",
        image_url: formMap.get("imageUrl")?.value.value || "",
        size: formMap.get("size")?.value.value || "",
        price: parseInt(formMap.get("price")?.value.value || "0"),
        sku: formMap.get("sku")?.value.value || "",
        stock: 50,
    } as IItem)
}

formMap.set("name", { title: "名稱", inputType: "text", value: ref("") });
formMap.set("sku", { title: "編號", inputType: "text", value: ref("")});
formMap.set("imageUrl", { title: "圖片網址", inputType: "text", value: ref("") });
formMap.set("price", { title: "價格$", inputType: "text", value: ref("") });
formMap.set("summary", { title: "商品描述", inputType: "textarea", value: ref("") });
formMap.set("size", { title: "尺寸", inputType: "none", value: ref("")});

const handleInputValue = (inputValue: any, key:string) =>{
    const field = formMap.get(key);
    if (field) {
        field.value.value = inputValue;    
    }
    
    console.log(inputValue, formMap.get(key));
    
}

</script>

<template>
    <Modal>
        <BackendAddProductLayout>
            <template #title>
                <div class="text-center mb-8 text-2xl">添加商品</div>
            </template>

            <template #left>
                <div v-for="[key, config] in formMap" class="">
                    <BackendFormItem v-if="key !=='summary'" :title="config.title" :inputType="config.inputType" :key="key" @inputValueEvent="(val: any) => handleInputValue(val, key)"></BackendFormItem>
                </div>

                <div class="size">
                    <BackendButtonGroup :title="formMap.get('size')?.title || ''" :content="['XS', 'S', 'M', 'L', 'XL', '2XL']" @selectedValue="(val: any) => handleInputValue(val, 'size')"></BackendButtonGroup>
                </div>

                <div class="line mb-4 border-t border-gray-400"></div>

                <div class="mx-auto">
                    <BackendButton title="添加" :isActive="false" @click="addProduct"></BackendButton>
                </div>
            </template>

            <template #right>
                <BackendFormItem :title="formMap.get('summary')?.title || ''" :inputType="formMap.get('summary')?.inputType || ''" @inputValueEvent="(val: any) => handleInputValue(val, 'summary')"></BackendFormItem>
            </template>

            <template #closeBtn>

                <div class="" @click="close">
                    <CloseIcon></CloseIcon>
                </div>

            </template>
        </BackendAddProductLayout>
    </Modal>

</template>

<style scoped src="@/css/backend.css"></style>
