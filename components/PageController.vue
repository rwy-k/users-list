<template>
    <div class="flex justify-between items-center w-1/12">
        <button @click="decrementPage">
            <span class="material-symbols-outlined" :class="{disabled: currentPage === 1}">arrow_back</span>
        </button>
        <span>{{ currentPage }}</span>
        <button @click="incrementPage">
            <span class="material-symbols-outlined" :class="{disabled: currentPage === maxPageNumber}">arrow_forward</span>
        </button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent ({
        props: {
            page: {
                required: true,
                type: Number,
            },
            maxPageNumber: {
                required: true,
                type: Number,
            },
        },
        data() {
            return {
                currentPage: this.page
            };
        },
        methods: {
            incrementPage() {
                if (this.currentPage === this.maxPageNumber) return;
                this.currentPage++;
                this.$emit('updatePage', this.currentPage);
            },
            decrementPage() {
                if (this.currentPage === 1) return;
                this.currentPage--;
                this.$emit('updatePage', this.currentPage);
            }
        }
    });
</script>

<style lang="scss" scoped>
    .disabled {
        cursor: default;
        color: gray;
    }
</style>