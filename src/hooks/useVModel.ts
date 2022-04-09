import { SetupContext, computed, Ref } from "vue";

export const useVModel = <T>(ref: Ref<T>, { emit }: SetupContext) => {
  const model = computed({
    get: () => ref.value,
    set: (val) => emit("update:modelValue", val),
  });

  return model;
};

export default useVModel;
