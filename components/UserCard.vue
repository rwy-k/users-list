<template>
    <div class="bg-slate-200 rounded-lg flex items-center justify-between p-4">
        <div class="flex">
            <img class="mr-8 w-1/5 rounded-full border-2 border-slate-800" :src="avatar"></img>
            <div class="flex flex-col justify-between">
                <p class="font-semibold text-lg">{{ [user.firstName, user.lastName, user.maidenName].join(' ') }}</p>
                <NuxtLink :to="`/${user.id}`">
                    <p class="bg-indigo-500/75 hover:bg-indigo-500 rounded-2xl text-white text-center py-3 max-w-36">View Details</p>
                </NuxtLink>
            </div>
        </div>
        <StoreHandlers class="handlers" :user="user" />
    </div>
            
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import StoreHandlers from '~/components/StoreHandlers.vue'; 
    import {DEFAULT_AVATAR} from '~/public/constants';
    
    export default defineComponent({
        props: {
            user: {
                required: true
            }
        },
        computed: {
            avatar():string {
                return this.user.image || this.DEFAULT_AVATAR;
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>./UserCard.vue