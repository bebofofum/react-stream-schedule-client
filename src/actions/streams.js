import { SUCCESSFULLY_LOADED_STREAMS } from '.';


export const fetchStreams = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/streams', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        .then(response => response.json())
        .then(streamsJson => {
            console.log('Streams maybe', streamsJson)
            dispatch({
                type: SUCCESSFULLY_LOADED_STREAMS,
                payload: streamsJson
            })
        }
            )

    }
}