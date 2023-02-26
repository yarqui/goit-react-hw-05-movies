import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieSection = styled.section`
  margin: 14px;
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  padding: 4px;
  margin-bottom: 14px;
  margin-right: 14px;
  text-decoration: none;
  border-bottom: 2px solid;
  color: inherit;
  transition: 250 ease-in-out;

  &:hover {
    color: tomato;
  }
`;

export const MainMovieTitle = styled.h2`
  margin: 12px 0;
  color: tomato;
`;

export const SecondaryTitle = styled.h2`
  color: tomato;
`;

export const MovieDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;
