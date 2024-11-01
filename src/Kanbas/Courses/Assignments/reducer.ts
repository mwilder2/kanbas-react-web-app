// src/Kanbas/Courses/Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      const index = state.assignments.findIndex((a) => a._id === assignment._id);
      if (index !== -1) state.assignments[index] = assignment;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
