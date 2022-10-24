import { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import { Box } from "components/Box";
import { getTrendingMovies } from "services/api";

export const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => {
            // console.log(data);
            setMovies(prevState => [...prevState, ...data])
        })
    }, []);

    return(
        <Box as='ul'>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                    {movie.title}
                    </Link>
                </li>
            ))}
        </Box>
    )
};