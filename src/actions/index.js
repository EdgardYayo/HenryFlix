
export function addMovieFavorite(args) {
    return { type: 'ADD_MOVIE_FAVORITE', payload: args};
}

export function removeMovieFavorite (id) {
    return { type: 'REMOVE_MOVIE_FAVORITE', payload: id }
}

export function getMovieDetail(id) {
    return function (dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=80256fd1&i=${id}`)
        .then(response => response.json())
        .then(detail => {
            dispatch({ type: 'GET_MOVIE_DETAILS', payload: detail});
        })
    }

}

export function getMovies(title) {
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=80256fd1&s=${title}`)
        .then(response => response.json())
        .then(data => {
            dispatch({type:'GET_MOVIES', payload: data});
        })
    }
}