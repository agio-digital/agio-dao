<script lang="ts">import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'white'
    },
    bg: {
      type: String,
      default: 'slate-500'
    }
  }
})
</script>

<template>
  <i
    :class="`text-xs p-1 px-2 font-medium text-${color} bg-${bg} rounded not-italic inline-block text-center`"
  >
    <slot />
  </i>
</template>