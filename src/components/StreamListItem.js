import React from 'react';

const StreamListItem = ({ stream: { id, description, name } }) => {
    return(
        <div>
            <div>
                <h3>Imma list item</h3>
                <li className="" key={id}>{name}: {description}</li>
            </div>

        </div>
    )
}

export default StreamListItem