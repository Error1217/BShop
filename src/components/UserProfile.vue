<script setup lang="ts">

import UserProfileLayout from './UserProfileLayout.vue';
import UserProfileBoxLayout from './UserProfileBoxLayout.vue';

</script>

<template>

    <UserProfileLayout>
        <template #left>
            <UserProfileBoxLayout :count=4>
                <template #title>會員資料</template>

                <template #label-0>姓名</template>
                <template #info-0>MinatoMio</template>

                <template #label-1>手機號碼</template>
                <template #info-1>0912345678</template>

                <template #label-2>性別</template>
                <template #info-2>男</template>

                <template #label-3>生日</template>
                <template #info-3>2000/10/12</template>
            </UserProfileBoxLayout>

        </template>
        <template #right>
            <UserProfileBoxLayout :count=3>
                <template #title>收貨資訊</template>

                <template #label-0>姓名</template>
                <template #info-0>MinatoMio</template>

                <template #label-1>手機號碼</template>
                <template #info-1>0912345678</template>

                <template #label-2>地址</template>
                <template #info-2>ＸＸ市</template>

            </UserProfileBoxLayout>
        </template>
    </UserProfileLayout>

</template>

<style scoped></style>
