import { createApp } from "vue";
import { createPinia } from "pinia";
import PiniaLogger from "pinia-logger";
// @ts-ignore
import Particles from "particles.vue3";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import { Singletons } from "./hooks/useSingleton";

import Tx from "./components/Tx.vue";
import Modal from "./components/Modal.vue";
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
import Blockie from "./components/Identicon.vue";
import InputRange from "./components/InputRange.vue";
import InputFile from "./components/InputFile.vue";
import Loader from "./components/Loader.vue";
import Markdown from "./components/Markdown.vue";
import MediaPreview from "./components/MediaPreview.vue";
import EmptyState from "./components/EmptyState.vue";
import Footer from "./components/Footer.vue";
import Message from "./components/Message.vue";
import TopBar from "./components/TopBar.vue";
import Account from "./components/Account.vue";
import ListItem from "./components/ListItem.vue";
import StatusBadge from "./components/StatusBadge.vue";
import Badge from "./components/Badge.vue";

import { router } from "./router";

import "./styles/app.css";
import pkg from "../package.json";
import { apolloProvider } from "./hooks/useApollo";

console.log(
  `%c🕹️ ${pkg.name} ${pkg.version} 🕹️`,
  "font-weight: bold; color: #4caf50;"
);

const app = createApp(App);
const pinia = createPinia();

pinia.use(
  PiniaLogger({
    expanded: false,
  })
);
pinia.use(piniaPluginPersistedstate);
app.use(apolloProvider);
app.use(router);
app.use(Singletons);
app.use(pinia);
app.use(Particles);

app.component("Tx", Tx);
app.component("Modal", Modal);
app.component("Button", Button);
app.component("Input", Input);
app.component("InputRange", InputRange);
app.component("Badge", Badge);
app.component("InputFile", InputFile);
app.component("Markdown", Markdown);
app.component("Blockie", Blockie);
app.component("Loader", Loader);
app.component("MediaPreview", MediaPreview);
app.component("EmptyState", EmptyState);
app.component("Footer", Footer);
app.component("TopBar", TopBar);
app.component("Message", Message);

app.component("Account", Account);
app.component("ListItem", ListItem);
app.component("StatusBadge", StatusBadge);

app.mount("#app");
