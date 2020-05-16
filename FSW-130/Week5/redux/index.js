const redux = require('redux')
const {combineReducers, createStore} = redux

const {tvShowReducer} = require('./tvShows')
const {moviesReducer} = require('./movies')

const rootReducer = combineReducers({
    tvShows: tvShowReducer,
    movies: moviesReducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store