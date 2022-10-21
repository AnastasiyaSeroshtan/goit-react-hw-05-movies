// import { getTrendingMovies } from 'services/api';
import { Routes, Route, NavLink} from 'react-router-dom';
import { Box } from './Box';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';

export const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<div>Home</div>}/>
    //   <Route path='/movies' element={<div>Movies</div>}/>
    // </Routes>

   <Box>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
      </Routes>
   </Box>


  );
};

// getTrendingMovies().then(res => console.log(res.data.results))
// res.data.results[2].title