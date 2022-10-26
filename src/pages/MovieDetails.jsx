// import { Box } from "components/Box";
// import { Cast } from "components/Cast/Cast";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "services/api";

export const MovieDetails = () => {
    
    const [movieInfo, setMovieInfo] = useState(null);
    const { id } = useParams();
    // console.log(id)
    
    useEffect(() => {
        getMovieDetails(id).then(data => {
            // console.log('data', data)
            setMovieInfo(data)
        })
    },[id]);


    // console.log('movieInfo', movieInfo)
    if (movieInfo === null) {
        return;
      }

    return (
        <>
        
        <div>Product with {id}</div>
        <div>Title - {movieInfo.title}</div>
        <div>Country - {movieInfo.production_countries.map(country => (country.name))}</div>
        <div>Release date - {movieInfo.release_date}</div>
        <div>Overwiew - {movieInfo.overview}</div>
        <div>Popularity - {movieInfo.popularity}</div>
        <img src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} alt={movieInfo.title}/>
        <div>Genres - {movieInfo.genres.map(genre => (genre.name))}</div>
        <div>
        <h3>Additional information</h3>
        <ul>
            <li>
                {/* <Link to='/movies/:id/cast'>Cast</Link>to={`/movies/${movie.id}`}> */}
                <Link to={`/movies/${movieInfo.id}/cast`}>Cast</Link>
            </li>
            <li>
                <Link to='reviews'>Reviews</Link>
            </li>
        </ul>
        <Outlet />
        </div>

        {/* <Cast /> */}
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