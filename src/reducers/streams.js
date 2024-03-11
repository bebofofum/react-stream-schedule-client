import { 
    SUCCESSFULLY_FETCHED_STREAMS, 
    START_LOADING_STREAMS,
    SUCCESSFULLY_FETCHED_STREAM,
    DELETE_STREAM 
} from "../actions";

const initialState = {
    loadingState: "notStarted",
    streamsList: [],
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
            //below we need just a single record so we need to pass an id
            return {
                ...state, 
                loadingState: 'successful',
                streamsList: {[action.payload.id]: action.payload}
                
            }
        case DELETE_STREAM:
            return {
                ...state,
                loadingState: 'successful',
                streamsList: {}
            }

        default:
            return state;
    }


}