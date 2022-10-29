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
