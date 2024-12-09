import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as client from "../../../KanbasApi";

// Async actions

export const fetchModulesForCourse = createAsyncThunk(
  "modules/fetchModulesForCourse",
  async (courseId: string) => {
    const modules = await client.findModulesForCourse(courseId);
    return modules;
  }
);

export const addModule = createAsyncThunk(
  "modules/addModuleToServer",
  async (module: any) => {
    const newModule = await client.addModule(module);
    return newModule;
  }
);

export const deleteModule = createAsyncThunk(
  "modules/deleteModuleFromServer",
  async (moduleId: string) => {
    await client.deleteModule(moduleId);
    return moduleId;
  }
);

export const updateModule = createAsyncThunk(
  "modules/updateModuleOnServer",
  async (module: any) => {
    const updatedModule = await client.updateModule(module);
    return updatedModule;
  }
);

// Module type
interface Module {
  _id: string;
  name: string;
  course: string;
  editing?: boolean;
}

// Initial state type
interface ModulesState {
  modules: Module[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ModulesState = {
  modules: [],
  loading: false,
  error: null,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch modules for a course
      .addCase(fetchModulesForCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchModulesForCourse.fulfilled, (state, { payload: modules }) => {
        state.modules = modules;
        state.loading = false;
      })
      .addCase(fetchModulesForCourse.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message ?? "Unknown error";
      })
      // Add module
      .addCase(addModule.fulfilled, (state, { payload: module }) => {
        state.modules.push(module);
      })
      // Delete module
      .addCase(deleteModule.fulfilled, (state, { payload: moduleId }) => {
        state.modules = state.modules.filter((m) => m._id !== moduleId);
      })
      // Update module
      .addCase(updateModule.fulfilled, (state, { payload: module }) => {
        state.modules = state.modules.map((m) =>
          m._id === module._id ? module : m
        );
      });
  },
});

export const { setModules, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
