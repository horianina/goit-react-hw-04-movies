import React, { Component } from "react";
import Axios from "axios";

class MoviesView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=3645aff77d29c72aa909368ea3411743#id"
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
      </>
    );
  }
}
export default MoviesView;
