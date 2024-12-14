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
  async ({ courseId, module }: { courseId: string; module: any }) => {
    const newModule = await client.createModuleForCourse(courseId, module);
    return newModule;
  }
);

// export const addModule = createAsyncThunk(
//   "modules/addModuleToServer",
//   async (courseId: string, module: any) => {
//     const newModule = await client.createModuleForCourse(courseId, module);
//     return newModule;
//   }
// );

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
        state.modules = modules.map((module: any) => ({ ...module, editing: false }));
        state.loading = false;
      })
      .addCase(fetchModulesForCourse.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message ?? "Failed to fetch modules.";
      })
      // Add module
      .addCase(addModule.fulfilled, (state, { payload: module }) => {
        state.modules.push({ ...module, editing: false });
      })
      .addCase(addModule.rejected, (state, { error }) => {
        state.error = error.message ?? "Failed to add module.";
      })
      // Delete module
      .addCase(deleteModule.fulfilled, (state, { payload: moduleId }) => {
        state.modules = state.modules.filter((m) => m._id !== moduleId);
      })
      .addCase(deleteModule.rejected, (state, { error }) => {
        state.error = error.message ?? "Failed to delete module.";
      })
      // Update module
      .addCase(updateModule.fulfilled, (state, { payload: updatedModule }) => {
        state.modules = state.modules.map((m) =>
          m._id === updatedModule._id ? updatedModule : m
        );
      })
      .addCase(updateModule.rejected, (state, { error }) => {
        state.error = error.message ?? "Failed to update module.";
      });
  },
});

export const { setModules, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
