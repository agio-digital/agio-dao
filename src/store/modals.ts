import { defineStore } from "pinia";

export interface ModalsState {
  [key: string]: boolean;
}

export const useModalsStore = defineStore("modals", {
  state: (): ModalsState => ({
    chains: false,
    presets: false,
  }),
  actions: {
    setModal(key: string, value: boolean) {
      this[key] = value;
    }
  }
})