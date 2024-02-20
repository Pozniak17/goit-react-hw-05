import axios from "axios";
import { getYear } from "date-fns";
import { MdArrowBackIos } from "react-icons/md";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BackLink, Item, List, StyledLink } from "./MovieDetails.styled";
import { Suspense } from "react";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const key = "7e90108684ed83affdbe867f15ef1121";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location);

  // const backLinkHref = location.state?.from ?? '/'; //щоб не падала сторінка, коли заходимо з нової вкладки
  const backLinkLocationRef = useRef(location.state?.from ?? "/"); //в момент першого рендеру в ref ми зберігаємо той location з якого ми прийшли

  console.log(location.state);
  // console.log(movieId);

  const [filmData, setFilmData] = useState({});

  useEffect(() => {
    const fetchMoviesById = async () => {
      const response = await axios.get(`/movie/${movieId}?api_key=${key}`);
      setFilmData(response.data);
    };

    fetchMoviesById();
  }, [movieId]);

  const filmGenres = filmData.genres || [];
  const names = filmGenres.map((genre) => genre.name);

  const { title, overview, vote_average, release_date } = filmData;
  const result = getYear(new Date(release_date));

  return (
    <div>
      <BackLink to={backLinkLocationRef.current}>
        <MdArrowBackIos />
        BACK TO MOVIES
      </BackLink>
      <img
        src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
        alt=""
        width="320px"
      />

      <h1>
        {title} ({result})
      </h1>
      <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>genres</h2>

      <ul>
        {names.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>

      <List>
        <Item>
          <StyledLink to="cast">Cast</StyledLink>
        </Item>

        <Item>
          <StyledLink to="reviews">Reviews</StyledLink>
        </Item>
      </List>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
