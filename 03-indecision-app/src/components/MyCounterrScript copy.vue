<template>
  <section class="card">
    <div class="card-body">
      <p><b>Counter:</b> {{ counter }}</p>
      <p><b>Squere:</b> {{ squereCounter }}</p>
    </div>
    <div class="card-footer">
      <button @click="counter++" class="btn btn-primary me-4">+1</button>
      <button @click="counter--" class="btn btn-success">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface Props {
  value: number;
}
export default defineComponent({
  setup(props: Props) {
    const counter = ref(props.value);
    const squereCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squereCounter,
    };
  },
});
</script>

<style scoped>
.card {
  max-width: 300px;
}
</style>
