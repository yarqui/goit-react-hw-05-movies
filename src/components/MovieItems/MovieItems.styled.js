import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: 200ms ease-in-out;
`;

export const MovieItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 200ms ease-in-out;

  &:hover {
    color: #ffffff;
    scale: 1.04;
  }
`;

export const ItemImage = styled.img`
  margin: auto;
`;

export const MovieLabel = styled.div`
  text-align: center;
`;
