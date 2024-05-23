export default defineEventHandler(async () => {


    const uri = `https://dummyjson.com/users?limit=0`;
    interface ApiResponse {
        users: User[],
        total: number,
        skip: number,
        limit: number
    }

    const data:ApiResponse = await $fetch<ApiResponse>(uri);

    return data.users;
})