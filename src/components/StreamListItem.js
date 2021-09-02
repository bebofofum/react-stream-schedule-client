import React from 'react';

const StreamListItem = ({ description, name }) => {
    return(
        <div>
            <div>
                <h3>Imma list item</h3>
                <li>{description}</li>
            </div>

        </div>
    )
}

export default StreamListItem