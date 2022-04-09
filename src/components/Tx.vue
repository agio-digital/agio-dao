<script lang="ts">
import { useChain } from "../hooks/useChain";
import { useStore } from "../store";
import { Tx } from "../types/tx";
import { computed, defineComponent, PropType } from "vue";
import { useFormat } from "../hooks/useFormat";

export default defineComponent({
  props: {
    tx: {
      type: Object as PropType<Tx<any>>,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const chain = computed(() => useChain(store.chainId));
    const format = useFormat();

    return {
      chain,
      store,
      format
    };
  },
});
</script>

<template>
  <a
    v-if="tx"
    :href="chain.txUrl(tx.hash)"
    target="_blank"
    class="rounded bg-slate-100 hover:bg-slate-200 hover:shadow-md transition duration-150 px-4 py-3 block no-underline cursor-pointer"
  >
    <div class="flex flex-row items-center">
      <span
        class="text-sky-500 font-semibold text-md mr-auto inline-block underline"
      >{{ format.shortAddress(tx.hash, 8) }}</span>
      <span class="text-xs ml-auto text-slate-500">{{ new Date(tx.timestamp).toLocaleTimeString() }}</span>
    </div>
    <div class="font-medium text-slate-500 text-sm">
      <span v-if="store?.token(tx?.payload?.address)?.name">{{ store.token(tx.payload.address)?.name }}</span>
      {{ tx.contractName }}
      <span v-if="tx?.payload?.tokenId">#{{ tx.payload.tokenId }}</span>
      ({{ tx.txState }})
    </div>
  </a>
</template>

<style lang="scss" scoped>
.tx {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  &-name {
    padding: 0.5rem;
  }

  &-action {
    button {
      width: 100px;
    }
  }
}
</style>
