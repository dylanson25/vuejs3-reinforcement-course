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
