import { combineReducers } from 'redux';
import streamsReducer from './streams';

//This combineReducer then takes in our individual reducers as functions and assigns their return value to an object

export default combineReducers({
    streams: streamsReducer

})