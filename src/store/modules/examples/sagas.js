import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

// essa promise esta apenas simulando uma requisição para uma api
const requisicao = () =>
  // eslint-disable-next-line no-new
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });
// função geradora
function* exempleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error('Deu erro.');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exempleRequest)]);
