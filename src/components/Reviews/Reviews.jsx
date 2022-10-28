import { Box } from "components/Box";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/api";

export const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getMovieReviews(id).then(data => {
            // console.log(data);
            setReviews(data)
        })
    }, [id]);

    console.log('reviews', reviews);

    if (reviews=== null) {
        return;
      }
    return(
    <Box>
              <h4>Page Reviews</h4>
        {reviews.length>0 ?
           <ul>
           {reviews.map(({author, content}) =>(
                <li>
                    <p>Author:{author}</p>
                    <p>Review:{content}</p>
                </li>
                ))}
           </ul> :
           <p>We don't have any reviews</p>
        }
    </Box>
    )
};