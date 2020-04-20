import React from 'react'

// class MovieItems extends Component {
//     render(props) {
//         return(
//             <ol>
//                 {props.moviesCombined.map(movieCombine => <li key={movieCombine}>{movieCombine}</li>)}
//             </ol>
//         )
//     }
// }

function MovieItems(props) {
    return(
        <ol>
            {props.moviesCombined.map(movieCombine => <li key={movieCombine}>{movieCombine}</li>)}
        </ol>
    )
}

export default MovieItems