export default defineEventHandler(async (event: any) => {

    const { id } = event.context.params;
    const uri = `https://dummyjson.com/user/${id}`;

    const data:User = await $fetch<User>(uri);

    return data;
})