import axios from "axios";

const KEY = '4b55a17181d7341df65895a40b0e8946';
const BASEURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
    try {
        const res = await axios.get(`${BASEURL}trending/movie/day?api_key=${KEY}`);
        return res.data.results;
    }
    catch(error) {
        console.log(error)
    }
};

export const getMovieDetails = async (id) => {
    try {
        const res = await axios.get(`${BASEURL}movie/${id}?api_key=${KEY}`);
        return res.data;
    }
    catch(error) {
        console.log(error)
    }
};

export const getMovieCast = async (id) => {
    try {
        const res = await axios.get(`${BASEURL}movie/${id}/credits?api_key=${KEY}`);
        return res.data.cast;
    }
    catch(error) {
        console.log(error)
    }
};

export const getMovieReviews = async (id) => {
    try {
        const res = await axios.get(`${BASEURL}movie/${id}/reviews?api_key=${KEY}`);
        return res.data.results;
    }
    catch(error) {
        console.log(error)
    }
};

export const getSearchMovies = async (query) => {
    try {
        const res = await axios.get(`${BASEURL}search/movie?api_key=${KEY}&language=en-US&guery=${query}`);
        return res;
    }
    catch(error) {
        console.log(error)
    }
};