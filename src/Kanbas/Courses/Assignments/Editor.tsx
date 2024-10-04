import { useState } from "react";

export default function AssignmentEditor() {
  const [points, setPoints] = useState(100);

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            id="wd-name"
            className="form-control"
            defaultValue="A1 - ENV + HTML"
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
            defaultValue="The assignment is available online. Submit a link to the landing page of"
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
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <input
            id="wd-group"
            className="form-control"
            defaultValue="Group A"
          />
        </div>
      </div>

      {/* Display Grade As and Submission Type */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
          <select id="wd-display-grade-as" className="form-control">
            <option value="percentage">Percentage</option>
            <option value="letter">Letter</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-control">
            <option value="online">Online</option>
            <option value="in-person">In Person</option>
          </select>
        </div>
      </div>

      {/* Online Entry Options */}
      <div className="row mb-3">
        <div className="col-12">
          <fieldset className="border p-3">
            <legend className="w-auto">Online Entry Options</legend>
            <div className="form-check">
              <input type="checkbox" id="text-entry" className="form-check-input" />
              <label htmlFor="text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="website-url" className="form-check-input" />
              <label htmlFor="website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="media-recordings" className="form-check-input" />
              <label htmlFor="media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="student-annotation" className="form-check-input" />
              <label htmlFor="student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="file-uploads" className="form-check-input" />
              <label htmlFor="file-uploads" className="form-check-label">File Uploads</label>
            </div>
          </fieldset>
        </div>
      </div>

      {/* Assign and Dates */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign" className="form-label">Assign</label>
          <input id="wd-assign" className="form-control" defaultValue="Everyone" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input type="date" id="wd-due-date" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input type="date" id="wd-available-from" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">Available Until</label>
          <input type="date" id="wd-available-until" className="form-control" />
        </div>
      </div>
    </div>
  );
}
