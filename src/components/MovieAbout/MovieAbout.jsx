import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "services/api";
import { Box } from '../Box';
import { InfoWrapper, Title, Overwview, Discription, Vote, VoteAver } from "./MovieAbout.styled";

export const MovieAbout = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        getMovieDetails(id).then(data => {
            setMovieInfo(data)
        })
    },[id]);

        if (movieInfo === null) {
            return;
          }
    const {title, production_countries, release_date, overview, vote_average, poster_path, genres} = movieInfo;
    const genresList = genres.map(genre => (genre.name)).join(',');
    const productionCountries = production_countries.map(country => (country.name)).join(', ');
    const voteAverage = vote_average.toFixed(1);
  
    return(
        <Box display='flex' mt={4} mb={5}>
            {poster_path === null ?
            <img src="https://pixabay.com/ru/vectors/%d0%b8%d0%ba%d1%81-%d0%b2%d1%8b%d1%85%d0%be%d0%b4-%d0%ba%d0%bd%d0%be%d0%bf%d0%ba%d0%b0-%d0%b7%d0%bd%d0%b0%d1%87%d0%be%d0%ba-%d1%81%d0%b8%d0%bc%d0%b2%d0%be%d0%bb-1152114/" alt="No img"/> :
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>}
            <InfoWrapper>
                <div>
                    <Title>{title}</Title>
                    <Discription>{genresList}</Discription>
                    <Discription>{release_date}, {productionCountries}</Discription>
                </div>
                
                    {overview === null ?
                    <Discription>This movie has no overview</Discription> :
                    <div>
                        <Overwview>Overview</Overwview>
                        <Discription>{overview}</Discription></div>}
                    <div>
                        <VoteAver>Vote average: </VoteAver>
                        <Vote>{voteAverage}</Vote>
                    </div>
                
            </InfoWrapper>
        </Box>
    )
};