

import { Box } from "components/Box";
import { useState, useEffect } from "react";
import { getSearchMovies } from "services/api";
import { Form } from '../components/Form/Form';


export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery=== '') {
            return
          }
        getSearchMovies(searchQuery).then(data => console.log('data', data))
    }, [searchQuery]);

    const handleFormSubmit = (title) => {
        setSearchQuery(title)
    };
console.log('searchQuery', searchQuery)
if (searchQuery === null) {
    return;
  }
    return(
        <Box>
            <h2>Movies</h2>
            <Form onFormSubmit={handleFormSubmit}/>
        </Box>
    )
};






// 2 varian
// import { Box } from "components/Box";
// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { getSearchMovies } from "services/api";
// import { Form } from '../components/Form/Form';


// export const Movies = () => {
//     // const [searchQuery, setSearchQuery] = useState('');
//     const [searchParams, setSearchParams] = useSearchParams();
//     const query = searchParams.get('query') ?? '';

//     useEffect(() => {
//         if (!query) {
//             return
//         }
//         getSearchMovies(query).then(data => console.log('data', data))
//     }, [query]);

//     const handleFormSubmit = (query) => {
//         setSearchParams({query})
//         console.log('query', query)
//     };

//     return(
//         <Box>
//             <h2>Movies</h2>
//             <Form onFormSubmit={handleFormSubmit}/>
//         </Box>
//     )
// };




