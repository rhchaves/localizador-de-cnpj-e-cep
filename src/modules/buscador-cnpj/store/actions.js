import axios from 'axios';

// //////////////////////////////////////
const listCnpj = ({ commit }, payload) => {
  commit('SEARCHING', true);

  const config = {
    method: 'get',
    url: `https://api.cnpja.com/office/${payload}`,
    headers: {
      Authorization: '9ecfc0ff-426b-49a4-a8c5-21ce8e2778b5-4de37ca7-7a93-4717-95d0-4680acd1b17a',
    },
  };

  axios(config).then((response) => {
    commit('LIST_CNPJ', response.data);
    console.log(response.data);
    return response;
  });

  commit('SEARCHING', false);
};
// //////////////////////////////////////

export {
  listCnpj,
};
