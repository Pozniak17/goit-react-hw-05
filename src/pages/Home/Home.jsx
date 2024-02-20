import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Item, List, BookmarkIcon } from "./Home.styled";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const key = "7e90108684ed83affdbe867f15ef1121";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  // тут я роблю запит на список трендових фільмів на сьогодні
  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/trending/movie/day?api_key=${key}`);
        setData(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <List>
          {data.map(({ title, id, poster_path }) => (
            <Item key={id}>
              <BookmarkIcon />
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt="film"
                  width="200px"
                  height="300px"
                />
                {title}
              </Link>
            </Item>
          ))}
        </List>
      )}
    </div>
  );
};

export default Home;
