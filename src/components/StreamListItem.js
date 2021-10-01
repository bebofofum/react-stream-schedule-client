import React from 'react';
import { Link } from 'react-router-dom';

const StreamListItem = ({ stream: { id, description, name, schedule, stream_graphic_url } }) => {
    return(
        <section className="relative pt-12 bg-blueGray-50">
            <div className="items-center flex flex-wrap">
                <h3>Imma list item</h3>
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    

                </div>
                <li className="" key={id}>
                     <figure className="">
                        <img 
                            className="w-full h-full rounded-md object-cover" 
                            src={stream_graphic_url} 
                            alt={name} /> 
                    </figure>


                    <div>
                        <Link to={`/streams/${id}`}>{name}:</Link> {description}
                    </div>
                    <p>{schedule}</p>
                    </li>
                
                   
            </div>

        </section>
    )
}

export default StreamListItem