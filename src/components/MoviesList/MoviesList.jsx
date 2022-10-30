import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { MoviesItem } from "components/MoviesList/MoviesItem/MoviesItem";

export const MoviesList = ({movies}) => {
    return(
        <Box as='ul'>
            {movies.map(({id, title}) => (
                <MoviesItem key={id} id={id} title={title}/>
            ))}
        </Box>
    )
};

// MoviesList.propTypes = {
//     movies: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//     }))
// };

MoviesList.propTypes = {
    movies: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
    })
};
