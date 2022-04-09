<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  title: [String, Number],
  value: [String, Number]
});
</script>

<template>
  <div class="flex flex-row justify-between my-2 text-sm items-center">
    <div class="opacity-80 truncate flex items-center w-1/2">
      <slot name="title-before" />
      {{ title }}
      <slot name="title" />
    </div>
    <div
      v-if="value || $slots.value"
      class="w-1/2 truncate text-right font-medium"
    >
      <slot name="value-before" />
      {{ value }}
      <slot name="value" />
    </div>
    <div v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>
