import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import api from "../Services/Services";

const MovieCast = lazy(() =>
  import("./MovieCast" /* webpackChunkName: "movieCast-page" */)
);

const MovieReview = lazy(() =>
  import("./MovieReview" /* webpackChunkName: "moviesReview-page" */)
);

export default class MoviesDetails extends Component {
  state = {
    id: null,
    poster_path: null,
    title: null,
    overview: null,
    genres: null,
    release_date: null,
    vote_average: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    api
      .getMovieDettails(movieId)
      .then((response) => {
        console.log(response);
        this.setState({ ...response.data });
      })
      .catch((error) => console.log(error));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || "/");
  };

  render() {
    const {
      id,
      poster_path,
      title,
      overview,
      genres,
      release_date,
      vote_average,
    } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Go Back
        </button>

        {id && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt=""
            />

            <div>
              <h1>
                {title} ({release_date.slice(0, 4)})
              </h1>
              <p>User Score: {vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map((genre) => `${genre.name} `)}</p>
            </div>
          </>
        )}

        <div>
          <span>Additional information</span>
          <ul>
            <li>
              <NavLink to={{ pathname: `/movies/${id}/cast` }}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: `/movies/${id}/reviews` }}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<h1>Loading</h1>}>
            <Switch>
              <Route path="/movies/:movieId/cast" component={MovieCast} />
              <Route path="/movies/:movieId/reviews" component={MovieReview} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}
