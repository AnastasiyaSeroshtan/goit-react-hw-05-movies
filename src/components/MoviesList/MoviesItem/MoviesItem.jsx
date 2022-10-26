import { Link} from 'react-router-dom';

export const MoviesItem = ({id, title}) => {
    return(
        <li>
        <Link to={`/movies/${id}`}>
        <p>{title}</p>
        </Link>
    </li>
    )
};