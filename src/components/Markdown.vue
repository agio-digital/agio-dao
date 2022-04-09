
<script lang="ts">
import { marked } from "marked";
import { computed, defineComponent, toRefs, PropType } from "vue";

export default defineComponent({
  props: {
    value: String,
    replace: Object as PropType<{
      [key: string]: string
    }>
  },
  setup(props, ctx) {
    const { value, replace } = toRefs(props);
    const markdown = computed(() => {
      try {
        const str = value.value || (ctx.slots as any)?.default()[0]?.children?.toString() || "";
        let md = marked(str)
          .replace(/<a href=/g, '<a target="_blank" href=');
        Object.entries(replace.value || {}).forEach(([key, value]) => {
          md = md.replaceAll(key, value)
        })
        return md;
      } catch {
        return "";
      }
    })

    return {
      markdown
    }
  }
})
</script>

<template>
  <div
    v-if="markdown"
    class="prose prose-base"
    v-html="markdown"
  />
</template>