// import { MoviesList } from '../components/MovieList/MovieList';
import { TrendingList } from '../components/TrendingList/TrendingList';
import { Box } from "components/Box";

export const Home = () => {
    return (
        <Box>
            <h2>Trending movies</h2>
            <TrendingList />
        </Box>
    )
};