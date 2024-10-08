import { useState } from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from "react-icons/fa";

export default function CourseStatus() {
  const [published, setPublished] = useState(false);

  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Instructor Course Management</h2>

      {/* Publish/Unpublish Toggle */}
      <div className="d-flex mb-3">
        <div className="w-50 pe-1">
          <button
            className={`btn btn-lg ${published ? "btn-success" : "btn-secondary"} w-100`}
            onClick={() => setPublished(!published)}
          >
            {published ? (
              <>
                <FaCheckCircle className="me-2 fs-5" /> Unpublish
              </>
            ) : (
              <>
                <MdDoNotDisturbAlt className="me-2 fs-5" /> Publish
              </>
            )}
          </button>
        </div>
      </div>

      {/* Additional Management Actions */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaStream className="me-2 fs-5" /> View Course Stream
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaChartBar className="me-2 fs-5" /> New Analytics
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications
      </button>

      {/* Course Stats */}
      <br /><br />
      <div>
        <h3>Course Stats</h3>
        <p>Total Students Enrolled: 30</p>
        <p>Assignments Graded: 5/10</p>
        <p>Assignments Pending: 5</p>
      </div>
    </div>
  );
}
