<template>
    <div class="flex justify-between">
        <button 
            v-if="!isUserInStore"
            @click="saveUser" 
            class="px-6 py-4 rounded-2xl border-emerald-900 border-2 bg-emerald-800/50 hover:bg-emerald-800 text-white text-center max-h-14"
        >
            Save
        </button>
        <button 
            v-else
            @click="removeUser" 
            class="px-6 py-4 rounded-2xl border-rose-900 border-2 bg-rose-800/50 hover:bg-rose-800 text-white text-center max-h-14"
        >
            Delete
        </button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useUserStore } from '~/store';
    export default defineComponent ({
        setup() {
            const userStore = useUserStore(); 
            const users = userStore.users;

            const addUser = (newUser:User) => {
                userStore.addUser(newUser);
            };
            const deleteUser = (oldUser:User) => {
                userStore.deleteUser(oldUser);
            };

            return {
                users,
                addUser,
                deleteUser
            };
        },
        props: {
            user: {
                required: true
            }
        },
        data() {
            return {
                isUserInStore: false,
            }
        },
        mounted() {
            this.isUserInStore = (this.users.findIndex(el => el.id === this.user.id) !== -1);
        },
        methods: {
            saveUser() {
                this.isUserInStore = true;
                this.addUser(this.user);
            },
            removeUser() {
                this.isUserInStore = false;
                this.deleteUser(this.user);
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>