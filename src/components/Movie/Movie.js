import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {

    componentDidMount () {
        const id = this.props.match.params.id;
        this.props.getMovieDetail(id);
    }

    


    render() {
        return (
            <div className="movie-detail">
                <p id='mTitle'>{this.props.movieDetails?.Title}</p> 
                <div className='mDetails'>
                <p id='mGenre'>{this.props.movieDetails?.Genre}</p>
                <p id='mYear'>{this.props.movieDetails?.Year}</p>
                <p id='mRate'>{this.props.movieDetails?.Rated}</p>
                </div>
                <img id='mImg' src={this.props.movieDetails?.Poster} alt='movie img'/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        movieDetails: state.movieDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetail : (id) => dispatch(getMovieDetail(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (Movie);