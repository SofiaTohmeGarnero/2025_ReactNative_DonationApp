// Importing the createSlice function from the Redux Toolkit
import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  firstName: 'Sofia',
  lastName: 'Tohme',
  userId: 1,
  profileImage: require('../../assets/images/user_profile_image.png'),
};

// Creating a new slice of the store named "user" with its own set of reducers
export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    // Defining the "updateFirstName" reducer function
    // It takes the current state and an action object as parameters
    // It updates the firstName field of the state with the payload value of the action
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it
export const {updateFirstName, resetToInitialState} = User.actions;
export default User.reducer;
