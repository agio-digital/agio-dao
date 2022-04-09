
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "./store";
import { useEthereum } from "./hooks/useEthereum";
import { useProvider } from "./hooks/useProvider";
import { useChain } from "./hooks/useChain";
import * as readme from "./lib/readme.md";
import useLocalStorageRef from "./hooks/useLocalStorage";
import { BigNumber } from "ethers";
import { useModalsStore } from "./store/modals";
import Footer from "./components/Footer.vue";

const readMeVal = ref(readme);

const modals = useModalsStore();
const store = useStore();
const readmeModal = useLocalStorageRef("readmeModalv2", true);
const userModal = ref(false);

const contractUrl = computed(() => {
  const chain = useChain(store.chainId);
  return useChain(chain?.chain?.value?.id || 0).contractUrl(chain?.chain?.value?.nftContractAddress || "")
});

const openChainsModal = () => modals.setModal("chains", true);

store.INIT().then(() => {
  const eth = useEthereum() as any;
  if (!eth) return;

  eth.on(
    "chainChanged",
    (newNetwork?: string, oldNetwork?: string) => {
      const chainId = BigNumber.from(newNetwork).toNumber();
      console.log("chainChanged", chainId)

      if (newNetwork !== oldNetwork) {
        store.INIT({ chainId, reset: true });
      }
    }
  );

  eth.on("accountsChanged", (newAccounts: string[]) => {
    console.log("accountsChanged", newAccounts[0])
    store.LOGOUT();
    store.INIT({ reset: true });
  });

  useProvider()?.on("block", (blockNumber) => {
    store.$patch({
      blockNumber: blockNumber || -1,
    });
  });
});

const handleNavigate = (path: string) => {
  if (path === "contract") {
    store.INIT({ reset: true });
    store.ADD_MESSAGE({
      title: "Refreshing...",
      duration: 3000,
      type: "info"
    })
  } else if (path === "info") {
    readmeModal.value = true
  } else if (path === "user") {
    userModal.value = true
  }
}


</script>

<template>
  <TopBar @navigate="handleNavigate" />

  <div class="main">
    <div class="aside shadow-xl">
      <NftMinter />
    </div>

    <div class="body bg-slate-300 p-8 px-6">
      <div>
        <EmptyState v-if="store.loading">
          <Loader class="mb-3" />
          <br>Loading...
        </EmptyState>

        <EmptyState v-else-if="store.unsupported">
          {{ store.chain?.name || 'Chain' }} is not supported.
          <div class="font-normal text-base mt-2">
            Please
            <Button
              variant="link"
              @click="openChainsModal()"
            >
              select
            </Button>&nbsp;a supported chain like
            <Button
              variant="link"
              @click="store.INIT({ chainId: 137 })"
            >
              Polygon
            </Button>
          </div>
        </EmptyState>



        <EmptyState
          v-text="'Nothing found..'"
        />
      </div>

      <div
        v-if="!store.loading"
        class="nfts"
      />

      <Footer />
    </div>
  </div>

  <Modal
    v-model="userModal"
    title="Account"
  >
    <template #body>
      <Account />
    </template>
  </Modal>

  <Modal
    v-model="readmeModal"
    :z-index="310"
    width="350"
    title="Welcome to AgioDAO"
  >
    <template #body>
      <div
        class="-mx-6 mb-6"
        style="width: calc(100% + 3rem)"
      />

      <Markdown
        v-if="readme.html"
        :replace="{
          '$contract_address': store.chain?.nftContractAddress,
          '$contract_url': contractUrl,
          '$version': store.version
        }"
        :value="readMeVal.html"
      />
    </template>
  </Modal>

  <div class="messages">
    <Message
      v-for="message of store.messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>


<style lang="scss">
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

.filters {
  margin: 2rem 1rem 0;
}

.messages {
  position: fixed;
  right: 0;
  top: var(--topbar-height);
  bottom: 0;
  width: 450px;
  max-width: calc(100vw - 50px);
  padding: 2rem;
  z-index: 9000;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  flex-direction: column-reverse;

  > * {
    margin-top: 1rem;
  }
}

.main {
  $aside-width-s: 420px;
  $aside-width-m: 500px;
  $aside-width-l: 800px;

  padding-top: var(--topbar-height);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: hidden;

  @media screen and (min-width: 1000px) {
    height: 100vh;
    display: flex;

    .aside {
      min-height: 100%;
      max-height: 100%;
      width: $aside-width-s;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    .body {
      max-height: 100%;
      overflow-y: auto;
      padding-left: 3.5rem;
      padding-right: 3.5rem;
      display: flex;
      flex-direction: column;
      min-height: 100%;
      width: calc(100vw - $aside-width-s);

      .nfts {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    .aside {
      width: $aside-width-m;
    }

    .body {
      width: calc(100vw - $aside-width-m);
    }
  }

  @media screen and (min-width: 2000px) {
    .aside {
      width: $aside-width-l;
    }

    .body {
      width: calc(100vw - $aside-width-l);
    }
  }
}

.nfts {
  --gutter: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0;
  justify-content: flex-start;
  width: calc(100% + var(--gutter));
  margin: 0 calc(var(--gutter) * -0.5);

  .nft-col {
    width: 100%;
    padding: calc(var(--gutter) / 2);
    padding-top: 0;
    padding-bottom: var(--gutter);

    @media screen and (min-width: 400px) {
      width: calc(50%);
    }

    @media screen and (min-width: 1400px) {
      width: calc(33.33%);
    }

    @media screen and (min-width: 1900px) {
      width: calc(25%);
    }

    @media screen and (min-width: 2200px) {
      width: calc(20%);
    }
  }
}
</style>
