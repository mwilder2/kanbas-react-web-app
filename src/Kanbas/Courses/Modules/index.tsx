// src/Kanbas/Courses/Modules/index.tsx
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setModules, addModule, updateModule, deleteModule } from "./reducer";
import { findModulesForCourse } from "../../../KanbasApi";

export default function Modules() {
  const { cid } = useParams(); // Course ID
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    const fetchedModules = await findModulesForCourse(cid as string);
    dispatch(setModules(fetchedModules));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  return (
    <div className="wd-modules">
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li key={module._id} className="wd-module list-group-item">
            {module.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
