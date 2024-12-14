import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setModules, addModule, deleteModule, updateModule, editModule } from "./reducer";
import { findModulesForCourse, createModuleForCourse } from "../../../KanbasApi";
import { AppDispatch } from "../../store";
import * as client from "../../../KanbasApi";


export default function Modules() {
  const { cid } = useParams(); // Course ID
  const dispatch: AppDispatch = useDispatch(); // Type the dispatch function
  const [moduleName, setModuleName] = useState(""); // Input for new module
  const { modules } = useSelector((state: any) => state.modulesReducer);

  const fetchModules = async () => {
    const fetchedModules = await findModulesForCourse(cid as string);
    dispatch(setModules(fetchedModules));
  };

  const handleCreateModule = async () => {
    if (!cid) return;
    const newModule = { name: moduleName };
    const createdModule = await createModuleForCourse(cid, newModule);
    dispatch(addModule(createdModule));
    setModuleName(""); // Clear input field after creation
  };

  const removeModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId); // Call the API to delete the module
      dispatch(deleteModule(moduleId)); // Update Redux store
    } catch (error) {
      console.error("Failed to delete module:", error);
    }
  };

  const saveModule = async (module: any) => {
    try {
      const updatedModule = await client.updateModule(module);
      dispatch(updateModule(updatedModule)); // Update in Redux state
    } catch (error) {
      console.error("Failed to save module:", error);
    }
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  return (
    <div className="wd-modules">
      <h2>Modules</h2>

      {/* Input for adding a new module */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Module Name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleCreateModule}
          disabled={!moduleName.trim()}
        >
          Add Module
        </button>
      </div>

      {/* List of modules */}
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li className="list-group-item d-flex justify-content-between" key={module._id}>
            {/* Conditional rendering for editing */}
            {!module.editing ? (
              <>
                <span>{module.name}</span>
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(editModule(module._id))}
                >
                  Edit
                </button>
              </>
            ) : (
              <input
                className="form-control w-75 d-inline-block"
                value={module.name}
                onChange={(e) =>
                  dispatch(
                    setModules(
                      modules.map((m: any) =>
                        m._id === module._id ? { ...m, name: e.target.value } : m
                      )
                    )
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveModule({ ...module, editing: false });
                  }
                }}
              />
            )}
            <button
              className="btn btn-danger"
              onClick={() => removeModule(module._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
