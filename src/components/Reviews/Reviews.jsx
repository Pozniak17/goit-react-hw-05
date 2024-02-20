import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item, Title, Wrapper } from "./Reviews.styled";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const key = "7e90108684ed83affdbe867f15ef1121";

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchReviewsById = async () => {
      try {
        const response = await axios.get(
          `/movie/${movieId}/reviews?api_key=${key}`
        );
        setReviews(response.data.results);
      } catch (error) {
        setError(true);
        console.error("Error fetching cast:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewsById();
  }, [movieId]);

  console.log(reviews);

  return (
    <Wrapper>
      {error && <p>Whoops, something went wrong: {error.message}</p>}

      {isLoading ? (
        <h2>Loading...</h2>
      ) : reviews.length > 0 ? (
        reviews.map(({ id, author, author_details: { rating }, content }) => (
          <Item key={id}>
            <Title>{author}</Title>

            <p>{content}</p>
            {rating && <h3>rating: {rating}</h3>}
          </Item>
        ))
      ) : (
        <b>We dont have any rewiews for this movie.</b>
      )}
    </Wrapper>
  );
};

export default Reviews;
