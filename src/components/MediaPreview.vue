<script lang="ts" setup>
import { computed, defineProps, PropType, ref, toRefs, watch } from "vue";
import { fileToHash, formatBytes } from "../lib/fs";

const props = defineProps({
  type: {
    type: String as PropType<"video" | "image" | "file">,
    default: "file"
  },
  src: String,
  byteSize: Number,
  label: String,
  file: File
})

const { byteSize, src, file } = toRefs(props);
const hash = ref("");
const bytes = computed(() => {
  const srcStr = (src?.value || "");
  const base64str = srcStr.substring(srcStr.indexOf(',') + 1)
  //@ts-ignore
  const base64Size = atob(base64str).length;
  const size = byteSize?.value || base64Size;
  return +size;
})
const fileType = computed(() => "📄\n" + src?.value?.split(';')?.[0]?.split('/')?.[1] || "file");

watch(() => file?.value, async (f) => hash.value = f ? await fileToHash(f) : "", {
  deep: true,
  immediate: true
})
</script>

<template>
  <div class="rounded p-3 bg-slate-50 border hover:bg-slate-50 cursor-pointer transition hover:shadow-inner borderap">
    <div class="flex flex-row items-center">
      <div class="w-12 mr-4">
        <img
          v-if="type === 'image'"
          :src="src || './public/img/placeholder.png'"
          class="object-cover aspect-auto rounded w-12 h-12 bg-white truncate border-slate-300 border"
        >
        <span
          v-else
          :src="src || './public/img/placeholder.png'"
          class="object-cover aspect-auto rounded w-12 h-12 bg-slate-200 inline-flex justify-center items-center font-medium whitespace-pre text-center text-2xs overflow-clip truncate p-1 border-slate-300 border"
        >
          {{ fileType }}
        </span>
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