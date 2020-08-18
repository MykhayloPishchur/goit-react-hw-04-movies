import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Navbar from "./Components/Navbar/Navbar";
import Loader from "./Components/Loader/Loader";

const HomePage = lazy(() =>
  import("./Pages/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);

const SearchMovie = lazy(() =>
  import("./Pages/MoviesSearch.js" /* webpackChunkName: "moviesSearch-page" */)
);

const MovieDettails = lazy(() =>
  import(
    "./Pages/MovieDettails.js" /* webpackChunkName: "moviesDetails-page" */
  )
);

const App = () => (
  <>
    <Navbar></Navbar>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={SearchMovie} />
        <Route path={routes.movieId} component={MovieDettails} />
      </Switch>
    </Suspense>
  </>
);
export default App;
