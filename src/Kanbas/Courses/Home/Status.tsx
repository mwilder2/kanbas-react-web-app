import { useState } from "react";

export default function CourseStatus() {
  const [published, setPublished] = useState(false);

  return (
    <div id="wd-course-status">
      <h2>Instructor Course Management</h2>

      {/* Publish/Unpublish Toggle */}
      <button onClick={() => setPublished(!published)}>
        {published ? "Unpublish Course" : "Publish Course"}
      </button>

      <br /><br />

      {/* Additional Management Actions */}
      <button>Import Existing Content</button>
      <button>Import from Commons</button>
      <button>Choose Home Page</button>
      <button>View Course Stream</button>
      <button>New Announcement</button>
      <button>New Analytics</button>
      <button>View Course Notifications</button>

      <br /><br />

      {/* Course Stats */}
      <div>
        <h3>Course Stats</h3>
        <p>Total Students Enrolled: 30</p>
        <p>Assignments Graded: 5/10</p>
        <p>Assignments Pending: 5</p>
      </div>
    </div>
  );
}