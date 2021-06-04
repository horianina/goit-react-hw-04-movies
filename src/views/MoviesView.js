import React, { Component } from "react";
// import Axios from "axios";
import SearchBarView from "./SearchBarView";
import axios from "axios";
import { Link } from "react-router-dom";

class MoviesView extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    // const response = await Axios.get(
    //   "https://api.themoviedb.org/3/trending/all/day?api_key=3645aff77d29c72aa909368ea3411743#id"
    // );
    // console.log(response.data.results);
    // this.setState({ movies: response.data.results });
  }
  // async onChangeQuery(search) {
  //   const response = await Axios.get(
  //     `https://api.themoviedb.org/3/trending/all/day?api_key=3645aff77d29c72aa909368ea3411743#id`
  //   );
  // onChangeQuery = (search) => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=3645aff77d29c72aa909368ea3411743&language=en-US&page=1&include_adult=false`
  //     )
  //     .then((response) => {
  //       this.setState({ movies: response.data.results });
  //     });
  onChangeQuery = (search) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=3645aff77d29c72aa909368ea3411743&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then((response) => {
        console.log(response);
        this.setState({ movies: response.data.results });
      });
  };
  render() {
    const { movies } = this.state;
    console.log(this.state.movies, "movies");
    return (
      <>
        <SearchBarView onSubmit={this.onChangeQuery} />
        <div className="MoviesContainer">
          {movies.length > 0 &&
            movies.map(({ id, title }) => {
              // console.log(movie, "movie");
              return (
                <MovieLink id={id} key={id}>
                  {title}
                </MovieLink>
              );
            })}
        </div>
      </>
    );
  }
}
export default MoviesView;

function MovieLink({ children, id }) {
  return <Link to={`/movies/${id}`}>{children}</Link>;
}
