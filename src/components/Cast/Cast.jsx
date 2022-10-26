// import { Link } from 'react-router-dom';

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/api";

export const Cast = () => {
    const [movieCast, setMovieCast] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getMovieCast(id).then(data => {
            // console.log(data)
            setMovieCast(prevState => [...prevState, ...data])
        })
    }, [id]);

    // console.log('movieCast', movieCast);
    // const {credit_id, name, character } = movieCast;

    return(
        <>
       <p>Cast members</p>
       <ul>
         {movieCast.map(({credit_id, name, character, profile_path } ) => (
            <li key={credit_id}>
                <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name}/>
                <p>Name:{name}</p>
                <p>Character:{character}</p>
            </li>
         ))}
       </ul>
        </>
    )
};