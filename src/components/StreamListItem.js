import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ActionButton from './ActionButton';
import '../styles/StreamListItem.css'

const StreamListItem = ({ stream, onStreamClick }) => {

    const [streamName, setStreamName] = useState([])

    const toTitleCase = () => {
        if(!stream.name) {
            return '';
        }
        const strArray = stream.name.split(' ').map((word) => {
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
        setStreamName(strArray.join(' '));
    }

    useEffect(() => {
        toTitleCase(stream.name)
    },[])

    // function toTitleCase(streamName) {
    //     if(!streamName){
    //         return '';
    //     }
    //     const strArray = streamName.split(' ').map((word) => {
    //         return word[0].toUpperCase() + word.substring[1].toLowerCase();
    //     });
    //     return strArray.join(' ');
    // }




    return(
        <section className="" onClick={() => onStreamClick(stream)}>
            <div className="stream-card">
                <div className='stream-icon-container'>
                        <p className='edit-icon' onClick></p>
                        <p className='delete-icon' onClick></p>
                </div>

                <div className="stream-card-img-container" key={stream.id}>
                        <img 
                            className="stream-card__img" 
                            src={stream.stream_graphic_url} 
                            alt={stream.name} /> 
                </div>                   
                <div className="stream-card-content">
                        <h3 className="stream-card-header">
                            <Link to={`/streams/${stream.id}`}>{streamName}</Link> 
                        </h3>
                        <p className="stream-card-description">
                            {stream.description}
                        </p>
                        <h3 className="stream-card-schedule">Schedule:</h3>
                        <h2 className="stream-card-schedule-detail">{stream.schedule}</h2>
                </div>  
            </div>
            <div>
                <ActionButton buttonName="Edit"/>
            </div>  

        </section>
    )
}

export default StreamListItem