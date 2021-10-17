import { 
    SUCCESSFULLY_LOADED_STREAMS, 
    START_LOADING_STREAMS,
    SUCCESSFULLY_LOADED_STREAM 
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

        case SUCCESSFULLY_LOADED_STREAMS:
            return {
                loadingState: 'successful',
                streamsList: action.payload
            }
        case SUCCESSFULLY_LOADED_STREAM:
            return {
                
            }

        default:
            return state;
    }


}