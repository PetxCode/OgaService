import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import authReducer from "../features/userSlice"
import userReducer from "../features/authSlice"

export const store = configureStore({
  reducer: {
    auth: counterReducer,
    user: authReducer,
    newUser: userReducer
   
  },
});
