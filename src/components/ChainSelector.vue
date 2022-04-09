<script lang="ts" setup>
import { defineEmits } from "vue";
import { chains } from "../lib/chains";
import { useStore } from "../store";

const store = useStore();
const isSupported = (chainId?: number) => !!chains.find(c => c.id === chainId)?.nftContractAddress;

defineEmits(['change', 'select']);
</script>


<template>
  <div
    v-for="chain of chains"
    :key="chain.id"
    class="flex flex-row cursor-pointer mx-2 px-4 py-2 mt-1 rounded hover:bg-slate-200 items-center transition duration-150"
    :class="{
      'bg-slate-200': store.chain?.id === chain.id,
      'opacity-30': !isSupported(chain.id),
    }"
    @click="$emit('select', chain)"
  >
    <span>
      <img
        :src="chain.logoURI"
        style="height: 30px; width: 30px; object-fit: cover"
        class="rounded-lg inline-block"
      >
    </span>
    <span class="font-medium ml-4">{{ chain.name }}</span>

    <div class="ml-auto flex items-center flex-row">
      <span
        v-if="store.chain?.id === chain.id"
        :class="`rounded-full ${store.account ? 'bg-teal-500' : 'bg-red-500'} w-2 h-2 inline-block`"
      />
    </div>
  </div>
</template>

