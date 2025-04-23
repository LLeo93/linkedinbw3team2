import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "https://striveschool-api.herokuapp.com/api/profile/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDc3M2Q0NTE4MTAwMTVjZTgzY2UiLCJpYXQiOjE3NDUzMDc1MDcsImV4cCI6MTc0NjUxNzEwN30.u0YJhaM-DckuqeyqScIIgbQsaBB7E5H9SBDxS4Wj5mE";

export const fetchProfiles = createAsyncThunk("profiles/fetchProfiles", () => {
  return fetch(API, {
    headers: { Authorization: TOKEN },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nel caricamento dei profili");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
});

const profilesSlice = createSlice({
  name: "profiles",
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
