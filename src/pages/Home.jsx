import { MoviesList } from '../components/MovieList/MovieList';
import { Box } from "components/Box";

export const Home = () => {
    return (
        <Box>
            <h2>Trending movies</h2>
            <MoviesList />
        </Box>
    )
};