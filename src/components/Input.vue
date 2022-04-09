<template>
  <input
    ref="el"
    v-model="model"
    v-bind="$attrs"
    :class="getClass($attrs)"
    autocomplete="aus"
    data-lpignore="true"
  >
</template>

<script lang="ts">
import { useVModel } from "../hooks/useVModel";
import { SetupContext, toRefs, defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    autoFocus: Boolean,
    modelValue: {
      type: [Number, String],
      required: false,
    },
  },
  setup(props, ctx) {
    const { modelValue, autoFocus } = toRefs(props);
    const model = useVModel(modelValue, ctx);
    const el = ref<HTMLInputElement>()

    const baseClasses = "w-full rounded p-4 bg-slate-200 font-semibold text-slate-600 hover:bg-slate-300 focus:bg-sky-50 duration-150 focus:shadow-md hover:shadow-md transition outline-sky-600";

    const getClass = (attrs: SetupContext["attrs"]) =>
      `${baseClasses} ${attrs?.class ?? ""} ${attrs?.disabled || attrs?.disabled === "" ? "opacity-60" : ""
      }`;

    onMounted(() => {
      setTimeout(() => {
        if (autoFocus.value) {
          el.value?.focus()
        }
      }, 200);
    })



    return {
      model,
      getClass,
      el
    };
  },
});
</script>
