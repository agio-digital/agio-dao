<script lang="ts">
import { useFormat } from "../hooks/useFormat";
import { useStore } from "../store";
import { Message } from "../types/message";
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  toRefs,
} from "vue";

export default defineComponent({
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const { message } = toRefs(props);
    const loaded = ref(false);

    const color = computed(() => {
      const type = message.value.type;
      if (type === "error") return "red";
      else if (type === "success") return "green";
      else if (type === "warning") return "orange";
      else return "sky";
    });

    onMounted(() => {
      loaded.value = true;
    });

    return {
      format: useFormat(),
      store,
      color,
      loaded,
    };
  },
});
</script>

<template>
  <transition name="slideup">
    <div
      v-if="!message.archived && !message.dismissed && loaded"
      :data-color="color"
      :class="`bg-white bg-${color}-50 border-l-4 border-${color}-500 rounded text-slate-900 px-4 py-3 shadow-md message`"
      role="alert"
    >
      <div class="flex flex-row items-center">
        <div class="py-1">
          <svg
            :class="`fill-current h-6 w-6 text-${color}-500 mr-4`"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
            />
          </svg>
        </div>
        <div>
          <div class="font-semibold text-sm">
            {{ message.title }}
          </div>
          <div
            class="text-sm"
            style="line-height: 1.1"
          >
            {{ message.text }}
          </div>
        </div>
        <div :class="`ml-auto font-semibold w-${message.action ? '2/5' : '1/7'} text-right mb-auto -mt-1 -mr-1`">
          <a
            v-if="message.action"
            :href="message.action[1]"
            target="_blank"
            :class="`cursor-pointer whitespace-nowrap ml-2 text-sm text-${color}-500 hover:text-${color}-600 font-semibold hover:underline`"
          >
            {{ message.action[0] }}
          </a>
          <span
            class="cursor-pointer ml-3 text-lg opacity-80 hover:opacity-100 text-${color}-500 font-medium"
            @click="store.DISMISS_MESSAGE(message.id)"
          >×</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.message {
  width: 100%;
  pointer-events: all;
}
</style>
