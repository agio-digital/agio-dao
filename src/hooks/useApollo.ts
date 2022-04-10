import { createHttpLink, HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { createApolloProvider } from "@vue/apollo-option";
import { ApolloClient, InMemoryCache, split } from "@apollo/client/core";
import { GRAPH_WS_URL, GRAPH_HTTP_URL } from "../config";

const cache = new InMemoryCache({
  addTypename: true,
});

const httpOptions: HttpLink.Options = {
  uri: GRAPH_HTTP_URL,
  headers: {},
};

export const graphqlWebSocketLink = new WebSocketLink({
  uri: GRAPH_WS_URL,
  options: {
    reconnect: true,
    timeout: 30000,
    lazy: true,
    inactivityTimeout: 30000,
    connectionParams: () => {
      return { headers: httpOptions.headers };
    },
  },
});

const httpLink = createHttpLink(httpOptions);

export const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  graphqlWebSocketLink as any,
  httpLink as any
);

export const defaultClient = new ApolloClient({
  link: splitLink,
  cache,
});

export const apolloProvider = createApolloProvider({
  defaultClient,
});
