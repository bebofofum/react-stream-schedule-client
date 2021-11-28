import React from 'react';

const DeleteButton = ({ buttonName, handleRemoveStream }) => {
    return (
        <div>
            <button onClick={handleRemoveStream} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-9 py-4 px-6 rounded">{buttonName} Stream</button>
        </div>
    )
}

export default DeleteButton