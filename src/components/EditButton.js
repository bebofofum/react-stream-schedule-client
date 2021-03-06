import React from 'react';


const EditButton = ({ buttonName }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold hover:shadow-lg mt-9 py-4 px-6 rounded">{buttonName} Stream</button>
    )
}

export default EditButton