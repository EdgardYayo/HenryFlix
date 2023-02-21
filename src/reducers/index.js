
const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetails: {}
}


export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case 'GET_MOVIES':
            return {
                ...state,
                moviesLoaded:action.payload.Search
            };
        case 'GET_MOVIE_DETAILS':
            return {
                ...state,
                movieDetails: action.payload
            }
        case 'ADD_MOVIE_FAVORITE':
            return {
                ...state,
                moviesFavorites:[...state.moviesFavorites, action.payload]
            }
        case 'REMOVE_MOVIE_FAVORITE':
            return {
                ...state,
                moviesFavorites:state.moviesFavorites.filter(movie => movie.id !== action.payload)
            }
        default:
            return {...state};
    }
}
