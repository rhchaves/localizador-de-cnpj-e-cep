const SEARCHING = (state, payload) => {
  state.searching = payload;
};

const LIST_CNPJ = (state, payload) => {
  state.cnpj.push(payload);
};

export {
  SEARCHING,
  LIST_CNPJ,
};
