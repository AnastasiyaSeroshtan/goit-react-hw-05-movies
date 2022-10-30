import PropTypes from 'prop-types';
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

MoviesItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};