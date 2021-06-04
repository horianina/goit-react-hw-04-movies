import React, { Component } from "react";
// import Axios from "axios";
import SearchBarView from "./SearchBarView";
import axios from "axios";

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
        this.setState({ movies: response.data.results });
      });
  };
  render() {
    return (
      <>
        <SearchBarView onSubmit={this.onChangeQuery} />
        {/* <h1>Trending today</h1> */}
      </>
    );
  }
}
export default MoviesView;
