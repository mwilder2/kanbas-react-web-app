// src/Kanbas/Dashboard/index.tsx
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import '../styles.css';
import { useState } from "react";
import { enrollUser, unenrollUser } from "../Account/enrollmentReducer";
import { AppDispatch } from "../store";

// Define types for props
interface Course {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  // Access current user from Redux store
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch: AppDispatch = useDispatch();
  const [showEnrollments, setShowEnrollments] = useState(false);

  const filteredCourses = courses;


  // const filteredCourses = showEnrollments
  //   ? courses
  //   : courses.filter((course) =>
  //     enrollments.some(
  //       (enrollment: any) =>
  //         enrollment.user === currentUser?._id && enrollment.course === course._id
  //     )
  //   );

  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button className="btn btn-primary float-end" onClick={addNewCourse} id="wd-add-new-course-click">
          Add
        </button>
        <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5>
      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-info float-end mb-3"
          onClick={() => setShowEnrollments(!showEnrollments)}
        >
          {showEnrollments ? "Show My Courses" : "Show All Courses"}
        </button>
      )}
      <hr />

      {/* Bootstrap Grid for Courses */}
      <h2 id="wd-dashboard-published">Published Courses</h2>
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredCourses.map((course) => (
          <div className="col" key={course._id}>
            <div className="card h-100">
              <img src={course.image || "/images/reactjs.jpg"} className="card-img-top wd-course-img" alt={`${course.name} Course`} />
              <div className="card-body">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <h5 className="card-title">{course.name}</h5>
                </Link>
                <p className="card-text">{course.description}</p>
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                  Go
                </Link>
                {currentUser?.role === "STUDENT" && (
                  enrollments.some(
                    (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id
                  ) ? (
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(unenrollUser({ userId: currentUser._id, courseId: course._id }));
                      }}
                      className="btn btn-danger float-end"
                    >
                      Unenroll
                    </button>
                  ) : (
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(enrollUser({ userId: currentUser._id, courseId: course._id }));
                      }}
                      className="btn btn-success float-end"
                    >
                      Enroll
                    </button>
                  )
                )}
                {currentUser?.role === "FACULTY" && (
                  <>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                      id="wd-edit-course-click"
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}