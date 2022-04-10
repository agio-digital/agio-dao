<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "../store";
import { useNftMinterStore } from "../store/nft-minter";
import InputFile from "@/components/InputFile.vue";
import { fileToBase64 } from "../lib/fs";
import { useModalsStore } from "../store/modals";
import NftMintConfirm from "./NftMintConfirm.vue";
import { supportedMimes } from "../lib/supported-mimes";


const nftMinterStore = useNftMinterStore();
const store = useStore();
const confirmModal = ref(false);
const fileEl = ref<typeof InputFile | null>(null);
const form = computed(() => nftMinterStore.form);
const notify = store.ADD_MESSAGE;
const modals = useModalsStore();

const reset = () => {
  resetMedia();
  nftMinterStore.RESET_FORM();
  confirmModal.value = false;
};

const resetMedia = () => {
  imagePreview.value = "";
  fileEl.value?.reset();
  nftMinterStore.PATCH_FORM({
    file: null,
  });
};

const imagePreview = ref("");

const onFileChange = (e: Event) => {
  const file = (e?.target as HTMLInputElement)?.files?.[0];
  if (file) fileToBase64(file).then((v) => (imagePreview.value = v));
  else imagePreview.value = "";
  nftMinterStore.PATCH_FORM({ file });
};

const previewAndMint = () => {
  const empty =
    !form.value.description &&
    !form.value.name &&
    !form.value.file;
  const hasMedia = form.value.file;
  if (empty || store.unsupported) return;
  if (!hasMedia) return notify({ title: "File missing" });
  else if (!form.value.name) return notify({ title: "Name missing" });
  confirmModal.value = true;
};
</script>

<template>
  <div
    class="flex flex-wrap md:flex-nowrap flex-col w-full h-full drop-shadow-xl bg-white"
  >
    <div
      class="p-6"
      style="max-height: calc(100% - 72px); overflow-y: auto"
    >
      <div class="flex flex-row items-center">
        <h1 class="font-medium text-xl text-slate-500 font-brand">
          Mint NFT
        </h1>
      </div>

      <hr class="mt-3 mb-6">

      <div>
        <InputFile
          ref="fileEl"
          :accept="supportedMimes.join('')"
          label="Document"
          class="mb-2"
          @change="onFileChange"
        />
      </div>

      <hr class="my-6">

      <Input
        ref="inputRef"
        placeholder="Name (*)"
        required
        class="mb-2 text-sm py-3"
        :value="form.name"
        @input="($event) => nftMinterStore.PATCH_FORM({ name: $event.target.value })"
      />

      <Input
        placeholder="Description"
        required
        class="mb-2 text-sm py-3"
        :value="form.description"
        @input="($event) => nftMinterStore.PATCH_FORM({ description: $event.target.value })"
      />
    </div>

    <div class="mt-auto">
      <hr>
      <Button
        v-if="!store.account"
        size="md"
        variant="brand"
        class="rounded-none py-6"
        @click="store.LOGIN()"
      >
        connect
      </Button>

      <Button
        v-else-if="store.unsupported"
        size="md"
        variant="brand"
        class="rounded-none py-6 text-xl"
        @click="modals.setModal('chains', true)"
        v-text="'Select Chain'"
      />

      <Button
        v-else
        size="md"
        variant="brand"
        class="rounded-none py-6 text-xl"
        @click="previewAndMint()"
        v-text="'Preview and Mint'"
      />
    </div>
  </div>

  <Modal
    v-if="!store.loading && !store.unsupported"
    v-model="confirmModal"
    title="Preview and Mint"
    @close="reset()"
  >
    <template #body>
      <NftMintConfirm
        @mint-started="confirmModal = false"
        @mint-finished="reset()"
      />
    </template>
  </Modal>
</template>
