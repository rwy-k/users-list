import { defineStore } from 'pinia';
import { defineNuxtPlugin } from '#app';

export const useUserStore = defineStore('user', {
  state: (): { users: User[] } => ({
    users: [],
  }),
  actions: {
    addUser(this: any, user: User) {
      this.users.push(user);
    },
    deleteUser(this: any, user: User) {
      this.users = this.users.filter(el => el.id === user.id);
    },
    getUsers(this: any): User[] {
      return this.users;
    },
  },
});

export default defineNuxtPlugin(() => {
  const pinia = useUserStore._pinia;

  return {
    app: {
      pinia,
    },
  };
});
