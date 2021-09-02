import React from 'react';
import StreamListItem from './StreamListItem';

const StreamsList = ({ streams }) => {
    return (
        <div>
            <h1>I'm the Stream Listing</h1>
            <ul>{streams.map(stream => <StreamListItem stream={stream} />)}</ul>

        </div>
    )
}

export default StreamsList

