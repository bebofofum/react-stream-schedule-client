import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StreamListItem.css'

const StreamListItem = ({ stream, onStreamClick }) => {
    return(
        <section className="" onClick={() => onStreamClick(stream)}>
            <div className="stream-card">
                    <div className="stream-card-img-container" key={stream.id}>
                        <img 
                            className="stream-card__img" 
                            src={stream.stream_graphic_url} 
                            alt={stream.name} /> 
                    </div>                   
                <div className="stream-card-content">
                        <h3 className="stream-card-header">
                            <Link to={`/streams/${stream.id}`}>{stream.name}</Link> 
                        </h3>
                        <p className="stream-card-description">
                            {stream.description}
                        </p>
                        <h3 className="stream-card-schedule">Schedule:</h3>
                        <h2 className="stream-card-schedule-detail">{stream.schedule}</h2>

                </div>

                    

            </div>
            

        </section>
    )
}

export default StreamListItem