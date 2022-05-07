import React from 'react';
import StreamListItem from './StreamListItem';
import '../styles/StreamList.css';

const StreamsList = ({ streams, onStreamClick }) => {
    console.log('what is', streams)
    return (
        <div className="streams-container">
            <ul>{streams.map(stream => <StreamListItem key={stream.id} onStreamClick={onStreamClick} stream={stream.attributes} />)}</ul>

        </div>
    )
}

export default StreamsList

