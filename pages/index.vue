<template>
    <div>
        <div class="header-container flex justify-between m-4">
            <page-controller class="pagination" :page="currentPage" :maxPageNumber="maxPageNumber" @updatePage="setPageValue"></page-controller>
        </div>
        <div class="users-container">
            <user-card class="m-4" 
                v-for="user in usersPerPage"
                :user="user"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive, computed, ref } from 'vue'
    import pageController from '~/components/PageController.vue';
    import userCard from '~/components/UserCard.vue';
    import { COUNT_USERS_PER_PAGE } from '~/public/constants';

    const {data: usersList}:User[] = await useFetch('/api/allUsers');

    const currentPage:number = ref(1);
    const maxPageNumber:number = Math.ceil(usersList.length / COUNT_USERS_PER_PAGE);
    
    const usersPerPage:Array<User> = computed(() => usersList.value.slice(currentPage.value - 1, COUNT_USERS_PER_PAGE));

    function setPageValue(newValue:number) {
        currentPage.value = newValue;
    }

    useHead({
        link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' }
            ]
    })
</script>

<style lang="scss" scoped>

</style>