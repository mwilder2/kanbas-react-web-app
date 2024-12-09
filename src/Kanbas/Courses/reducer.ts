import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as client from "../../KanbasApi";

// Define the Course interface
interface Course {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

// Initial state type
interface CoursesState {
  courses: Course[];
  currentCourse: Course | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: CoursesState = {
  courses: [],
  currentCourse: null,
  loading: false,
  error: null,
};

// Async Thunks
export const fetchCoursesAsync = createAsyncThunk<Course[]>("courses/fetchCourses", async () => {
  const response = await client.getCourses();
  return response;
});

export const addCourseAsync = createAsyncThunk<Course, Course>("courses/addCourse", async (course) => {
  const response = await client.addCourse(course);
  return response;
});

export const updateCourseAsync = createAsyncThunk<Course, Course>(
  "courses/updateCourse",
  async (course) => {
    await client.updateCourse(course);
    return course;
  }
);

export const deleteCourseAsync = createAsyncThunk<string, string>("courses/deleteCourse", async (courseId) => {
  await client.deleteCourse(courseId);
  return courseId;
});

// Slice
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCurrentCourse: (state, action: PayloadAction<Course | null>) => {
      state.currentCourse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Courses
      .addCase(fetchCoursesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoursesAsync.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCoursesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch courses.";
      })
      // Add Course
      .addCase(addCourseAsync.fulfilled, (state, action: PayloadAction<Course>) => {
        state.courses.push(action.payload);
      })
      // Update Course
      .addCase(updateCourseAsync.fulfilled, (state, action: PayloadAction<Course>) => {
        const index = state.courses.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      // Delete Course
      .addCase(deleteCourseAsync.fulfilled, (state, action: PayloadAction<string>) => {
        state.courses = state.courses.filter((c) => c._id !== action.payload);
      });
  },
});

// Export Actions and Reducer
export const { setCurrentCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
