import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Pagina de login
        <small>Oi</small>
      </Title>
      <Paragrafo>alguma coisa</Paragrafo>
      <button type='button'>Enviar</button>
    </Container>
  );
}
