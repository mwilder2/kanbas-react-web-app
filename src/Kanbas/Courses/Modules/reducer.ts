import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API endpoint for modules
const MODULES_API = "http://localhost:4000/kanbas/modules";

// Async actions
export const fetchModules = createAsyncThunk("modules/fetchModules", async () => {
  const response = await axios.get(MODULES_API);
  return response.data;
});

export const addModule = createAsyncThunk(
  "modules/addModuleToServer",
  async (module: any) => {
    const response = await axios.post(MODULES_API, module);
    return response.data;
  }
);

export const deleteModule = createAsyncThunk(
  "modules/deleteModuleFromServer",
  async (moduleId: string) => {
    await axios.delete(`${MODULES_API}/${moduleId}`);
    return moduleId;
  }
);

export const updateModule = createAsyncThunk(
  "modules/updateModuleOnServer",
  async (module: any) => {
    await axios.put(`${MODULES_API}/${module._id}`, module);
    return module;
  }
);

// Module type
interface Module {
  _id: string;
  name: string;
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
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch modules
      .addCase(fetchModules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchModules.fulfilled, (state, { payload: modules }) => {
        state.modules = modules;
        state.loading = false;
      })
      .addCase(fetchModules.rejected, (state, { error }) => {
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

export const { editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
