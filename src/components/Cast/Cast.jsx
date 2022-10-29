// import { Link } from 'react-router-dom';

import { Box } from "components/Box";
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

    return(
        <Box as='ul' display='flex'>
            {movieCast.map(({credit_id, name, character, profile_path } ) => (
            <li key={credit_id}>
                <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} height='260'/>
                <p>Name:{name}</p>
                <p>Character:{character}</p>
            </li>
         ))}
        </Box>
    )
};