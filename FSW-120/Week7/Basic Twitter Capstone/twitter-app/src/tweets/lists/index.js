import React from 'react'
import TweetPreview from './TweetPreview'

const paragraphString = 'hello world'

// const Container = styled.div`
//     display: flex;
//     align-items: center;
//     flex-direction: column;
// `
// const tweets = [
//     "time" = "",
//     "authorName" = "",
//     "details" = ""
// ]


function List() {
    return (
        <container>
            <TweetPreview
                fontSize='1.2em'
                textAlign='right'
                time='today'
                authorName='patrick morgan'
                details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                background='lightcoral'
                color='white'
                id='patrick-morgan' />
            <TweetPreview
                fontSize='0.8em'
                textAlign='left'
                time='yesterday'
                authorName='author author'
                details='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                background='lightblue'
                color='white'
                id='author-author' />
            <TweetPreview
                fontSize='1.4em'
                textAlign='center'
                time='whenever'
                authorName='another author'
                details='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                background='lightgreen'
                color='black' />
            <TweetPreview
                details='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                background='lightgrey'
                color='black' />
            <TweetPreview
                details={paragraphString}
                background='lightpurple'
                color='white' />
        </container>
    )
}

export default List