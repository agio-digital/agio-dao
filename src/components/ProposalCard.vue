<script lang="ts" setup>
import {
  computed,
  defineProps,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
} from "vue";
import { useChain } from "../hooks/useChain";
import { useFormat } from "../hooks/useFormat";
import { useRouter } from "../router";
import { useStore } from "../store";
import ListItem from "./ListItem.vue";
import type { Proposal } from "../types/proposal";
import { useGovernorStore } from "../store/governor";
import makeBlockie from "ethereum-blockies-base64";
import { Support } from "../types/support-enum";
import Vote from "./Vote.vue";
import EmptyState from "./EmptyState.vue";
import { uniqBy } from "lodash";
import Badge from "./Badge.vue";
import BigNumber from "bignumber.js";
import { formatMs } from "../hooks/useDay";

const props = defineProps<{
  proposal: Proposal
}>();

const loaded = ref(false);
const router = useRouter();
const { proposal } = toRefs(props);
const store = useStore();
const format = useFormat();
const isOpen = computed(
  () => proposal.value && (router.currentRoute.value.query.proposalId + "") === proposal.value.id
);
const chain = computed(() => useChain(store.chain?.id ?? -1));
const governor = useGovernorStore();
const gatewayUrl = "https://gateway.pinata.cloud/ipfs/";
const placeholderHash = "QmVK6K4REN9vgQnaUctcdmXqo2XgYaein4xUUjNtedonbF";
const placeholder = gatewayUrl + placeholderHash;
const card = ref<HTMLDivElement | null>(null);
const toAddress = ref("");
const transferModal = ref(false);

const onKeydown = (e: any) => e.code === "Escape" && close();

onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
});

onMounted(() => {
  loaded.value = true;
  document.addEventListener("keydown", onKeydown);
});

const close = () => {
  toAddress.value = "";
  transferModal.value = false;
  router.push({
    path: "/",
    query: {},
  });
};

const open = () => {
  router.push({
    path: "/",
    query: {
      proposalId: proposal.value.id,
    },
  });
};

type Status = "active" | "queued" | "canceled" | "executed" | "unknown";

const plural = (word: string, size: number, suffix = "s") => size === 1 ? word : word + suffix;

const status = computed<Status>(() => {
  const { canceled, startBlock, endBlock, queued, executed } = proposal.value;
  const { blockNumber } = store;
  if (canceled) return "canceled"
  else if (executed) return "executed"
  else if (queued) return "queued"
  else if (endBlock > blockNumber && startBlock < blockNumber) return "active"
  else return "unknown";
});

const statusColor = (status: Status) => {
  if (status === "active") return 'bg-teal-400'
  else if (status === "canceled") return 'bg-red-500'
  else return "bg-slate-400";
}

const totalFor = computed(() => proposal.value.votecast.filter(v => v.receipt.support.support === Support.For).map(v => new BigNumber(v.receipt.weight || "0").div(10 ** 18)).reduce((a, b) => a += b.toNumber(), 0))
const totalAbstain = computed(() => proposal.value.votecast.filter(v => v.receipt.support.support === Support.Abstain).map(v => new BigNumber(v.receipt.weight || "0").div(10 ** 18)).reduce((a, b) => a += b.toNumber(), 0))
const totalAgainst = computed(() => proposal.value.votecast.filter(v => v.receipt.support.support === Support.Against && v.receipt.weight).map(v => new BigNumber(v.receipt.weight || "0").div(10 ** 18)).reduce((a, b) => a += b.toNumber(), 0))
const totalVoters = computed(() => uniqBy(proposal.value.votecast, v => v.voter.id).length)
const totalVotes = computed(() => proposal.value.votecast.map(v => new BigNumber(v.receipt.weight || "0").div(10 ** 18)).reduce((a, b) => a += b.toNumber(), 0));

const voteBar = computed(() => {
  return [totalFor.value / totalVotes.value, totalAgainst.value / totalVotes.value, totalAbstain.value / totalVotes.value]
})

const proposalUrl = computed(() => governor.tallyUrl + '/proposal/' + proposal.value.proposalId)
</script>

<template>
  <Transition name="fade">
    <div
      v-if="loaded && isOpen"
      class="backdrop bg-slate-800 opacity-90"
      @click="close"
    />
  </Transition>
  <Transition name="fade">
    <div
      v-if="loaded"
      ref="card"
      class="rounded-md overflow-hidden shadow-lg hover:shadow-2xl nft bg-white transition"
      :class="isOpen && 'is-open'"
    >
      <div
        class="header cursor-pointer"
        @click="open()"
      >
        <button
          v-if="isOpen"
          class="font-medium opacity-80 hover:opacity-100 p-3 pr-4 text-2xl absolute right-0 top-0 z-10"
          @click.stop="close()"
          v-text="'×'"
        />

        <div class="header-bg">
          <img
            width="500"
            height="300"
            :src="makeBlockie(proposal.id)"
          >
        </div>

        <div
          v-if="placeholder"
          class="header-image border"
        >
          <img
            :src="makeBlockie(proposal.id)"
            width="30"
            height="30"
            class="header-logo shadow-lg"
          >
        </div>

        <div class="header-title">
          <div
            class="text-xl text-center mb-2 truncate brand-heavy px-1 text-shadow-heavy"
            :class="isOpen ? 'text-2xl lg:text-3xl' : ''"
          >
            <Markdown
              :prose="false"
              :value="proposal.description"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-row items-center flex-wrap px-4 py-3 text-sm font-medium">
        <div class="flex text-slate-600 mb-1 w-full items-center">
          <span class="mr-1">
            <Badge :class="statusColor(status)" />&nbsp;{{ status }}
          </span>

          <span class="ml-auto font-semibold mr-2">{{ totalVotes }}&nbsp;{{ plural('vote', totalVotes) }}</span>
          <span class="text-xs text-slate-400">({{ totalVoters }}&nbsp;{{ plural('address', totalVoters, "es") }})</span>
        </div>

        <div
          class="flex flex-row w-full rounded overflow-hidden text-white text-center uppercase font-bold bg-slate-200"
          :class="isOpen ? 'h-7' : 'h-4'"
          style="font-size: 9px;"
        >
          <span
            class="bg-teal-400 h-full flex items-center justify-center"
            :style="`width: ${voteBar[0] * 100}%;`"
            v-text="totalFor ? `${totalFor} for` : ''"
          />
          <span
            class="bg-pink-700 h-full flex items-center justify-center"
            :style="`width: ${voteBar[1] * 100}%;`"
            v-text="totalAgainst ? `${totalAgainst} against` : ''"
          />
          <span
            class="bg-slate-400 h-full flex items-center justify-center"
            :style="`width: ${voteBar[2] * 100}%;`"
            v-text="totalAbstain ? `${totalAbstain} abstained` : ''"
          />
        </div>

        <div
          v-if="isOpen"
          class="w-full mt-2"
        >
          <Button
            variant="secondary"
            size="s"
            :href="proposalUrl"
          >
            Vote  
          </Button>
        </div>
      </div>

      <div
        v-if="isOpen"
        class="body-content -mb-2 bg-slate-100 border-t pb-1"
        style="max-height: calc(100vh - 390px); overflow-y: auto"
      >
        <div class="text-m mb-2 truncate px-4 pt-4">
          <div
            v-if="proposal?.description"
            class="mb-5"
          >
            <div
              class="font-semibold border-b pb-2 mb-2"
              v-text="'Description'"
            />

            <ListItem>
              <template #title>
                <Markdown
                  :prose="false"
                  :value="proposal.description"
                />
              </template>
            </ListItem>
          </div>

          <div
            class="font-semibold border-b pb-2 mb-2"
            v-text="'Details'"
          />

          <ListItem title="status">
            <template #value>
              <Badge
                v-if="status === 'active'"
                class="bg-teal-300"
              />
              {{ status }}
            </template>
          </ListItem>

          <ListItem
            title="ID"
            :value="format.shortAddress(proposal.proposalId)"
          />

          <ListItem
            title="created by"
            :value="format.shortAddress(proposal.proposer.id)"
            :value-href="chain.addressUrl(proposal.proposer.id)"
          />

          <ListItem
            title="starts at"
            :value="proposal.startBlock"
            :value-href="chain.blockUrl(proposal.startBlock)"
          />

          <ListItem
            title="expires at"
            :value="proposal.endBlock"
            :value-href="chain.blockUrl(proposal.endBlock)"
          />

          <ListItem
            title="duration"
            :value="formatMs((proposal.endBlock - proposal.startBlock) * (chain?.chain?.value?.blockSpeed || 0))"
          />

          <ListItem
            v-if="proposal.id"
            title="external link"
          >
            <template #value>
              <Button
                variant="link"
                :href="proposalUrl"
                target="_blank"
                v-text="`Open on Tally`"
              />
            </template>
          </ListItem>

          <div
            class="font-semibold border-b mt-5 pb-2 mb-2"
            v-text="`Votes (${totalVotes})`"
          />

          <EmptyState
            v-if="!(proposal.votecast || []).length"
            size="sm"
            v-text="'Nothing to see here...'"
          />
          <Vote
            v-for="vote of proposal.votecast || []"
            :key="vote.id"
            :vote="vote"
          />
        </div>
      </div>

      <div
        v-if="!isOpen"
        class="p-4 py-3 flex border-t"
      >
        <Button
          variant="secondary"
          size="s"
          @click="open"
        >
          Open
        </Button>
      </div>
    </div>
  </Transition>

  <!-- <Modal
    v-model="transferModal"
    :title="`Transfer #${nft.id}`"
  >
    <template #body>
      <NftTransfer
        :nft="nft"
        @transfer-started="transferModal = false"
      />
    </template>
  </Modal>-->
</template>


<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 49;
}

.is-open {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 300;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 30px);
  border-radius: 0.5rem;
}

.header {
  position: relative;
  aspect-ratio: 16 / 9;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  background: url();
  overflow: hidden;

  &-bg {
    width: 100%;
    aspect-ratio: inherit;
    display: block;
    border-radius: 0;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    background: black;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      display: block;
      filter: blur(20px);
      transform: scale(150%);
      transform-origin: center;
    }
  }

  &-video {
    width: 100%;
    aspect-ratio: inherit;
    display: block;
    border-radius: 0;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    background-size: cover;
    background-position: center;
    transform-origin: center;
    background: black;
    z-index: 2;

    video {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      opacity: 0.5;
      object-fit: cover;
      background-color: black;
      height: 100%;
      width: 100%;
      object-position: center;
    }
  }

  &-image {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    display: block;
    overflow: hidden;
    z-index: 3;

    img {
      display: inline-block;
      object-fit: cover;
      margin: auto;
      height: 100%;
      width: 100%;
    }
  }

  &-title {
    position: relative;
    margin-top: 0.75rem;
    z-index: 3;
    max-width: calc(100% - 2rem);
  }
}
</style>
