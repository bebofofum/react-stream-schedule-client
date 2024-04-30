import { 
    SUCCESSFULLY_FETCHED_STREAMS, 
    START_LOADING_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM, 
    SUCCESSFULLY_FETCHED_STREAM
} from '.';
import axios from 'axios';



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
            console.log('Streams maybe', streamsJson.data)
            dispatch({
                type: SUCCESSFULLY_FETCHED_STREAMS,
                payload: streamsJson.data
            })
        }
            )

    }
}

export const fetchStream = id => async dispatch => {
    
    const response = await axios.get(`http://localhost:3001/streams/${id}`)
    console.log('in my fetchstream action', response.data.data)
    dispatch({type: SUCCESSFULLY_FETCHED_STREAM, payload: response.data.data})
}

export const createStream = formValues => async dispatch => {
    // const response = await streams.post('/streams', formValues)

}

export const editStream = (id, formValues) => async dispatch => {
    const response = await axios.put(`http://localhost:3001/streams/${id}`, formValues)

    console.log('checking editStream response', response.data)

    dispatch({type: EDIT_STREAM, payload: response.data})

}

export const deleteStream = id => async dispatch => {
    //remember the above is shortcut for (id) => return (dispatch) => {}
    //since we only have one argument and only returning one item we can shorten it
    await axios.delete(`http://localhost:3001/streams/${id}`)

    dispatch({
        type: DELETE_STREAM,
        payload: id
    })

}

