import { reactive } from "vue";

export const state = reactive({
  user: null,
  authenticating: true,
  gas: [],
  repairs: [],
});
