<script lang="ts">
import { useConfigureChain, useEthereum } from "../hooks/useEthereum";
import { useFormat } from "../hooks/useFormat";
import { Chain } from "../lib/chains";
import { useStore } from "../store";
import { computed, defineComponent } from "vue";
import ChainSelector from "./ChainSelector.vue";
import Button from "./Button.vue";
import { useModalsStore } from "../store/modals";

export default defineComponent({
  components: {
    ChainSelector,
    Button,
  },
  emits: ['navigate'],
  setup() {
    const format = useFormat();
    const store = useStore();
    const modals = useModalsStore();

    const chainModal = computed({
      get: () => modals.chains,
      set: (val: boolean) => modals.setModal('chains', val)
    })

    const changeChain = async (chain: Chain) => {
      const eth = useEthereum();
      try {
        if (eth?.request) {
          await eth
            .request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x" + chain.id.toString(16) }],
            })

        }
        store.INIT({
          chainId: chain.id,
          reset: true
        })
      } catch (e: any) {
        console.log(e);
        const UNRECOGNIZED_CHAINID = 4902;
        const ethereum = useEthereum();
        if (e?.code === UNRECOGNIZED_CHAINID && ethereum.isMetaMask) {
          store.ADD_MESSAGE({ title: "Unrecognized Chain. Add to MetaMask first" });
          useConfigureChain(chain.id);
        } else {
          store.ADD_MESSAGE({ title: typeof e === "object" && e.message ? e.message : "Operation Cancelled" })

        }
      }
    };

    return {
      store,
      format,
      changeChain,
      chainModal,
    };
  },
});
</script>


<template>
  <div class="topbar bg-white shadow-lg p-4 px-4">
    <div
      class="logo pr-2 sm:ml-2 text-slate-600 text-sm sm:text-base"
      @click="store.INIT()"
    >
      <span class="logo-img">
        <img
          src="https://ipfs.io/ipfs/QmNSry1xBkM1yjZUMHVgLKGZArKFbdN8VYZ9nW77cfpcvj"
          alt="AgioDAO"
        >
      </span>
      <span class="logo-type text-slate-800 md:text-xl font-brand uppercase">
        <span class="hidden sm:inline-block text-rose-800">Agio</span>DAO
      </span>

      <a
        class="text-2xs rounded bg-teal-400 text-white h-5 py-0 px-1 ml-3 origin-left  hidden md:inline-block logo-badge font-brand"
        target="_blank"
        href="https://nft.ethglobal.com/"
      >NFTHACK'22</a>
    </div>

    <button
      class="font-semibold text-sm text-slate-700 mr-1 cursor-pointer hover:bg-slate-200 px-2 py-1 rounded"
      @click="$emit('navigate', 'info')"
    >
      ℹ️&nbsp;About
    </button>

    <div
      class="chain font-semibold text-sm relative text-slate-700 cursor-pointer transition mr-2 rounded hover:bg-slate-200 px-1 sm:px-2 py-1"
      @click="chainModal = true"
    >
      <img
        v-if="store.chain"
        :src="store.chain?.logoURI"
        style="width: 20px; height: 20px; object-fit: cover"
        class="rounded-lg md:mr-2"
      >
      <a
        v-if="store.chainId === -2"
        target="_blank"
        href="https://metamask.io/"
      >Get MetaMask</a>
      <span
        v-else-if="store.chainId > 0"
        class="md:inline hidden"
      >
        <span>
          {{
            store.chain?.name || "Select Chain"
          }}
        </span>
        <span
          :title="'block ' + store.blockNumber.toString()"
          :class="`rounded-full ${store.account && store?.chain?.name ? 'bg-teal-400' : 'bg-red-500'} w-2 ml-2 h-2 inline-block`"
        />
      </span>
    </div>

    <button
      v-if="store.account"
      class="address appearance-none flex items-center content-center text-xs font-semibold rounded-md overflow-hidden hover:shadow transition bg-slate-200 hover:bg-slate-300 py-0 px-0 text-slate-500 hover:text-slate-700 truncate"
      @click="$emit('navigate', 'user'); store.GET_ACCOUNT_INFO()"
    >
      <span class="px-2 pl-1.5 py-1.5 bg-slate-500 text-white hidden sm:block">
        {{ format.formatEth(store.balance || "0", "", 4) }}
        <span
          class="hidden md:inline"
        >{{ store.chain?.symbol }}</span>
      </span>

      <span class="flex flex-row px-2 py-1.5 font-semibold content-center items-center">
        <span>{{ format.shortAddress(store.account, 3) }}</span>
        <Blockie
          :seed="store.account"
          :size="18"
          class="rounded-sm hidden md:inline-block -mr-1"
        />
      </span>
    </button>

    <Button
      v-else
      variant="secondary"
      size="xs"
      display="inline"
      @click="store.LOGIN"
    >
      Connect
    </Button>
  </div>

  <Modal v-model="chainModal">
    <template #header>
      Select Chain
    </template>
    <div
      class="mb-2 mt-1"
      style="max-height: calc(100vh - 150px); overflow-y: auto"
    >
      <ChainSelector
        @select="
          changeChain($event);
          chainModal = false;
        "
      />
    </div>
  </Modal>
</template>


<style lang="scss">
* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --topbar-height: 65px;
}

.topbar {
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: var(--topbar-height);
  align-items: center;
  justify-content: flex-end;

  .logo {
    margin-right: auto;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;

    &-type {
    }

    &-badge {
      line-height: 1.2rem;
      padding-right: 0.4rem;
      transform-origin: left center;
    }

    &-img {
      $size: 25px;
      display: inline-block;
      width: $size;
      height: $size;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 0.5rem;

      img {
        display: block;
        width: 100%;
      }
    }

    small {
      font-weight: 300;
      opacity: 0.9;
      font-size: 0.9em;
    }
  }

  .address,
  .chain {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .identicon {
    margin-left: 0.5rem;
  }

  .action {
    margin-left: 1rem;
    font-size: 1rem;
  }
}
</style>