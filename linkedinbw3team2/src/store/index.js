import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';      
import profilesReducer from '../reducers/profilesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,         
    profiles: profilesReducer,
  },
});

export default store;