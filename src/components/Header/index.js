import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  // useSelector ta pegando o estado do botaoClicado
  // useSelector esta em um estado global, ele pega o evento de tudo que esta no objeto state

  const botaoClicado = useSelector((state) => state.botaoClicado); // botaoClicado esta em um objeto do state
  return (
    <Nav>
      <Link to='/'>
        <FaHome size={24} />{' '}
      </Link>
      <Link to='/login'>
        <FaUserAlt size={24} />{' '}
      </Link>
      <Link to='/aassds'>
        <FaSignInAlt size={24} />{' '}
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
