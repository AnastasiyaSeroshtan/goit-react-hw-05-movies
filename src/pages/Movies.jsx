
// import { Box } from "components/Box";
// import { MoviesList } from "components/MoviesList/MoviesList";
// import { useState, useEffect } from "react";
// import { getSearchMovies } from "services/api";
// import { Form } from '../components/Form/Form';


// export const Movies = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchMovies, setSearchMovies] = useState(null);

//     useEffect(() => {
//         if (searchQuery=== '') {
//             return
//           }
//         getSearchMovies(searchQuery).then(data => {
//             console.log('data', data);
//             setSearchMovies(data);
//         })
//     }, [searchQuery]);

//     const handleFormSubmit = (query) => {
//         setSearchQuery(query)
//     };
// console.log('searchQuery', searchQuery)
// if (searchQuery === null) {
//     return;
//   }
//     return(
//         <Box>
//             <h2>Movies</h2>
//             <Form onFormSubmit={handleFormSubmit}/>
//             {searchMovies && <MoviesList movies={searchMovies}/>}
//         </Box>
//     )
// };




// 2 varian
import { Box } from "components/Box";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "services/api";
import { Form } from '../components/Form/Form';
import { MoviesList } from "components/MoviesList/MoviesList";

export const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!query) {
            return
        }
        getSearchMovies(query).then(data => {
    console.log('data', data);
    setSearchMovies(prevState => [...prevState, ...data]);
})
    }, [query]);

    const handleFormSubmit = (query) => {
        setSearchParams({query})
        console.log('query', query)
    };

    return(
        <Box>
            <h2>Movies</h2>
            <Form onFormSubmit={handleFormSubmit}/>
                {searchMovies && <MoviesList movies={searchMovies}/>}
        </Box>
    )
};




