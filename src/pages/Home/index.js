import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

function Home() {
  return (
    <>
      <h1>Gerenciador de Produtos</h1>
      <Link to="/insertClient">
        <button>Cadastrar CLiente</button>
      </Link>
    </>
  );
}

export default Home;
