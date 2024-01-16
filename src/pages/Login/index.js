import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';

import * as exampleActions from '../../store/modules/examples/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      // eslint-disable-next-line no-console
      console.log(response);
    }
    getData();
  }, []);
  return (
    <Container>
      <Title>
        Pagina de login
        <small>Oi</small>
      </Title>
      <Paragrafo>alguma coisa</Paragrafo>
      <button type='button' onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
