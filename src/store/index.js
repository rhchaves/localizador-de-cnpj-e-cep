import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import buscadorCep from 'src/modules/buscador-cep/store';

// export default function (/* { ssrContext } */) {
//   const Store = new Vuex.Store({
//     modules: {
//       buscadorCep,
//     },

//     // enable strict mode (adds overhead!)
//     // for dev mode only
//     strict: process.env.DEBUGGING,
//   });

//   return Store;
// }

const store = new Vuex.Store({
  modules: {
    buscadorCep,
  },
});
export default store;

export { store };
