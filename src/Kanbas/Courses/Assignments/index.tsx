import { FaSearch, FaPlus } from "react-icons/fa";

export default function Assignments() {
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
        ASSIGNMENTS 40% of Total <button className="btn btn-primary btn-sm ms-2">+</button>
      </h3>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
          <div className="border-start border-success border-3 ps-2">
            <a className="wd-assignment-link h5 mb-0 d-block text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <small className="text-muted">Due: 2024-10-10 | 100 Points</small>
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
          <div className="border-start border-success border-3 ps-2">
            <a className="wd-assignment-link h5 mb-0 d-block text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/124">
              A2 - CSS Basics
            </a>
            <small className="text-muted">Due: 2024-10-17 | 90 Points</small>
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
          <div className="border-start border-success border-3 ps-2">
            <a className="wd-assignment-link h5 mb-0 d-block text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/125">
              A3 - JavaScript Fundamentals
            </a>
            <small className="text-muted">Due: 2024-10-24 | 85 Points</small>
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
          <div className="border-start border-success border-3 ps-2">
            <a className="wd-assignment-link h5 mb-0 d-block text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/126">
              A4 - Flask Introduction
            </a>
            <small className="text-muted">Due: 2024-10-31 | 95 Points</small>
          </div>
        </li>
      </ul>
    </div>
  );
}
