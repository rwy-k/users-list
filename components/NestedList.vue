<template>
    <ul class="ml-8">
      <li v-for="(value, key) in jsonObject" :key="key">
        <span v-if="!isObject(value)" class="capitalize"><b>{{ key }}: </b></span>
        <li v-else class="capitalize"><b>{{ key }}: </b></li>
        <template v-if="isObject(value)">
          <NestedList :jsonObject="value" />
        </template>
        <template v-else>
          <span class="italic">{{ value }}</span>
        </template>
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
    import { defineProps } from 'vue';
    
    interface NestedJsonObject {
        [key: string]: unknown;
    }

    const props = defineProps({
        jsonObject: {
            type: Object,
            required: true
        }
    });
    
    const isObject = (value: unknown): boolean => typeof value === 'object' && value !== null;
  </script>
