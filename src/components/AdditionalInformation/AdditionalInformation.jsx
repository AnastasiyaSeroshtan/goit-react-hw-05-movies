import { Link, useParams, useLocation } from "react-router-dom";
import { Box } from "components/Box";
import { TitleAI, DiscriptionItem } from "./AdditionalInformation.styled";


export const AdditionalInformation = () => {
    const { id } = useParams();
    const location = useLocation();
    return(
        <Box>
             <TitleAI>Additional information</TitleAI>
        <ul>
            <DiscriptionItem>
                <Link to={`/movies/${id}/cast`} state={{from: location.state.from}}>Cast</Link>
            </DiscriptionItem>
            <DiscriptionItem>
                <Link to='reviews' state={{from: location.state.from}}>Reviews</Link>
            </DiscriptionItem>
        </ul>
        </Box>
    )
};