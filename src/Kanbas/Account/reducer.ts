import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as client from "../../KanbasApi";

// Initial state
const initialState = {
  currentUser: null,
  users: [], // Array of users
  status: "idle", // Status of API calls
  error: null as string | null, // Allow error to be a string or null
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk("account/fetchUsers", async () => {
  const users = await client.findAllUsers();
  return users;
});

// Slice
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An unknown error occurred";
      });
  },
});

// Export actions and reducer
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
