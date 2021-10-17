import React from 'react';
import StreamListItem from './StreamListItem';

const StreamsList = ({ streams, onStreamClick }) => {
    console.log('what is', streams)
    return (
        <div className="relative pt-12 bg-blueGray-50">
            <h1 className="text-gray-800 text-3xl font-semibold">I'm the Stream Listing</h1>
            <ul>{streams.map(stream => <StreamListItem key={stream.id} onStreamClick={onStreamClick} stream={stream.attributes} />)}</ul>

        </div>
    )
}

export default StreamsList

