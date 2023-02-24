import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import { Container } from './App.styled';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
          <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
