import { 
    START_LOADING_STREAM,
    SUCCESSFULLY_LOADED_STREAM 
} from "../actions";


const initialState = {
    loadingState: "notStarted",
    streamData: {},
    errors: {}
}

export default function streamReducer(state = initialState, action) {
    switch(action.type) {
        case SUCCESSFULLY_LOADED_STREAM:
            return {
                
            }

        default: 
        return state;

    }
}
