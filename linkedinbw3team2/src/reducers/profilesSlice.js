import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProfiles = createAsyncThunk(
  'profiles/fetchProfiles',
  async () => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDc3M2Q0NTE4MTAwMTVjZTgzY2UiLCJpYXQiOjE3NDUzMDc1MDcsImV4cCI6MTc0NjUxNzEwN30.u0YJhaM-DckuqeyqScIIgbQsaBB7E5H9SBDxS4Wj5mE',
        },
      }
    );
    return await response.json();
  }
);

const profilesSlice = createSlice({
  name: 'profiles',
  initialState: {
    list: [],
    current: null, // nuovo campo
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
      })
      .addCase(fetchProfileById.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      });
  },
});

export const fetchProfileById = createAsyncThunk(
  'profiles/fetchProfileById',
  async (userId) => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDc3M2Q0NTE4MTAwMTVjZTgzY2UiLCJpYXQiOjE3NDUzMDc1MDcsImV4cCI6MTc0NjUxNzEwN30.u0YJhaM-DckuqeyqScIIgbQsaBB7E5H9SBDxS4Wj5mE',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Errore nel fetch del profilo');
    }

    return await response.json();
  }
);

export default profilesSlice.reducer;
