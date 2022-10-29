import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import { MoviesList } from "components/MoviesList/MoviesList";

export const TrendingList = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => {
            setTrendingMovies(prevState => [...prevState, ...data])
        })
    }, []);

    return(
       <MoviesList movies={trendingMovies}/>
    )
};