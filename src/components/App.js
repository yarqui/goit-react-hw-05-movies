//  TODO: use this -> generatePath(PAGE_NAMES,{dynamicParam})
// TODO: make state machine
// TODO: lazy import
// TODO: styles + displayName in styled components

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PAGE_NAMES from 'router/paths';

const SharedLayout = lazy(() => import('../Layouts/SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path={PAGE_NAMES.homepage} element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path={PAGE_NAMES.movies} element={<Movies />}></Route>
        <Route path={PAGE_NAMES.movieDetails} element={<MovieDetails />}>
          <Route path={PAGE_NAMES.cast} element={<Cast />}></Route>
          <Route path={PAGE_NAMES.reviews} element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
