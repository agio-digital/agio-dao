<script lang="ts">import { computed, defineComponent, PropType, toRefs } from "vue";
import { formatBytes } from "../lib/fs";
export default defineComponent({
  props: {
    type: String as PropType<"video" | "image">,
    src: String,
    byteSize: Number,
    label: String
  },
  setup(props) {
    const { byteSize, src } = toRefs(props);
    const bytes = computed(() => {
      const srcStr = (src.value || "");
      const base64str = srcStr.substring(srcStr.indexOf(',') + 1)
      //@ts-ignore
      const base64Size = atob(base64str).length;
      const size = byteSize.value || base64Size;
      return +size;
    })
    return {
      bytes,
      formatBytes
    }
  }
})
</script>

<template>
  <div
    class="rounded p-3 bg-slate-50 border hover:bg-slate-50 cursor-pointer transition hover:shadow-inner borderap"
  >
    <div class="flex flex-row items-center">
      <div class="w-12 mr-4">
        <video
          v-if="type === 'video'"
          :src="src"
          muted
          loop
          autoplay
          :poster="src || './public/img/placeholder.png'"
          playsinline
          class="object-cover aspect-auto rounded w-12 h-12 bg-white"
        />
        <img
          v-else
          :src="src || './public/img/placeholder.png'"
          class="object-cover aspect-auto rounded w-12 h-12 bg-white"
        >
      </div>
      <div class="truncate w-4/5">
        <div class="font-medium capitalize">
          {{ label || type || 'image' }}
        </div>
        <div
          v-if="bytes"
          class="text-sm opacity-60"
          v-text="formatBytes(bytes)"
        />
      </div>
    </div>
  </div>
</template>