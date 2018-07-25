import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  countImg:"",
  countName:"",
  Item:-1
}
// const mutations={
//   add(state){
//       state.Item=0;
//   },
//   reduce(state){
//       state.Item=-1;
//   }
// }
export default new Vuex.Store({
  state
  // ,mutations
});