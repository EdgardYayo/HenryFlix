import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    this.state.title = ""
  }

  render() {
    const { title } = this.state;
    return (
      <div className="cont-home">
        <h2 className="title">Search your favorite movie</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              placeholder="Movie Title..."
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">Search</button>
        </form>
        <ul className="lista">
         {
          this.props.movies?.map( movie => (
            <li className="li" key={movie.imdbID}>
             <Link to= {`/movie/${movie.imdbID}`}>
                <span>{movie.Title}</span>
             </Link>
              <img src={movie.Poster} alt="moviePoster"/>
            <button onClick={() => this.props.addMovieFavorite({id: movie.imdbID, title: movie.Title})}>
              ⭐+
            </button>
            </li>
          ))
         }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    movies: state.moviesLoaded,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieFavorite: args => dispatch(addMovieFavorite(args)),
    getMovies: title => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)
