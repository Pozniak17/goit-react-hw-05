import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Item, List, BookmarkIcon } from "../Home/Home.styled";
import { FormMovies } from "../../components/FormMovies/FormMovies";
// import { Formik } from 'formik';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const key = "7e90108684ed83affdbe867f15ef1121";

const Movies = () => {
  const location = useLocation();
  console.log(location);

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  // const [searchClicked, setSearchClicked] = useState(false);

  // якщо немає null, то вертай пустий рядок "" - це на випад коли null в input, value не може бути null'ом
  const queryName = searchParams.get("query") ?? "";
  console.log(queryName);

  useEffect(() => {
    if (queryName === "") return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/search/movie?query=${queryName}&include_adult=false&language=en-US&page=1&api_key=${key}`
        );

        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [queryName]);

  // функція видалення значення, якщо запит пустий
  const updateQueryString = (value) => {
    if (value === "") {
      return setSearchParams({});
    }
    setSearchParams({ query: value });
  };

  return (
    <>
      <FormMovies value={queryName} onChange={updateQueryString} />

      {error && <p>Whoops, something went wrong: {error.message}</p>}

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <List>
            {movies.map(({ title, poster_path, id }) => (
              <Item key={id}>
                <BookmarkIcon />
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt="film"
                      width="200px"
                      height="300px"
                    />
                  ) : (
                    <img
                      src={`https://media.istockphoto.com/id/1452662817/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=KaRW6O_DcZXEFbMPS-3DrDP5z28TIdBoBzcCliubxyY=`}
                      alt="film"
                      width="200px"
                      height="300px"
                    />
                  )}
                  <p>{title}</p>
                </Link>
              </Item>
            ))}
          </List>
        </div>
      )}
    </>
  );
};

export default Movies;
