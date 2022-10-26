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

    // console.log('reviewsRes', reviews.results);
    // const getRewiewResults = () => {
    //     return(
    //         reviews.map(review => review.results)
    //     )
    // };

    // console.log('getRewiewResults', getRewiewResults());
    if (reviews=== null) {
        return;
      }
    return(
        <>
        <div>Page Reviews</div>
       <ul>
       {reviews.map(review =>(
            <li>
                <p>Author:{review.author}</p>
                <p>Date:{review.created_at}</p>
                <p>Review:{review.content}</p>
            </li>
            ))}
       </ul>
        </>
    )
};