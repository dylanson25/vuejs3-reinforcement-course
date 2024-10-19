import { computed, ref } from 'vue';

export const useCounter = (initialValue = 5) => {
  const counter = ref(initialValue);
  const squereCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    squereCounter,
  };
};
