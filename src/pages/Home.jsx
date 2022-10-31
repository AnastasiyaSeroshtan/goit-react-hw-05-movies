import { TrendingList } from '../components/TrendingList/TrendingList';
import { Box } from "components/Box";

const Home = () => {
    return (
        <Box as='main'>
            <h2>Trending movies</h2>
            <TrendingList />
        </Box>
    )
};

export default Home;