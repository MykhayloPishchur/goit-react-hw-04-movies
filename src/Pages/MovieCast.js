import React, { Component } from "react";
import api from "../Services/Services";

export default class MovieCast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    api
      .getMovieCast(movieId)
      .then((response) => {
        console.log(response);
        this.setState({ ...response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        <ul>
          {cast &&
            cast.map(({ credit_id, profile_path, character, name }) => (
              <li key={credit_id}>
                {profile_path && (
                  <img
                    src={"https://image.tmdb.org/t/p/original" + profile_path}
                    alt={name}
                  />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
