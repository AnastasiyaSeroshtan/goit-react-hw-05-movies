// import { getTrendingMovies } from 'services/api';
import { Routes, Route, NavLink} from 'react-router-dom';
import { Box } from './Box';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
   <Box>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieDetails />}/>
      </Routes>
   </Box>


  );
};

// getTrendingMovies().then(res => console.log(res.data.results))
// res.data.results[2].title