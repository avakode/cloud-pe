import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  background-color: #000;
  height: 70px;
`;

export const NavLink = styled.li`
  a {
    padding: 5px 15px;
    display: block;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const Logo = styled.li`
  a {
    padding: 5px 15px;
    display: block;
    text-decoration: none;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }
`;
