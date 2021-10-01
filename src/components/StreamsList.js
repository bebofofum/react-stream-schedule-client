import React from 'react';
import StreamListItem from './StreamListItem';

const StreamsList = ({ streams }) => {
    return (
        <div className="relative pt-12 bg-blueGray-50">
            <h1 className="text-gray-800 text-3xl font-semibold">I'm the Stream Listing</h1>
            <ul>{streams.map(stream => <StreamListItem stream={stream} />)}</ul>

        </div>
    )
}

export default StreamsList

