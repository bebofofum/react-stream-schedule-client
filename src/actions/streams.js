import { 
    SUCCESSFULLY_FETCHED_STREAMS, 
    START_LOADING_STREAMS,
    SUCCESSFULLY_CREATED_STREAM 
} from '.';



export const fetchStreams = () => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_STREAMS })
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
                type: SUCCESSFULLY_FETCHED_STREAMS,
                payload: streamsJson
            })
        }
            )

    }
}

export const createStream = formValues => async dispatch => {
    // const response = await streams.post('/streams', formValues)

}

