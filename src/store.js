// import { applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from 'redux-thunk';
import streamsReducer from './reducers/streams';
import authReducer from './reducers/authReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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