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

<script lang="ts" src="./MyCounterScript2"></script>

<style scoped>
.card {
  max-width: 300px;
}
</style>
