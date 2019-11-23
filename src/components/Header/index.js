import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink, Logo } from './style';

const Header = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">Cloud-PE</Link>
      </Logo>
      <NavLink>
        <Link to="/companies">All Companies</Link>
      </NavLink>
    </Nav>
  );
};

export default Header;
