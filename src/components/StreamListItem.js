import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StreamListItem.css'

const StreamListItem = ({ stream: { id, description, name, schedule, stream_graphic_url } }) => {
    return(
        <section className="w-full">
            <div className="flex bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center md:px-2 lg:w-1/2">
                    <li className="" key={id}>
                        <figure className="w-full h-auto">
                        <img 
                            className="w-45 rounded-lg" 
                            src={stream_graphic_url} 
                            alt={name} /> 
                        </figure>
                    </li>                   
                </div>
                <div className="lg:w-1/2 p-5 px-12">
                        <h3 className="text-5xl font-semibold text-gray-800 md:text-6xl pb-6">
                            <Link to={`/streams/${id}`}>{name}</Link> 
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 md:text-lg pb-6">
                            {description}
                        </p>
                        <h3 className="capitalize text-2xl font-semibold text-gray-800">Schedule:</h3>
                        <h2 className="text-2xl font-semibold md:text-4xl text-blue-600">{schedule}</h2>
                    </div>

            </div>
            

        </section>
    )
}

export default StreamListItem