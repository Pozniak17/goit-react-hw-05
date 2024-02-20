import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { SharedLayout } from "./components/SharedLayout/SharedLayout.jsx";
import { MyLibrary } from "./pages/MyLibrary/MyLibrary.jsx";
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const MovieDetails = lazy(() =>
  import("./pages/MovieDetails/MovieDetails.jsx")
);
const Movies = lazy(() => import("./pages/Movies/Movies.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const Cast = lazy(() => import("./components/Cast/Cast.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/library" element={<MyLibrary />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

// export default App;
