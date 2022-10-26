import { Box } from "components/Box";
import { useSearchParams } from "react-router-dom";

export const Form = ({onFormSubmit}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title');

    const handleChange = (e) => {
        setSearchParams(e.currentTarget.value !== "" ? { title:e.currentTarget.value } : {})
            };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(title.trim() === ''){
            alert('Please enter a request!')
            // Notify.failure('Please enter a request!');
        }
             console.log('title om Form', title)  
        onFormSubmit(title);
        setSearchParams({title:''});
    }           

    return (
    <Box as='form' onSubmit={handleSubmit}>
        <input  type="text" 
                autoComplete="off" 
                autoFocus 
                placeholder="Search movies" 
                value={title}
                onChange={handleChange}/>
        <button type="submit">Search</button>
    </Box>
    ) 
};



// export const Form = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const title = searchParams.get('title');

//     const handleChange = (e) => {
//         setSearchParams(e.currentTarget.value !== "" ? { title:e.currentTarget.value } : {})
//             };


//     return (
//     <Box as='form'>
//         <input  type="text" 
//                 autoComplete="off" 
//                 autoFocus 
//                 placeholder="Search movies" 
//                 value={title}
//                 onChange={handleChange}/>
//         <button type="submit">Search</button>
//     </Box>
//     ) 
// };


// export const Form = () => {
//     const [searchLine, setSearchLine] = useState('');

//     const handleChange = (e) => {
//         setSearchLine(e.currentTarget.value)
//     };

//     return (
//     <Box as='form'>
//         <input  type="text" 
//                 autoComplete="off" 
//                 autoFocus 
//                 placeholder="Search movies" 
//                 value={searchLine}
//                 onChange={handleChange}/>
//         <button type="submit">Search</button>
//     </Box>
//     )
   
// };