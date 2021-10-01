import React from 'react';
import { Link } from 'react-router-dom';

const StreamListItem = ({ stream: { id, description, name } }) => {
    return(
        <section className="relative pt-12 bg-blueGray-50">
            <div className="items-center flex flex-wrap">
                <h3>Imma list item</h3>
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    

                </div>
                <li className="" key={id}><Link to={`/streams/${id}`}>{name}:</Link> {description}</li>
            </div>

        </section>
    )
}

export default StreamListItem