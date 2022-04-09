<script lang="ts">import { defineComponent, ref } from "vue";
import { fileToBase64, formatBytes } from "../lib/fs";
import MediaPreview from "./MediaPreview.vue";

export default defineComponent({
    components: { MediaPreview },
    props: {
        label: String,
        accept: String
    },
    emits: ["change"],
    setup(_, ctx) {
        const base64 = ref("");
        const name = ref("");
        const size = ref("");
        const el = ref<null | HTMLInputElement>(null);
        const reset = () => {
            base64.value = "";
            name.value = "";
            size.value = "";
            el.value!.value = "";
        };
        const handleChange = async (event: Event) => {
            ctx.emit("change", event);
            const file = (event.target as HTMLInputElement)?.files?.[0];
            if (!file) {
                reset();
            }
            else {
                size.value = formatBytes(file.size);
                name.value = file.name;
                fileToBase64(file).then((val: string) => base64.value = val)
                    .catch(console.warn);
            }
        };
        return {
            handleChange,
            base64,
            name,
            size,
            el,
            reset
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
      :label="base64.startsWith('data:video') ? 'My Video ×' : 'My Image ×'"
      :src="base64"
      :type="base64.startsWith('data:video') ? 'video' : 'image'"
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