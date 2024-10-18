// src/Kanbas/Courses/Modules/index.tsx
import { useParams } from "react-router";
import * as db from "../../Database"; // Import the modules from the Database
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams(); // Get the course ID from the URL
  const modules = db.modules; // Get the modules from the database

  return (
    <div>
      {/* Add the controls at the top */}
      <ModulesControls /><br /><br /><br /><br />

      {/* List of modules dynamically filtered by course ID */}
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid) // Filter modules by course ID
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <LessonControlButtons />
              </div>
              {/* Render lessons within each module */}
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                    <ul className="wd-content">
                      {lesson.content.map((contentItem: string, index: number) => (
                        <li key={index} className="wd-content-item">
                          {contentItem}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
