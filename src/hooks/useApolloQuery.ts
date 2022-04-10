import { defaultClient } from "./useApollo";
import { ApolloQueryResult, OperationVariables } from "@apollo/client/core";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import {
  DocumentParameter,
  UseQueryOptions,
  VariablesParameter,
} from "@vue/apollo-composable/dist/useQuery";
import { ref } from "vue";

/**
 *
 * @param document GraphQL query to run in a promise
 * @param variables Variables for GraphQL query to run
 * @returns Promise
 */

//   options: OptionsParameter<TResult, TVariables> = {},
export function useApolloQuery<
  TResult = any,
  TVariables extends OperationVariables = OperationVariables
>(
  document: DocumentParameter<TResult, TVariables>,
  variables: () => VariablesParameter<TVariables> = () => ({} as TVariables),
  options: UseQueryOptions<TResult, TVariables> = {}
) {
  provideApolloClient(defaultClient);

  const enableLoginQuery = ref(false);
  const {
    onResult,
    loading: queryLoading,
    onError,
  } = useQuery(document, variables as any, () => ({
    enabled: enableLoginQuery.value,
    notifyOnNetworkStatusChange: false,
    fetchPolicy: "network-only",
    ...options,
  }));

  const apolloQuery = () =>
    new Promise<ApolloQueryResult<TResult>>((resolve, reject) => {
      enableLoginQuery.value = true;

      onResult((res) => {
        if (!res.loading) {
          enableLoginQuery.value = false;

          if (!res.data) {
            reject("no data");
          }
          resolve(res);
        }
      });

      onError((err) => {
        enableLoginQuery.value = false;
        console.error(err);
        reject(err);
      });
    });

  return {
    apolloQuery,
    queryLoading,
  };
}
