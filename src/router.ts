import { defineComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  routes: [
    {
      path: "/",
      component: defineComponent({}),
    },
  ],
  history: createWebHistory(),
});

export const useRouter = () => router;
