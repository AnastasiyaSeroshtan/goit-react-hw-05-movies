// import { Link } from 'react-router-dom';

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/api";
import { CastItem } from "./CastItem/CastItem";
import { Gallery } from './Cast.styled';

export const Cast = () => {
    const [movieCast, setMovieCast] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getMovieCast(id).then(data => {
            setMovieCast(prevState => [...prevState, ...data])
        })
    }, [id]);

    return(
        <Gallery>
            {movieCast.map(({credit_id, name, character, profile_path } ) => (
                <CastItem key={credit_id} foto={profile_path}
                    name={name}
                    character={character}/>
         ))}
        </Gallery>
    )
};