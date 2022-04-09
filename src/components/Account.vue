<template>
  <div
    v-if="!store.loggedIn"
    class="prose"
  >
    <h4 class="font-medium flex items-center">
      <span class="text-slate-500">
        Not connected
        <span class="w-2 h-2 ml-2 rounded-full bg-red-500 inline-block" />
      </span>
    </h4>

    <Button
      size="sm"
      @click="store.LOGIN"
    >
      Connect
    </Button>
  </div>
  <div
    v-else
    class="prose"
  >
    <h4 class="font-medium flex items-center">
      <span class="text-slate-500">Connected to {{ store.chain?.name }}</span>
      <span class="w-2 h-2 ml-2 rounded-full bg-teal-400 inline-block" />
      <button
        class="font-medium transition ml-auto text-sky-500 underline hover:text-sky-700"
        @click="store.LOGOUT"
      >
        Logout
      </button>
    </h4>
    <div class="text-center" /> 
    <code
      class="cursor-pointer my-3 items-center rounded font-sans text-xs bg-slate-100 hover:bg-slate-200 transition duration-150 hover:shadow-md text-slate-600"
      @click="store.COPY(store.account)"
    >
      <Blockie
        :seed="store.account"
        class="rounded mr-2 my-1"
        :size="20"
      />
      {{ format.shortAddress(store.account, 12) }}
      <span class="ml-auto mr-1 text-slate-500">📋</span>
    </code>
    <a
      target="_blank"
      :href="chain.addressUrl(store.account)"
      class="font-medium transition ml-auto text-sky-500 underline hover:text-sky-700 mr-3"
    >View on Explorer<small>↗̱</small></a>
    <a
      target="_blank"
      :href="chain.nftAccountUrl(store.account)"
      class="font-medium transition ml-auto text-sky-500 underline hover:text-sky-700"
    >View on OpenSea<small>↗̱</small></a>
    <!-- <button
      class="ml-3 font-medium transition text-sky-500 underline hover:text-sky-700"
      @click="store.COPY(store.account)"
    >
      Copy address 📋
    </button> -->

    <hr class="my-5">

    <h4 class="font-medium flex items-center text-slate-500">
      Recent transactions
    </h4>
    <Tx
      v-for="tx of store.txs"
      :key="tx.hash"
      :tx="tx"
      class="mt-2 mb-2"
    />
    <p
      v-if="store.txs.length === 0"
      class="text-slate-400 font-regular"
    >
      Transactions will appear here
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from '../store';
import { useFormat } from '../hooks/useFormat';
import { useChain } from '../hooks/useChain';

const store = useStore();
const format = useFormat();
const chain = computed(() => useChain(store.chainId));

</script>

<style scoped>
.prose code {
  display: flex !important;
}
</style>