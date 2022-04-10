import { useQuery, UseQueryReturn } from "@vue/apollo-composable";
import { defineStore } from "pinia";
import { computed, watch } from "vue";
import { useStore } from ".";
import { MainQuery, MainQueryVariables } from "../codegen/graphql";
import { GRAPH_WEB_URL } from "../config";
import MAIN_QUERY from "../graphql/Main.query.gql";

export interface GovernorState {
  queryResult: UseQueryReturn<MainQuery, MainQueryVariables>;
}

export const useGovernorStore = defineStore("governor", {
  state: (): GovernorState => {
    const store = useStore();
    const _this = useGovernorStore();
    const queryVariables = computed<MainQueryVariables>(() => ({
      account: store.account.toLowerCase(),
      erc20: store.chain?.erc20ContractAddress?.toLowerCase() ?? "",
      governor: store.chain?.governorContractAddress?.toLowerCase() ?? "",
    }));

    const state: GovernorState = {
      queryResult: useQuery<MainQuery, MainQueryVariables>(MAIN_QUERY, {
        account: "",
        erc20: "",
        governor: "",
      }),
    };

    state.queryResult.onResult((res) => {
      _this.ON_QUERY_RESULT(res.data);
    });

    watch(
      () => [queryVariables.value, store.chainId],
      ([vars]) => {
        state.queryResult.variables.value = vars as MainQueryVariables;
      },
      { deep: true }
    );

    return state;
  },
  actions: {
    ON_QUERY_RESULT(_result: MainQuery | undefined) {
      return; // logging in console automagically
    },
  },
  getters: {
    account: () => useStore().account.toLowerCase() ?? "",
    erc20ContractAddress: () =>
      useStore().chain?.erc20ContractAddress?.toLowerCase() ?? "",
    governorAddress: () =>
      useStore().chain?.governorContractAddress?.toLowerCase() ?? "",
    loading: (state) => state.queryResult.loading,
    result: (state) => state.queryResult.result,
    token: (state) => state.queryResult.result?.erc20,
    tokenBalance: (state) =>
      state.queryResult.result?.erc20?.balances?.[0]?.value || "0",
    proposals: (state) => state.queryResult.result?.governor?.proposals || [],
    tallyUrl: () => {
      const store = useStore();
      const url = `https://www.tally.xyz/governance/eip155:${store.chainId}:${store.chain?.governorContractAddress}`;
      return url;
    },
    subgraphUrl: () => GRAPH_WEB_URL,
    totalWeight: (state): string =>
      state.queryResult.result?.voting?.totalWeight.value || "0",
  },
});
