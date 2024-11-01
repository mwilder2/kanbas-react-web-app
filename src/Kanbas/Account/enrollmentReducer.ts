// src/Kanbas/Account/enrollmentReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of each enrollment object
interface Enrollment {
  user: string;
  course: string;
}

// Define the shape of the initial state
interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: [], // Array of enrollment objects { user: 'userId', course: 'courseId' }
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enroll: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      state.enrollments.push({ user: userId, course: courseId });
    },
    unenroll: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
