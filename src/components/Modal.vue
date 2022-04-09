<script lang="ts">
import useVModel from "../hooks/useVModel";
import { defineComponent, onMounted, onUnmounted, ref, SetupContext, toRefs, watch } from "vue";

export default defineComponent({
  props: {
    modelValue: Boolean,
    title: String,
    zIndex: Number,
    width: {
      type: String,
      default: "400px"
    }
  },
  emits: ["open", "close", "update:modelValue"],
  setup(props, ctx) {
    const { modelValue } = toRefs(props);
    const model = useVModel(modelValue, ctx as SetupContext);
    const loaded = ref(false);

    watch(model, (val, old) => {
      if (val === false && old === true) {
        ctx.emit("close");
      }
      if (val === true && old === false) {
        ctx.emit("open");
      }
    })

    const onKeydown = (e: any) => {
      if (e.code === "Escape") {
        model.value = false;
      }
    };

    onUnmounted(() => {
      document.removeEventListener("keydown", onKeydown)
    })

    onMounted(() => {
      loaded.value = true;
      document.addEventListener("keydown", onKeydown);
    });

    return {
      model,
      loaded,
    };
  },
});
</script>

<template>
  <teleport to="body">
    <transition-group name="fade">
      <div
        v-if="model && loaded"
        class="p-modal-backdrop bg-slate-800 opacity-90"
        :style="`z-index: ${zIndex || 400}`"
        @click="model = false"
      />

      <div
        v-if="model && loaded"
        class="p-modal bg-white rounded-lg shadow-lg"
        :style="`z-index: ${(zIndex || 400) + 1}; width: ${width}`"
      >
        <button
          class="font-medium opacity-80 hover:opacity-100 p-3 pr-4 text-2xl absolute right-0 top-0 z-10"
          @click="model = false"
        >
          ×
        </button>
        <h3
          class="px-6 pr-10 pt-4 pb-0 font-medium text-lg flex flex-row font-brand uppercase text-slate-800"
        >
          <slot
            v-if="$slots.header"
            name="header"
          />
          <template v-else-if="title">
            {{ title }}
          </template>
        </h3>
        <slot />

        <div
          v-if="$slots.body"
          class="p-modal-body py-4 px-6 pt-4"
        >
          <slot name="body" />
        </div>
      </div>
    </transition-group>
  </teleport>
</template>

<style lang="scss">
.p-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 399;
}

.p-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 400;
  max-width: calc(100vw - 30px);
  transform: translate(-50%, -50%);

  &-body {
    max-height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>
