<script setup lang="ts">

defineProps({
    color: {
        type: String,
        default: "currentColor"
    },
    height: {
        type: String,
        default: '24px'
    },
    width: {
        type: String,
        default: '24px'
    }
})

</script>

<template>
    <svg class="icon" :width="height" :height="width" viewBox="0 0 25 24" :fill="color" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24.146 12.073C24.146 5.40365 18.7424 0 12.073 0C5.40365 0 0 5.40365 0 12.073C0 18.0988 4.41493 23.0935 10.1866 24V15.563H7.11968V12.073H10.1866V9.41306C10.1866 6.38751 11.9878 4.71627 14.7466 4.71627C16.0678 4.71627 17.4494 4.95189 17.4494 4.95189V7.92146H15.9267C14.4273 7.92146 13.9594 8.85225 13.9594 9.8069V12.073H17.3077L16.7723 15.563H13.9594V24C19.7311 23.0935 24.146 18.0988 24.146 12.073Z"
            :fill="color"></path>
    </svg>
</template>
