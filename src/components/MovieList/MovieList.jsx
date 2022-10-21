import { useState, useEffect } from "react";
import { Box } from "components/Box";
import { getTrendingMovies } from "services/api";

export const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => {
            console.log(data.data);
            setMovies(prevState => [...prevState, ...data.data.results])
        })
    }, []);

    return(
        <Box as='ul'>
            {movies.map(movie => (
                movie.original_title ? <li key={movie.id}>{movie.original_title}</li> : <li key={movie.id}>{movie.original_name}</li>
            ))}
        </Box>
    )
};