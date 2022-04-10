<template>
  <div class="text-sm my-2 flex flex-wrap justify-start items-start items-center">
    <div class="font-medium text-md mr-2 w-24 truncate">
      <span
        v-if="support === Support.For"
        class="text-teal-500"
      >{{ voteWeight }} {{ Support[support] }}</span>
      <span
        v-if="support === Support.Against"
        class="text-rose-600"
      >{{ voteWeight }} {{ Support[support] }}</span>
      <span
        v-if="support === Support.Abstain"
        class="text-slate-400"
      >{{ voteWeight }} {{ Support[support] }}</span>
      
      <span
        v-if="vote.receipt.reason"
        class="ml-1 cursor-pointer"
        @click="popup = true"
      >💬</span>



      <Modal
        v-model="popup"
        :title="'Reason 💬 '"
      >
        <template #body>
          {{ vote.receipt.reason }}
        </template>
      </Modal>
    </div>


    <span class="rounded-full overflow-hidden inline-block mx-2">
      <Blockie
        :seed="vote.voter.id"
        :size="20"
      />
    </span>
    <Button
      variant="link"
      :href="chain.addressUrl(vote.voter.id)"
    >
      {{ format.shortAddress(vote.voter.id || "") }}
    </Button>

    <time class="ml-auto">
      <Button
        variant="link"
        :href="chain.txUrl(vote.transaction.id)"
        :title="chain.txUrl(vote.transaction.id)"
      >{{ new Date(vote.timestamp * 1000).toLocaleTimeString() }} {{ new Date(vote.timestamp * 1000).toLocaleDateString() }}</Button>
    </time>
  </div>
</template>

<script lang="ts" setup>
import { Vote } from '../types/vote';
import { computed, defineProps, ref } from "vue";
import { useChain } from '../hooks/useChain';
import { useStore } from '../store';
import { useFormat } from '../hooks/useFormat';
import { Support } from "../types/support-enum";
import { BN } from '../lib/utils';
import Modal from './Modal.vue';

const props = defineProps<{
  vote: Vote
}>();

const store = useStore();
const chain = computed(() => useChain(store.chain?.id ?? -1));
const format = useFormat();
const support = computed(() => props.vote.receipt.support.support);
const voteWeight = computed(() => BN(props.vote.receipt.weight).div(BN(10).pow(18)));
const popup = ref(false);
</script>