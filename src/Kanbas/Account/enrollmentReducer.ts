import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as client from "../../KanbasApi"; // Update path if necessary

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
  status: string;
  error: string | null;
}

const initialState: EnrollmentState = {
  enrollments: [],
  status: "idle",
  error: null,
};

// Async Thunks
export const fetchEnrollments = createAsyncThunk("enrollment/fetchEnrollments", async () => {
  const response = await client.getEnrollments();
  return response;
});

export const enrollUser = createAsyncThunk(
  "enrollment/enrollUser",
  async ({ userId, courseId }: { userId: string; courseId: string }) => {
    const response = await client.enrollUser(userId, courseId);
    return response;
  }
);

export const unenrollUser = createAsyncThunk(
  "enrollment/unenrollUser",
  async ({ userId, courseId }: { userId: string; courseId: string }) => {
    const response = await client.unenrollUser(userId, courseId);
    return response;
  }
);

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnrollments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEnrollments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.enrollments = action.payload;
      })
      .addCase(fetchEnrollments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch enrollments";
      })
      .addCase(enrollUser.fulfilled, (state, action) => {
        state.enrollments.push(action.payload);
      })
      .addCase(unenrollUser.fulfilled, (state, action) => {
        state.enrollments = state.enrollments.filter(
          (enrollment) =>
            !(
              enrollment.user === action.payload.user &&
              enrollment.course === action.payload.course
            )
        );
      });
  },
});

export default enrollmentSlice.reducer;
