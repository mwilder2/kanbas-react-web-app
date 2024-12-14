// src/Kanbas/Courses/Assignments/reducer.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as client from "../../../KanbasApi";

// Thunks for async operations with the server
export const fetchAssignments = createAsyncThunk(
  "assignments/fetchAssignments",
  async () => {
    const assignments = await client.getAssignments(); // Fetch assignments from the server
    return assignments;
  }
);

export const addAssignment = createAsyncThunk(
  "assignments/addAssignment",
  async (assignment: any) => {
    console.log("Thunk triggered with assignment:", assignment); // Log the assignment being passed
    const newAssignment = await client.createAssignment(assignment);
    return newAssignment;
  }
);
export const deleteAssignment = createAsyncThunk(
  "assignments/deleteAssignment",
  async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId); // Delete assignment on the server
    return assignmentId;
  }
);

export const updateAssignment = createAsyncThunk(
  "assignments/updateAssignment",
  async (assignment: any) => {
    const updatedAssignment = await client.createAssignment(assignment); // Update assignment on the server
    return updatedAssignment;
  }
);

// Initial state
const initialState: { assignments: any[], status: string, error: string | null } = {
  assignments: [],
  status: "idle", // Status for API calls (idle, loading, succeeded, failed)
  error: null, // Error state for API calls
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {}, // All actions are handled via thunks
  extraReducers: (builder) => {
    builder
      // Handle fetchAssignments
      .addCase(fetchAssignments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.assignments = action.payload;
      })
      .addCase(fetchAssignments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      // Handle addAssignment
      .addCase(addAssignment.fulfilled, (state, action) => {
        state.assignments.push(action.payload);
      })
      // Handle deleteAssignment
      .addCase(deleteAssignment.fulfilled, (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      })
      // Handle updateAssignment
      .addCase(updateAssignment.fulfilled, (state, action) => {
        const index = state.assignments.findIndex(
          (assignment) => assignment._id === action.payload._id
        );
        if (index !== -1) state.assignments[index] = action.payload;
      });
  },
});

export default assignmentsSlice.reducer;
