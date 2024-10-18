import { Link } from "react-router-dom";
import '../styles.css';
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;  // Get courses from JSON file

  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      {/* Bootstrap Grid for Courses */}
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {courses.map((course) => (
          <div className="col" key={course._id}>
            <div className="card h-100">
              <img src={course.image} className="card-img-top wd-course-img" alt={`${course.name} Course`} />
              <div className="card-body">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}>
                  <h5 className="card-title">{course.name}</h5>
                </Link>
                <p className="card-text">{course.description}</p>
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
