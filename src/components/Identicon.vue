<template>
  <img
    ref="img"
    :src="src || identicon"
    :width="size"
    class="identicon"
    :class="size > 50 ? 'rounded' : 'rounded-sm'"
  >
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import makeBlockie from "ethereum-blockies-base64";

export default defineComponent({
  name: "Identicon",
  props: {
    seed: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 45,
    },
    src: String,
  },
  setup(props) {
    return {
      identicon: computed(() => {
        const icon = makeBlockie(props.seed);
        return icon || "";
      }),
    };
  },
});
</script>

