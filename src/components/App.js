//  use this -> generatePath(PAGE_NAMES,{dynamicParam})

import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Reviews from './Reviews/Reviews';
import SharedLayout from '../Layouts/SharedLayout';
import PAGE_NAMES from 'router/paths';

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
        <Route path={PAGE_NAMES.homepage} element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
