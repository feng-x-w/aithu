import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  countImg:"",
  countName:""
}
export default new Vuex.Store({
  state
});