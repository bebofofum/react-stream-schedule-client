// import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from 'redux-thunk';
import streamsReducer from './reducers/streams';
import authReducer from './reducers/authReducer';

const store = configureStore({
    reducer: {
        streams: streamsReducer,
        auth: authReducer
    }
})
// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

export default store