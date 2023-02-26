import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PAGE_NAMES from 'router/paths';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to={PAGE_NAMES.homepage}>Home</NavLink>
          <NavLink to={PAGE_NAMES.movies}>Movies</NavLink>
        </nav>
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
