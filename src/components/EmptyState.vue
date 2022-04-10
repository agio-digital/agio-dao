<template>
  <h1
    :class="className"
  >
    <slot />
  </h1>
</template>

<script lang="ts" setup>
import {defineProps, computed} from "vue";

const props = defineProps<{
  size?: string
}>()

const className = computed(() => {
  const size = props.size || 'xl';
  return `text-${size} font-medium rounded-xl p-${size === 'xl' ? '6' : '4'} bg-slate-100 text-center text-slate-500`
})
</script>