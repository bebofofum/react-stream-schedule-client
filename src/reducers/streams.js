// import _ from 'lodash';
import { 
    SUCCESSFULLY_FETCHED_STREAMS, 
    START_LOADING_STREAMS,
    SUCCESSFULLY_FETCHED_STREAM,
    CREATE_STREAM,
    DELETE_STREAM, 
    EDIT_STREAM
} from "../actions";

const initialState = {
    loadingState: "notStarted",
    streamsList:[],
    errors: {}
}

//IMPORTANT! This reducer gets functionality when it is added to the combineRuder (RootReducer)
export default function streamsReducer(state = initialState, action) {
    switch(action.type) {
        case START_LOADING_STREAMS:
            return {
                ...state,
                loadingState: 'inProgress'
            }

        case SUCCESSFULLY_FETCHED_STREAMS:
            return {
                loadingState: 'successful',
                streamsList: action.payload
            }
        case SUCCESSFULLY_FETCHED_STREAM:
            console.log('from fetch stream', action.payload)
            //below we need just a single record so we need to pass an id
            return {
                ...state, 
                loadingState: 'successful',
                streamsList: {[action.payload.id]: action.payload}    
            }
        case CREATE_STREAM: 
            return {
                ...state,
                streamList: state.streamsList.concat(action.payload)
            }
        case EDIT_STREAM:
            return {
                ...state,
                streamList: state.streamsList.map(stream => {
                    if (stream.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return stream;
                    }
                })
            }
        case DELETE_STREAM:
            // const newState = {...state};
            // console.log('what is', newState)


            // console.log('what is', action.payload)
            // console.log('what is', typeof newState.streamsList.data)

            // delete newState.streamsList[action.payload];
            // return newState;

            console.log('what is', action.payload)
            console.log('and this is', typeof state.streamsList)
            console.log('and this is', state.streamsList)

            const updatedStreams = state.streamsList.filter(stream => stream.id != action.payload);
            console.log('and updatedStreams is', updatedStreams)

            return {
                ...state,
                streamsList: updatedStreams
            }

        default:
            return state;
    }


}