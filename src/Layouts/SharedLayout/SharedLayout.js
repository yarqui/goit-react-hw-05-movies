import PAGE_NAMES from 'router/paths';
import { Container } from './SharedLayout.styled';

const { NavLink, Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to={PAGE_NAMES.homepage}>Home</NavLink>
          <NavLink to={PAGE_NAMES.movies}>Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
