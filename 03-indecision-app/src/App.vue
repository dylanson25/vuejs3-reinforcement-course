<template>
  <main class="container p-4">
    <MyCounter :value="initialValue" />
    <hr />
    <MyCounter2 :value="initialValue + 5" />
    <hr />
    <MyCounter3 :value="initialValue + 10" />
  </main>
</template>

<script setup lang="ts">
import MyCounter from '@/components/MyCounter.vue';
import MyCounter2 from '@/components/MyCounter.vue';
import MyCounter3 from '@/components/MyCounter.vue';
import { ref } from 'vue';

const initialValue = ref(5);
</script>

<style scoped></style>
