import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PAGE_NAMES from 'router/paths';
import { Container, NavLinkStyled, NavStyled } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <NavStyled>
          <NavLinkStyled to={PAGE_NAMES.homepage}>Home</NavLinkStyled>
          <NavLinkStyled to={PAGE_NAMES.movies}>Movies</NavLinkStyled>
        </NavStyled>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
