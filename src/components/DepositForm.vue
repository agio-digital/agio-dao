<template>
  <div class="p-5 rounded border shadow-lg">
    <div class="flex flex-wrap md:flex-nowrap flex-row w-full mb-2">
      <button
        class="inline-flex outline-none appearance-none items-center flex-row p-3 bg-slate-200 rounded w-full md:w-48 md:mr-2 mb-2 md:mb-0 text-slate-600 hover:shadow-md hover:bg-slate-300 transition duration-150"
        :disabled="!token?.symbol"
        @click="modal = true"
      >
        <img
          v-if="token?.logoURI"
          :src="token?.logoURI"
          class="inline-block mr-3 w-8 rounded-lg"
          style="width: 30px; height: 30px; object-fit: cover"
        >
        <span class="font-semibold">{{ token?.symbol || '- Token -' }}</span>
        <span
          style="transform: scale(1, 0.5)"
          class="ml-auto text-sm mr-1"
        >▼</span>
      </button>

      <div class="w-full relative">
        <Input
          ref="inputRef"
          v-model.number="input"
          type="number"
          :min="0"
          :disabled="!token?.symbol || !store.account"
          :max="available.decimalPlaces(8, 1).toNumber()"
          style="padding-right: 160px"
          required
        />
        <button
          v-if="token && store.account"
          :disabled="token?.state !== 'pending'"
          class="opacity-50 font-medium absolute right-3 text-xs text-right"
          style="top: 50%; transform: translateY(-50%); width: 160px"
          @click="input = available.decimalPlaces(8, 1).toNumber()"
        >
          {{
            available.toNumber()
              ? format.formatToken(
                token.balance,
                token.symbol,
                token.decimals,
                8
              ) + " available"
              : "Insufficient balance"
          }}
        </button>
      </div>
    </div>

    <div>
      <Button
        v-if="!store.account"
        size="md"
        @click="store.INIT()"
      >
        connect
      </Button>
      <Button
        v-else-if="!store.chain?.nftContractAddress"
        size="md"
        @click="chainModal = true"
      >
        Select Chain
      </Button>
      <Button
        v-else-if="token?.state === 'approving'"
        disabled
        size="md"
      >
        Approving <Loader class="ml-1.5" />
      </Button>
      <Button
        v-else-if="token?.state === 'depositing'"
        disabled
        size="md"
      >
        Depositing <Loader class="ml-1.5" />
      </Button>

      <Button
        v-else-if="!store.isApproved(token?.allowance ?? '0')"
        size="md"
        @click="
          store.APPROVE_TOKEN(token!.address).catch((error) =>
            store.ADD_MESSAGE({
              title: 'Approve Error',
              text: error?.data?.message || error?.message || 'unknown error',
              type: 'error',
            })
          )
        "
      >
        Approve
      </Button>

      <Button
        v-else
        size="md"
        @click="input > 0 ? (keyModal = true) : null"
      >
        Deposit
      </Button>
    </div>

    <Modal v-model="modal">
      <template #header>
        Select a token
      </template>
      <div
        v-if="store.tokenListWithUserData.length === 0"
        class="px-6 mt-2 font-medium opacity-60"
      >
        No tokens available
      </div>
      <div
        class="mx-0 mb-2 mt-2"
        style="max-height: calc(100vh - 150px); overflow-y: auto"
      >
        <TokenListItem
          v-for="token of store.tokenListWithUserData.sort(
            (a, b) => +b.balance - +a.balance
          )"
          :key="token.address"
          :token="token"
          @click="
            store.SELECT_TOKEN(token);
            modal = false;
          "
        />
      </div>
    </Modal>

    <Modal v-model="keyModal">
      <template #header>
        Deposit
      </template>
      <template #body>
        <Input
          v-model="key"
          type="password"
          placeholder="create password"
          class="mb-2"
        />
        <Input
          v-model="repeatKey"
          type="password"
          placeholder="repeat password"
          class="mb-2"
        />
        <button
          v-if="token"
          class="uppercase truncate inline-block bg-sky-500 hover:bg-sky-600 text-white rounded px-3 mb-2 py-4 text-sm font-semibold w-full"
          @click="startDeposit"
        >
          Deposit {{ format.formatToken(input.toString(), token.symbol, 0) }}
        </button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { useFormat } from "../hooks/useFormat";
import { useStore } from "../store";
import { computed, defineComponent, ref, watch } from "vue";
import BN from "bignumber.js";
import TokenListItem from "./TokenListItem.vue";
import Button from "./Button.vue";
import { useModalsStore } from "../store/modals";

export default defineComponent({
  components: { TokenListItem, Button },
  setup() {
    const store = useStore();
    const token = computed(() =>
      store.tokenListWithUserData.find(
        (t) =>
          t.address.toLowerCase() === store.tokenInput?.address.toLowerCase()
      )
    );
    const modals = useModalsStore();

    const chainModal = computed({
      get: () => modals.chains,
      set: (val: boolean) => modals.setModal('chains', val)
    })

    const input = ref(0);
    const key = ref("");
    const repeatKey = ref("");
    const modal = ref(false);
    const keyModal = ref(false);
    const available = computed(() =>
      new BN(token.value?.balance || "0").div(
        new BN(10).pow(token.value?.decimals || 18)
      )
    );
    const reset = () => {
      key.value = "";
      repeatKey.value = "";
      input.value = 0;
      modal.value = false;
      keyModal.value = false;
    };
    watch(() => token.value?.address, reset);
    const startDeposit = () => {
      alert("start")
    };
    return {
      store,
      format: useFormat(),
      token,
      input,
      available,
      modal,
      keyModal,
      key,
      repeatKey,
      startDeposit,
      chainModal
    };
  },
});

</script>

<style lang="scss">
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

[disabled] {
  opacity: 0.6;
}
</style>
