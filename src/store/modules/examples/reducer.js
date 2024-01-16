/* eslint-disable no-console */

import * as types from '../types';

// define o estado inicial do botao
const initialState = {
  botaoClicado: false,
};

// state ta recebendo o objeto initialState
export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      // newState ta recebendo o objeto do state(JAMAIS manipular o state diretamente)
      const newState = { ...state };
      // newState recebe o estado oposto(caso o valor de newState é false, ele ira receber true)
      newState.botaoClicado = !newState.botaoClicado;
      console.log('sucesso.');
      return newState; // return o novo estado de newState
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro.');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição.');
      return state;
    }

    default:
      return state;
  }
};
