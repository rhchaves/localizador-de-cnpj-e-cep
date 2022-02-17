import axios from 'axios';

// //////////////////////////////////////
const listCnpj = ({ commit }, payload) => {
  commit('SEARCHING', true);

  axios.get(`https://.com.br/${payload}/`).then((response) => {
    commit('LIST_CNPJ', response.data);
    return response;
  });

  commit('SEARCHING', false);
};
// //////////////////////////////////////

export {
  listCnpj,
};
