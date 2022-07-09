import React from 'react';


const ActionButton = ({buttonName}) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-9 py-4 px-6 rounded">{buttonName} Stream Listing</button>
    )
}

export default ActionButton