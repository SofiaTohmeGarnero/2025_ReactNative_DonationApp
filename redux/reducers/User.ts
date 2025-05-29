// Importing the createSlice function from the Redux Toolkit
import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  // firstName: 'Sofia',
  // lastName: 'Tohme',
  // userId: 1,

  /** Asi definimos los datos en api/user - connection with firebase */
  displayName: 'Sofia Tohme',
  email: 'sofia@donation.com',
  token: 'string',
  isLoggedIn: false,
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

    /*  updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    }, */
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it
export const {/* updateFirstName */ logIn, resetToInitialState, updateToken} = User.actions;
export default User.reducer;
