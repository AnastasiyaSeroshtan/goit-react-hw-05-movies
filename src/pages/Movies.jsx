import { Box } from "components/Box";
import { useState, useEffect } from "react";
import { getSearchMovies } from "services/api";
import { Form } from '../components/Form/Form';


export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState(['']);

    useEffect(() => {
        if (searchQuery=== '') {
            return
          }
        getSearchMovies(searchQuery).then(data => console.log(data))
    }, [searchQuery]);

    const handleFormSubmit = (title) => {
        setSearchQuery(title)
    };
console.log('searchQuery', searchQuery)
    return(
        <Box>
            <h2>Movies</h2>
            <Form onFormSubmit={handleFormSubmit}/>
        </Box>
    )
};




// import { Box } from "components/Box";
// import { useState, useEffect } from "react";
// import { getSearchMovies } from "services/api";
// import { Form } from '../components/Form/Form';


// export const Movies = () => {
//     const [searchQuery, setSearchQuery] = useState(['']);

//     useEffect(() => {
//         if (searchQuery=== '') {
//             return
//           }
//         getSearchMovies(searchQuery).then(data => console.log(data))
//     }, [searchQuery]);

//     const handleFormSubmit = (title) => {
//         setSearchQuery(title)
//     };
// console.log('searchQuery', searchQuery)
//     return(
//         <Box>
//             <h2>Movies</h2>
//             <Form onFormSubmit={handleFormSubmit}/>
//         </Box>
//     )
// };




