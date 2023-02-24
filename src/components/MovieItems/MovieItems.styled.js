import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: 200ms ease-in-out;
  &:hover {
    color: #ffffff;
  }
`;
