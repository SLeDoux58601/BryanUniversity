module.exports.addTvShow = function addTvShow(title) {
    return {
        type: "ADD_TV_SHOW",
        payload: title
    }
}

module.exports.removeTvShow = function removeTvShow(title) {
    return {
        type: "REMOVE_TV_SHOW",
        payload: title
    }
}

module.exports.allTvShow = function allTvShows() {
    return {
        type: "ALL_TV_SHOWS"
    }

}
const initalState = ["Final space, Bobs Burgers, Black mirrors, Rust Valley Restorers"]

module.exports.tvShowReducer = function tvShowReducer(shows = initalState, action) {
    switch (action.type) {
        case "ADD_TV_SHOW": 
            return [...shows, action.payload]
        

        case "REMOVE_TV_SHOW": 
            const updatedArr = shows.filter(title => title.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr

        
        case "ALL_TV_SHOWS": 
            return shows

        
        default: 
            return shows
    }
}