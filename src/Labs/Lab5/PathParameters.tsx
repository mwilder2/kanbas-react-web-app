import React, { useState } from "react";

const REMOTE_SERVER = "http://localhost:4000/api";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS101",
    name: "Introduction to Programming",
    description: "A beginner-level programming course.",
    course: "Computer Science",
  });

  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>

      {/* Assignment Section */}
      <h4>Modifying Assignment Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75 mb-2"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        className="form-control w-75 mb-2"
        id="wd-assignment-score"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <input
        className="form-check-input mb-2"
        id="wd-assignment-completed"
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            completed: e.target.checked,
          })
        }
      />
      <hr />

      {/* Module Section */}
      <h4>Modifying Module Properties</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
      >
        Update Name
      </a>
      <input
        className="form-control w-75 mb-2"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) =>
          setModule({ ...module, name: e.target.value })
        }
      />
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
      >
        Update Description
      </a>
      <input
        className="form-control w-75 mb-2"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <hr />
    </div>
  );
}