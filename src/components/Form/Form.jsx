import { useState } from "react";
import { Notify } from "notiflix";
import { Box } from "components/Box";
import { SearchInput, SearchFormBtn } from './Form.styled';

export const Form = ({onFormSubmit}) => {
    const [searchLine, setSearchLine] = useState('');

    const handleChange = (e) => {
        setSearchLine(e.currentTarget.value)
    };    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchLine.trim() === ''){
            Notify.info('Please enter a request!');
        }
       
        onFormSubmit(searchLine);
        setSearchLine('');
    }        

    return (
    <Box as='form' onSubmit={handleSubmit}>
        <SearchInput  type="text" 
                placeholder="Enter movie name" 
                value={searchLine}
                onChange={handleChange}/>
        <SearchFormBtn type="submit">Search</SearchFormBtn>
    </Box>
    ) 
};


// 2 variant
// import { Box } from "components/Box";
// import { useSearchParams } from "react-router-dom";

// export const Form = ({onFormSubmit}) => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const query = searchParams.get('query');

//     const handleChange = (e) => {
//         setSearchParams(e.currentTarget.value !== "" ? { query:e.currentTarget.value } : {})
//             };
//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         if(query.trim() === ''){
//             alert('Please enter a request!')
//             // Notify.failure('Please enter a request!');
//         }
//              console.log('query om Form', query)  
//         onFormSubmit(query);
//         e.currentTarget.value = '';
//         // e.currentTarget.value.reset();
//     }           

//     return (
//     <Box as='form' onSubmit={handleSubmit}>
//         <input  type="text" 
//                 autoComplete="off" 
//                 autoFocus 
//                 placeholder="Search movies" 
//                 value={query}
//                 onChange={handleChange}/>
//         <button type="submit">Search</button>
//     </Box>
//     ) 
// };
















