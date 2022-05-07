import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StreamListItem.css'

const StreamListItem = ({ stream, onStreamClick }) => {
    return(
        <section className="" onClick={() => onStreamClick(stream)}>
            <div className="stream-card">
                    <li className="stream-card-img-container" key={stream.id}>
                        <img 
                            className="rounded-lg" 
                            src={stream.stream_graphic_url} 
                            alt={stream.name} /> 
                    </li>                   
                <div className="lg:w-1/2 p-5 px-12">
                        <h3 className="stream-card-header">
                            <Link to={`/streams/${stream.id}`}>{stream.name}</Link> 
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 md:text-lg pb-6">
                            {stream.description}
                        </p>
                        <h3 className="capitalize text-2xl font-semibold text-gray-800">Schedule:</h3>
                        <h2 className="text-2xl font-semibold md:text-4xl text-blue-600">{stream.schedule}</h2>

                </div>

                    

            </div>
            

        </section>
    )
}

export default StreamListItem