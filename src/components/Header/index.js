import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';
import logo from '../../assets/logo-nexti.png';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="nexti" img />
      </Link>
    </Container>
  );
}

export default Header;
