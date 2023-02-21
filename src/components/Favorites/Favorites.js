import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";
//import { Link } from "react-router-dom";

export class ConnectedList extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="cont-fav">
        <h2 className="favTitle">Favorites Movies</h2>
        <ul className="favList">
          {
            this.props.movies.map(movie => (
              <li key={movie.id}>
              <Link to = {`/movie/${movie.id}`}>
                <span>{movie.title}</span>
              </Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>✘</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavorites
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite: (movieID) => dispatch(removeMovieFavorite(movieID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
