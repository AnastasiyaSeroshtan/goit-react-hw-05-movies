import axios from "axios";

const KEY = '4b55a17181d7341df65895a40b0e8946';

const BASEURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
    try {
        const res = await axios.get(`${BASEURL}trending/all/day?api_key=${KEY}`);
        return res;
    }
    catch(error) {
        console.log(error)
    }
}