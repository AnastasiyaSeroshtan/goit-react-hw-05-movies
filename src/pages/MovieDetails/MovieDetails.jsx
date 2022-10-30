import { AdditionalInformation } from "components/AdditionalInformation/AdditionalInformation";
import { Box } from "components/Box";
import { MovieAbout } from "components/MovieAbout/MovieAbout";
import { Outlet, useLocation } from "react-router-dom";
import { BackLink } from "./MovieDetails.styled";

export const MovieDetails = () => {
    // const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';

    return (
    <Box as='main'>
        <BackLink to={backLinkHref}>Back</BackLink>
        <MovieAbout />
        <AdditionalInformation />
        <Outlet />
    </Box>
    )
};

