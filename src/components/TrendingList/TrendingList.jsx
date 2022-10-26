// import { useState, useEffect } from "react";
// import { Link} from 'react-router-dom';
// import { getTrendingMovies } from "services/api";
// import { Link} from 'react-router-dom';
// import { Box } from "components/Box";


import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import { MoviesList } from "components/MoviesList/MoviesList";

export const TrendingList = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => {
            console.log(data);
            setTrendingMovies(prevState => [...prevState, ...data])
        })
    }, []);

    return(
       <MoviesList movies={trendingMovies}/>
    )
};