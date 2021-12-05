import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StreamListItem.css'

const StreamListItem = ({ stream, onStreamClick }) => {
    return(
        <section className="w-full" onClick={() => onStreamClick(stream)}>
            <div className="flex bg-white mt-3 p-8 rounded-lg shadow-lg">
                <div className="flex items-center md:px-2 lg:w-1/2">
                    <li className="" key={stream.id}>
                        <figure className="w-full h-auto">
                        <img 
                            className="w-45 rounded-lg" 
                            src={stream.stream_graphic_url} 
                            alt={stream.name} /> 
                        </figure>
                    </li>                   
                </div>
                <div className="lg:w-1/2 p-5 px-12">
                        <h3 className="text-6xl font-bold text-gray-500 md:text-5xl sm:text-3xl hover:text-gray-700 transition duration-300 pb-6">
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