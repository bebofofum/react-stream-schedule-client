import React from 'react';
import { Link } from 'react-router-dom';

const StreamListItem = ({ stream: { id, description, name } }) => {
    return(
        <div>
            <div>
                <h3>Imma list item</h3>
                <li className="" key={id}><Link to={`/streams/${id}`}>{name}:</Link> {description}</li>
            </div>

        </div>
    )
}

export default StreamListItem