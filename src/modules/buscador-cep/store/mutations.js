const SEARCHING = (state, payload) => {
  state.searching = payload;
};

const LIST_CEP = (state, payload) => {
  state.cep = payload;
};

export {
  SEARCHING,
  LIST_CEP,
};
