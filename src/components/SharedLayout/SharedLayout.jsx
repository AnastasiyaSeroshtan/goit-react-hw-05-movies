import { Box } from "components/Box";
import { NavLink, Outlet} from 'react-router-dom';

export const SharedLayout = () => {
    return (
        <Box>
            <Box as='nav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            </Box>
        <Outlet />
        </Box>
    )
};