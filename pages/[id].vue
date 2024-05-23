<template>
    <div v-if="isLoadingUserInfo" class="loader"></div>
    <div v-else>
        <div class="header-container flex justify-between items-center m-4">
            <div class="flex items-center">
                <img class="mr-8 w-1/5 rounded-full border-2 border-slate-800" :src="avatar"></img>
                <span class="font-semibold text-2xl">{{ fullName }}</span>
            </div>
            <StoreHandlers class="handlers" :user="userInfo" />
        </div>
        <div class="bg-slate-200 rounded-lg flex items-center justify-between p-4">
            <NestedList :jsonObject="userInfo" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import NestedList from '~/components/NestedList.vue'; 
    import StoreHandlers from '~/components/StoreHandlers.vue'; 
    import {DEFAULT_AVATAR} from '~/public/constants';

    const isLoadingUserInfo = ref(true);

    const { id }: {id: number} = useRoute().params;
    const { data: userInfo }: { data: User } = await useFetch(`/api/user/${id}`);

    isLoadingUserInfo.value = false;

    if (!userInfo) {
        throw createError({ statusCode: 404, statusMessage: 'User not found' })
    }
    
    const fullName:string = computed(() => [userInfo.value?.firstName, userInfo.value?.lastName, userInfo.value?.maidenName].join(' '));
    const avatar:string = computed(() => userInfo.value?.image || DEFAULT_AVATAR);

    const isObject = (value: unknown): boolean => typeof value === 'object' && value !== null;

    definePageMeta({
        layout: "user",
    })

</script>

<style scoped>
.loader {
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #3498db;
    width: 64px;
    height: 64px;
    animation: spin 2s linear infinite;
    margin: 20% auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>./[id].vue