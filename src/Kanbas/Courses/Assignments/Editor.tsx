import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Retrieve course ID and assignment ID from the URL
  const [assignment, setAssignment] = useState<any>(null); // State for storing the assignment data
  const [points, setPoints] = useState<number>(100); // State for points

  // Find the assignment by aid (assignment ID)
  useEffect(() => {
    const foundAssignment = db.assignments.find(
      (assignment: any) => assignment._id === aid
    );
    if (foundAssignment) {
      setAssignment(foundAssignment);
      setPoints(foundAssignment.points); // Initialize points from the assignment
    }
  }, [aid]);

  if (!assignment) {
    return <div>Loading...</div>; // Show a loading state while fetching assignment
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            id="wd-name"
            className="form-control"
            defaultValue={assignment.name} // Fill from the retrieved assignment
          />
        </div>
      </div>

      {/* Description */}
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            className="form-control"
            defaultValue={assignment.description} // Fill from the retrieved assignment
          />
        </div>
      </div>

      {/* Points and Assignment Group */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={points} // Update points dynamically
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <input
            id="wd-group"
            className="form-control"
            defaultValue={assignment.group} // Fill from the retrieved assignment
          />
        </div>
      </div>

      {/* Dates */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input
            type="date"
            id="wd-due-date"
            className="form-control"
            defaultValue={assignment.dueDate} // Fill from the retrieved assignment
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input
            type="date"
            id="wd-available-from"
            className="form-control"
            defaultValue={assignment.availableFrom} // Fill from the retrieved assignment
          />
        </div>
      </div>

      {/* Cancel and Save Buttons */}
      <div className="d-flex justify-content-between">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`} // Navigate back to assignments for the course
          className="btn btn-secondary"
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-primary"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
