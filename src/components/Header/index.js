import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './style';
import logo from '../../assets/logo-nexti.png';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/insertClient">
            <a>Cadastrar CLiente</a>
          </Link>
          <Link to="/insertClient">
            <a>Cadastrar Produto</a>
          </Link>
          <Link to="/insertClient">
            <a>Cadastrar Pedido</a>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Usuario nome</strong>
            </div>

            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
