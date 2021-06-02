import React, { Component } from "react";
import Axios from "axios";
import { NavLink, Route, Switch } from "react-router-dom";
import NotFoundView from "./NotFoundView";

class MovieDetailsPage extends Component {
  state = {
    genres: [],
    cast: [],
    overview: null,
    title: null,
    poster_path: null,
    results: [],
    profile_path: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      ` https://api.themoviedb.org/3/movie/${movieId}?api_key=3645aff77d29c72aa909368ea3411743&language=en-US`
    );

    // console.log(response.data);
    this.setState({ ...response.data });
    const responseCast = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3645aff77d29c72aa909368ea3411743&language=en-US`
    );

    this.setState({ ...responseCast.data });

    const responseReviews = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=3645aff77d29c72aa909368ea3411743&language=en-US&page=1`
    );
    // console.log(responseReviews.data);
    this.setState({ results: responseReviews.data.results });
  }
  render() {
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w400/${this.state.poster_path}`}
          alt=""
        />
        <h2>{this.state.title}</h2>
        <h3>Overview</h3>
        <p>{this.state.overview}</p>
        <h3>Genres</h3>
        <ul>
          {this.state.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <p>Editional information</p>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          path={`/movies/:movieId/cast`}
          render={() => (
            <ul>
              {this.state.cast.map((castActor) => (
                <li key={castActor.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w400/${castActor.profile_path}`}
                    alt=""
                  />
                  <p>{castActor.name}</p>
                  <p>Character: {castActor.character}</p>
                </li>
              ))}
            </ul>
          )}
        />
        <Switch>
          <Route
            path={`/movies/:movieId/reviews`}
            render={() => (
              <ul>
                {this.state.results.map((result) => (
                  <li key={result.id}>
                    <h3>Author: {result.author}</h3>
                    <p>{result.content}</p>
                  </li>
                ))}
              </ul>
            )}
          />
          <Route component={NotFoundView} />
        </Switch>
      </>
    );
  }
}
export default MovieDetailsPage;
