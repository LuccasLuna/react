import { createStore } from 'redux';

// define o estado inicial do botao
const initialState = {
  botaoClicado: false,
};

// state ta recebendo o objeto initialState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      // newState ta recebendo o objeto do state(JAMAIS manipular o state diretamente)
      const newState = { ...state };
      // newState recebe o estado oposto(caso o valor de newState é false, ele ira receber true)
      newState.botaoClicado = !newState.botaoClicado;

      return newState; // return o novo estado de newState
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
