import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, Item } from "./Cast.styled";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const key = "7e90108684ed83affdbe867f15ef1121";

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchCastById = async () => {
      try {
        const response = await axios.get(
          `/movie/${movieId}/credits?api_key=${key}`
        );

        setCast(response.data.cast);
      } catch (error) {
        setError(true);
        console.error("Error fetching cast:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCastById();
  }, [movieId]);

  return (
    <div>
      {error && <p>Whoops, something went wrong: {error.message}</p>}

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <List>
          {cast.length > 0 ? (
            cast.map(({ name, id, character, profile_path }) => (
              <Item key={id}>
                <div>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      width="200px"
                      alt="actor"
                    />
                  ) : (
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                      width="200px"
                      height="300px"
                      alt=""
                    />
                  )}
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </div>
              </Item>
            ))
          ) : (
            <b>We dont have any casts for this movie.</b>
          )}
        </List>
      )}
    </div>
  );
};

export default Cast;
