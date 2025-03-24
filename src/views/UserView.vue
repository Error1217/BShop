<script setup lang="ts">
import UserLayout from '@/components/UserLayout.vue';
import UserNavBar from '@/components/UserNavBar.vue';



</script>

<template>
    <UserLayout>
        <template #user-nav-bar>
            <UserNavBar></UserNavBar>
        </template>
        <template #user-info-group>
            <RouterView v-slot="{ Component }">
                <KeepAlive>
                    <Component :is="Component"></Component>
                </KeepAlive>

            </RouterView>
        </template>
    </UserLayout>

</template>

<style scoped></style>
