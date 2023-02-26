import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;

export const NavStyled = styled.nav`
  padding: 20px;
  display: flex;
  gap: 10px;
  background-color: #1a1a1a;
  color: #e6e6e6;
`;

export const NavLinkStyled = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding: 10px;

  &.active {
    color: tomato;
    border-bottom: 2px solid tomato;
  }
`;
