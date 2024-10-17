<template>
  <section class="card">
    <div class="card-body">
      <p><b>Counter:</b> {{ counter }}</p>
      <hr />
      <p><b>Squere:</b> {{ squereCounter }}</p>
    </div>
    <div class="card-footer">
      <button @click="counter++" class="btn btn-primary me-4">+1</button>
      <button @click="counter--" class="btn btn-success">-1</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const counter = ref(0);
const squereCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.card-body {
  max-width: 300px;
}
</style>
