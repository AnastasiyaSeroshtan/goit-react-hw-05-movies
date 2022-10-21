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
                <li key={movie.id}>{movie.title}</li>
            ))}
        </Box>
    )
};