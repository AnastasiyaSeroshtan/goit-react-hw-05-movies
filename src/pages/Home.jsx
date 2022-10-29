import { TrendingList } from '../components/TrendingList/TrendingList';
import { Box } from "components/Box";

export const Home = () => {
    return (
        <Box as='main'>
            <h2>Trending movies</h2>
            <TrendingList />
        </Box>
    )
};