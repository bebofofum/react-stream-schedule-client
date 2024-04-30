import React from 'react';
import StreamListItem from './StreamListItem';
import '../styles/StreamList.css';

const StreamsList = ({ streams, onStreamClick, deleteStream }) => {
    // console.log('what is', streams)
    return (
        <div className="streams-container">
            <ul>{streams.map(stream => <StreamListItem key={stream.id} onStreamClick={onStreamClick} stream={stream.attributes} deleteStream={deleteStream} />)}</ul>

        </div>
    )
}

export default StreamsList

