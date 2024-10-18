import { Link, useParams } from "react-router-dom";
import { FaSearch, FaPlus } from "react-icons/fa";
import * as db from "../../Database"; // Import the database

export default function Assignments() {
  const { cid } = useParams(); // Get the course ID from the URL
  const assignments = db.assignments.filter((assignment) => assignment.course === cid); // Filter assignments by course

  return (
    <div id="wd-assignments" className="container">
      {/* Search Bar */}
      <div className="d-flex align-items-center mb-3">
        <FaSearch className="me-2 fs-4 text-muted" />
        <input
          id="wd-search-assignment"
          className="form-control me-2"
          type="text"
          placeholder="Search for Assignments"
          style={{ width: "100%" }}
        />
      </div>

      {/* Assignment Buttons */}
      <div className="d-flex justify-content-end mb-4">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-danger me-2">
          <FaPlus className="me-1" /> Group
        </button>
        <button id="wd-add-assignment" className="btn btn-lg btn-success">
          <FaPlus className="me-1" /> Assignment
        </button>
      </div>

      {/* Assignments Header */}
      <h3 id="wd-assignments-title" className="mb-3">
        ASSIGNMENTS ({assignments.length} Total)
      </h3>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-group">
        {assignments.map((assignment) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="border-start border-success border-3 ps-2">
              <Link
                className="wd-assignment-link h5 mb-0 d-block text-decoration-none"
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </Link>
              <small className="text-muted">Due: {assignment.dueDate} | {assignment.points} Points</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
