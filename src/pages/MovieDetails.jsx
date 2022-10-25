// import { Box } from "components/Box";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "services/api";

export const MovieDetails = () => {
    
    const [movieInfo, setMovieInfo] = useState([]);
    const { id } = useParams();
    // console.log(id)
    
    useEffect(() => {
        getMovieDetails(id).then(data => {
            // console.log(data)
            setMovieInfo([data])
        })
        // getMovieDetails(id).then(data => {
        //     console.log(data)
        // })
    },[id])

    console.log(movieInfo)
    if (movieInfo === []) {
        return;
      }

    return (
        <>
        
        <div>Product with {id}</div>
        <div>Overwiew - {movieInfo[0].overview}</div>
        <div>Popularity - {movieInfo[0].popularity}</div>
        {/* <div>Poster_path - {movieInfo[0].poster_path}</div> */}
        </>
        
    )
};


// export const MovieDetails = () => {
//     const { id } = useParams();
//     console.log('movieId:', id);

//     useEffect(() => {
//         getTrendingMovies().then(data => {
//             console.log(data.data);
           
//         })

//         // getMovieDetails(id).then(data => console.log(data))
//     });

//     // const movieDetails = getMovieDetails(id).then(data => console.log(data));
//     // console.log('movieDetails:', movieDetails);


//     return (
//         <Box>
//             <div>Now showing product with id - {id}</div>

//             {/* <p>{movieDetails.overview}</p> */}
//         </Box>
//     )
// };



    // const movie = getMovieDetails(id);
    // return(
    //     <Box>
    //         <h2>MovieDetails</h2>
    //     <p>{id}</p>
    //     <p>{movie.overview}</p>
    //     </Box>
    // )