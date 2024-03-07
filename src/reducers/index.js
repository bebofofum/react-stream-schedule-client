import { combineReducers } from 'redux';
import streamsReducer from './streams';
import authReducer from './authReducer';

//This combineReducer then takes in our individual reducers as functions and assigns their return value to an object

export default combineReducers({
    streams: streamsReducer,
    auth: authReducer,

})