import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDc3M2Q0NTE4MTAwMTVjZTgzY2UiLCJpYXQiOjE3NDUzMDc1MDcsImV4cCI6MTc0NjUxNzEwN30.u0YJhaM-DckuqeyqScIIgbQsaBB7E5H9SBDxS4Wj5mE',
    },
  });
  return await response.json();
});

const profilesSlice = createSlice({
  name: 'profiles',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default profilesSlice.reducer;
