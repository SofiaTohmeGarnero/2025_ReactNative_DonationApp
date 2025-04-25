// Importing the combineReducers function from Redux
import {combineReducers} from 'redux';
// Importing the configureStore function from the Redux Toolkit
import {configureStore} from '@reduxjs/toolkit';

// Importing the User reducer from the ./reducers/User file
import User from './reducers/User';

// Creating a rootReducer that combines all reducers in the app
const rootReducer = combineReducers({
  // Here, we're combining the User reducer and calling it "user"
  user: User,
});

// Creating a new Redux store using the configureStore function
// We're passing in the rootReducer as the main reducer for the store
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Exporting the rootReducer to be used in the store
export default store;
