<script setup lang="ts">
import { useNftMinterStore } from "../store/nft-minter";
import { computed, ref, defineEmits } from "vue";
import { useIpfs } from "../hooks/useIpfs";
import { useFormat } from "../hooks/useFormat";
import { useStore } from "../store";
import { ethers } from "ethers";
import ListItem from "./ListItem.vue";

const ipfs = useIpfs();
const nftMinterStore = useNftMinterStore();
const store = useStore();
const format = useFormat();
const form = computed(() => nftMinterStore.form);
const validToAddress = computed(() => ethers.utils.isAddress(toAddress.value));
const toAddress = ref("");

const uploadMetaData = async () => {
  const res = await nftMinterStore.MINT_METADATA(form.value);
  if (!res) return;
  nftMinterStore.PATCH_FORM({
    metadataHash: res.metadataHash,
    tokenId: res.tokenId,
  });
};

const emit = defineEmits(["mint-finished", "mint-started"]);

const mint = async () => {
  const { tokenId, metadataHash } = form.value;
  if (!tokenId || !metadataHash || (toAddress.value && !validToAddress.value)) return;
  nftMinterStore
    .MINT(
      tokenId,
      metadataHash,
      nftMinterStore.mintedMetaData,
      toAddress.value ? toAddress.value : undefined
    )
    .then((res) => {
      if (res?.success) emit("mint-started");
      if (res?.tx) res.tx.wait().then(() => emit("mint-finished"));
    })
    .finally(() => {
      toAddress.value = "";
    });
};

const _formatToken = (value: string | number, decimals = 6) => {
  const chain = store.chain;
  if (!chain) return "";
  return format.formatToken(value, store.chain.symbol, store.chain.decimals, decimals);
};
</script>

<template>
  <ListItem
    v-if="form.name"
    title="Name"
    :value="form.name"
  />

  <ListItem
    v-if="form.description"
    title="Description"
    :value="form.description"
  />

  <ListItem
    v-if="form.tokenId"
    title="Token ID"
    :value="'#' + form.tokenId"
  />

  <ListItem
    v-if="form.file"
    title="Document"
  >
    <template #value>
      <StatusBadge
        v-if="!form.metadataHash"
        bg="slate-500"
        v-text="'Ready for upload'"
      />
      <StatusBadge
        v-else
        bg="teal-400"
        v-text="'Uploaded'"
      />
    </template>
  </ListItem>

  <ListItem
    v-if="form.metadataHash"
    title="IPFS Metadata Hash"
  >
    <template #value>
      <Button
        variant="link"
        :href="ipfs.getIpfsUrl(form.metadataHash)"
        v-text="format.truncate(form.metadataHash, 12)"
      />
    </template>
  </ListItem>

  <div v-if="!form.tokenId || !form.metadataHash">
    <hr class="my-5">

    <Button
      :disabled="nftMinterStore.mintingMetaData"
      variant="alternative"
      class="mb-2 rounded-md"
      @click="uploadMetaData()"
    >
      Mint IPFS MetaData (1/2)
      <Loader
        v-if="nftMinterStore.mintingMetaData"
        class="ml-2"
      />
    </Button>
  </div>

  <div v-if="form.tokenId && form.metadataHash && !nftMinterStore.mintingMetaData">
    <ListItem title="Recipient">
      <template
        v-if="!toAddress"
        #value
      >
        me -&nbsp;
        <Button
          variant="link"
          @click="toAddress = '0x'"
          v-text="'edit'"
        />
      </template>
      <template
        v-else
        #value
      >
        {{ format.shortAddress(toAddress) }} -&nbsp;
        <Button
          variant="link"
          @click="toAddress = ''"
          v-text="'cancel'"
        />
      </template>
    </ListItem>

    <Input
      v-if="toAddress"
      v-model="toAddress"
      placeholder="Recipient address 0x..."
      :class="!validToAddress && toAddress ? 'outline-pink-700' : ''"
    />

    <hr class="my-5">

    <Button
      :disabled="nftMinterStore.mintingNft"
      variant="alternative"
      class="mb-2 rounded-md"
      @click="mint()"
    >
      Mint Proof (2/2)
      <Loader
        v-if="nftMinterStore.mintingNft"
        class="ml-2"
      />
    </Button>
  </div>
</template>
