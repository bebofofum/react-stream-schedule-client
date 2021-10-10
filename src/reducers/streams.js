import { defaultMinSockets } from "forever-agent";
import { SUCCESSFULLY_LOADED_STREAMS } from "../actions";

const initialState = {
    loadingState: "notStarted",
    streamsList: [],
    errors: {}
}

//IMPORTANT! This reducer gets functionality when it is added to the combineRuder (RootReducer)
export default function streamsReducer(state = initialState, action) {
    switch(action.type) {
        case SUCCESSFULLY_LOADED_STREAMS:
            return {
                loadingState: 'successful',
                streamsList: action.payload
            }
        default:
            return state;
    }


}