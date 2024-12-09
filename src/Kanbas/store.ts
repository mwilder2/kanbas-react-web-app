// src/Kanbas/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./Account/enrollmentReducer";
import coursesReducer from "./Courses/reducer";

const store = configureStore({
  reducer: {
    accountReducer,
    enrollmentReducer,
    assignmentsReducer,
    modulesReducer,
    courses: coursesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;