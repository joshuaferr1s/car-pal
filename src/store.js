import { reactive } from "vue";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./lib/firebase";
import router from "./router";

export const state = reactive({
  user: null,
  authenticating: true,
  gas: [],
  repairs: [],
});

onAuthStateChanged(auth, user => {
  try {
    state.authenticating = true;
    if (!user) {
      state.user = null;
      router.push({ name: "Home" });
      return;
    }
    state.user = { uid: user.uid, email: user.email, name: user.displayName };
  } catch (error) {
    console.log("On auth state change error", error);
  } finally {
    state.authenticating = false;
  }
});

export const login = async () => {
  if (state.user) return;
  state.authenticating = true;
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log("Log in error", error);
  } finally {
    state.authenticating = false;
  }
};

export const logout = async () => {
  if (!state.user) return;
  state.authenticating = true;
  try {
    router.push({ name: "Home" });
    await signOut(auth);
  } catch (error) {
    console.log("Log out error", error);
  } finally {
    state.authenticating = false;
  }
};
