
<template>
  <input
    v-model.number="model"
    type="range"
    :class="getClass($attrs)"
    v-bind="$attrs"
  >
</template>

<script lang="ts">
import { useVModel } from "../hooks/useVModel";
import { SetupContext, toRefs, defineComponent } from "vue";


export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [Number, String],
      required: false,
    },
  },
  setup(props, ctx) {
    const { modelValue } = toRefs(props);
    const model = useVModel(modelValue, ctx);

    const baseClasses = "w-full mb-4 range range-primary range-md";

    const getClass = (attrs: SetupContext["attrs"]) =>
      `${baseClasses} ${attrs?.class ?? ""} ${
        attrs?.disabled || attrs?.disabled === "" ? "opacity-60" : ""
      }`;

    return {
      model,
      getClass,
    };
  },
});
</script>
