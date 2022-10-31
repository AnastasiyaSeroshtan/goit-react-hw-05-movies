import { Box } from "components/Box";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/api";
import { Item, Discription, Title } from "./Reviews.styled";

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getMovieReviews(id).then(data => {
            setReviews(data)
        })
    }, [id]);

    if (reviews=== null) {
        return;
      }
    return(
    <Box pt={4} pb={4}>
        {reviews.length>0 ?
           <ul>
           {reviews.map(({author, content}) =>(
                <Item>
                    <Title>Author:{author}</Title>
                    <Discription>{content}</Discription>
                </Item>
                ))}
           </ul> :
           <Discription>We don't have any reviews</Discription>
        }
    </Box>
    )
};

export default Reviews;