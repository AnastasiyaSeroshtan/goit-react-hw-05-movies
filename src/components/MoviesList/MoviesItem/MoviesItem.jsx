import { Link, useLocation } from 'react-router-dom';
import { ItemMovie } from './MoviesItem.styled';

export const MoviesItem = ({id, title}) => {
    const location = useLocation();
    
    return(
        <ItemMovie>
        <Link to={`/movies/${id}`} state={{from:location}}>
        <p>{title}</p>
        </Link>
    </ItemMovie>
    )
};