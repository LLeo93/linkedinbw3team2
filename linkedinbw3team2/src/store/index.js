import { configureStore } from '@reduxjs/toolkit';
import profilesReducer from '../reducers/profilesSlice';

const store = configureStore({
  reducer: {
    profiles: profilesReducer,
  },
});

export default store;
