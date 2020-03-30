import React from 'react'

import FullTweet from './FullTweet'

function Details({ match: { params: { id } } }) {
    return (
        <div>
            <FullTweet id={id} />
        </div>
    )
}

export default Details;