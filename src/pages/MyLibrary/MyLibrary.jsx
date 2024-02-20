// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Item, List, BookmarkIcon } from 'pages/Home/Home.styled';

// const key = '7e90108684ed83affdbe867f15ef1121';

export const MyLibrary = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  // useEffect(() => {
  //   const storedBookmarks = localStorage.getItem('bookmarkedMovies');
  //   if (storedBookmarks) {
  //     setBookmarkedMovies(JSON.parse(storedBookmarks));
  //   }
  // }, []);
  // useEffect(() => {
  //   const movieIds = JSON.parse(localStorage.getItem('movieIds'));
  //   const fetchMovieData = async movieId => {
  //     try {
  //       setIsLoading(true); // Встановлюємо isLoading на true перед початком запиту
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`
  //       );
  //       return response.data;
  //     } catch (error) {
  //       console.error('Помилка запиту:', error);
  //       return null;
  //     } finally {
  //       setIsLoading(false); // Встановлюємо isLoading на false після завершення запиту, навіть якщо він закінчився помилкою
  //     }
  //   };
  //   const fetchAllMoviesData = async () => {
  //     const requests = movieIds.map(movieId => fetchMovieData(movieId));
  //     try {
  //       const moviesData = await Promise.all(requests);
  //       console.log(moviesData);
  //       setData(moviesData);
  //     } catch (error) {
  //       setError('Помилка завантаження даних');
  //     }
  //   };
  //   fetchAllMoviesData();
  // }, [bookmarkedMovies]);
  return (
    <div>
      <h2>My favorite films</h2>
      {/* {isLoading && <p>Loading...</p>}
  {error && <p>{error}</p>} 
     <List>
   {data && 
       data.map(({ title, id, poster_path }) => (
           <Item key={id}>
            <BookmarkIcon />
              <Link to={`/movies/${id}`}>
                <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
                alt="film"
                 width="200px"
                 height="300px"
             />
            </Link> 
            </Item> 
           ))}
        </List> 
      </div>
    );
  }; */}
    </div>
  );
};
