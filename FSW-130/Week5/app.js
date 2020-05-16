const store = require('./redux')
const tvShows = require('./redux/tvShows')
const movies = require('./redux/movies')


console.log('*****Movie commands*****')
store.dispatch(movies.allMovie())
store.dispatch(movies.addMovie('Bad Boys'))
store.dispatch(movies.removeMovie('Bad Boys'))


console.log('*****Tv Show commands*****')
store.dispatch(tvShows.allTvShow())
store.dispatch(tvShows.addTvShow('Big Bang Theory'))
store.dispatch(tvShows.removeTvShow('Big Bang Theory'))