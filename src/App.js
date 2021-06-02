import React from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import HomeView from "./views/HomeView";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesView from "./views/MoviesView";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route path="/" exact component={HomeView} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesView} />
    </Switch>
  </>
);

export default App;
