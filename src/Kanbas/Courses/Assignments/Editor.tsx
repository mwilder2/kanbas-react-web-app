// src/Kanbas/Courses/Assignments/AssignmentEditor.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { AppDispatch } from "../../store";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const existingAssignment = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find((assignment: any) => assignment._id === aid)
  );

  const [assignment, setAssignment] = useState<any>(
    existingAssignment || {
      course: cid,
      name: "",
      description: "",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
    }
  );

  const saveAssignment = () => {
    if (!assignment.name || !assignment.points || !assignment.dueDate) {
      alert("Please fill out all required fields.");
      return;
    }
    if (aid) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h3>{aid ? "Edit Assignment" : "New Assignment"}</h3>
      <input
        className="form-control mb-2"
        placeholder="Assignment Name"
        value={assignment.name || ""}
        onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={assignment.description || ""}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />
      <input
        className="form-control mb-2"
        type="number"
        placeholder="Points"
        value={assignment.points || 100}
        onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
      />
      <input
        className="form-control mb-2"
        type="date"
        placeholder="Due Date"
        value={assignment.dueDate || ""}
        onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
      />
      <input
        className="form-control mb-2"
        type="date"
        placeholder="Available From"
        value={assignment.availableFrom || ""}
        onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
      />
      <input
        className="form-control mb-2"
        type="date"
        placeholder="Available Until"
        value={assignment.availableUntil || ""}
        onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
      />
      <div className="d-flex justify-content-between">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">
          Cancel
        </Link>
        <button onClick={saveAssignment} className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
