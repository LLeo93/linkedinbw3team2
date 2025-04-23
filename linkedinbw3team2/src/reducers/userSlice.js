import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = "https://striveschool-api.herokuapp.com/api/profile/me";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDc3M2Q0NTE4MTAwMTVjZTgzY2UiLCJpYXQiOjE3NDUzMDc1MDcsImV4cCI6MTc0NjUxNzEwN30.u0YJhaM-DckuqeyqScIIgbQsaBB7E5H9SBDxS4Wj5mE";

export const fetchLoggedUser = createAsyncThunk("user/fetchLoggedUser", () => {
  return fetch(API, {
    headers: { Authorization: TOKEN },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore");
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
});

const userSlice = createSlice({
  name: "user",
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLoggedUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLoggedUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
