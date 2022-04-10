<script lang="ts">import { defineComponent, ref, watch } from "vue";
import { fileToBase64, fileToHash, formatBytes } from "../lib/fs";
import MediaPreview from "./MediaPreview.vue";

export default defineComponent({
    components: { MediaPreview },
    props: {
        label: String,
        accept: String
    },
    emits: ["change", "hash"],
    setup(_, ctx) {
        const base64 = ref("");
        const name = ref("");
        const size = ref("");
        const el = ref<null | HTMLInputElement>(null);
        const file = ref<File>();

        watch(() => file?.value, async (f) => ctx.emit("hash", f ? await fileToHash(f) : ""), {
          deep: true,
          immediate: true
        })

        const reset = () => {
            base64.value = "";
            name.value = "";
            size.value = "";
            el.value!.value = "";
            file.value = undefined;
        };
        const handleChange = async (event: Event) => {
            ctx.emit("change", event);
            const _file = (event.target as HTMLInputElement)?.files?.[0];

            if (!_file) {
                reset();
            }
            else {
              file.value = _file;
                size.value = formatBytes(_file.size);
                name.value = _file.name;
                fileToBase64(_file).then((val: string) => base64.value = val)
                    .catch(console.warn);
            }
        };
        return {
            handleChange,
            base64,
            name,
            size,
            el,
            reset,
            file
        };
    }
})
</script>

<template>
  <div>
    <input
      ref="el"
      type="file"
      :accept="accept"
      hidden
      @change="handleChange"
    >

    <MediaPreview
      v-if="name"
      :label="base64.startsWith('data:video') ? 'video' : base64.startsWith('data:image') ? 'image' : 'file'"
      :src="base64"
      :type="base64.startsWith('data:video') ? 'video' : base64.startsWith('data:image') ? 'image' : 'file'"
      :file="file"
      @click="el?.click()"
    />


    <Button
      v-else
      size="sm"
      variant="secondary"
      @click="el?.click()"
    >
      {{ label || 'Select file' }}
    </Button>
  </div>
</template>