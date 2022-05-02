import { createStore } from "vuex";
import actions from "./product.actions";
import mutations from "./product.mutations";
import state from "./product.state";

export default createStore({
  actions,
  mutations,
  state,
});
