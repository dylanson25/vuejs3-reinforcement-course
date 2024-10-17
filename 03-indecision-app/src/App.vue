<template>
  <main class="container p-4">
    <MyCounter :value="initialValue" />
  </main>
</template>

<script setup lang="ts">
import MyCounter from '@/components/MyCounter.vue';
import { ref } from 'vue';

const initialValue = ref(5);
</script>

<style scoped></style>
