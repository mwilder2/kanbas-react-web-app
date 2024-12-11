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
  enrolled?: boolean;
}

interface DashboardProps {
  courses: Course[];
  course: Course | null;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch: AppDispatch = useDispatch();
  const [showEnrollments, setShowEnrollments] = useState(false);

  // Filter courses based on enrollment
  const filteredCourses = showEnrollments
    ? courses
    : courses.filter((course) =>
      enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser?._id && enrollment.course === course._id
      )
    );

  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">
        Dashboard
        {enrolling !== undefined && (
          <button
            onClick={() => setEnrolling(!enrolling)}
            className="btn btn-primary float-end"
          >
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        )}
      </h1>
      <hr />

      {/* Add and Update Buttons */}
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          onClick={addNewCourse}
          id="wd-add-new-course-click"
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>

      {/* Courses Grid */}
      <h2 id="wd-dashboard-published">Published Courses</h2>
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4"
      >
        {courses.map((course) => (
          <div className="col" key={course._id}>
            <div className="card h-100">
              <img
                src={course.image || "/images/reactjs.jpg"}
                className="card-img-top wd-course-img"
                alt={`${course.name} Course`}
              />
              <div className="card-body">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <h5 className="card-title">{course.name}</h5>
                </Link>
                <p className="card-text">{course.description}</p>
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="btn btn-primary"
                >
                  Go
                </Link>

                {/* Enrollment Buttons */}
                {enrolling !== undefined && (
                  <button
                    className={`btn ${course.enrolled ? "btn-danger" : "btn-success"
                      } float-end`}
                    onClick={(event) => {
                      event.preventDefault();
                      if (course.enrolled) {
                        dispatch(
                          unenrollUser({
                            userId: currentUser._id,
                            courseId: course._id,
                          })
                        );
                      } else {
                        dispatch(
                          enrollUser({
                            userId: currentUser._id,
                            courseId: course._id,
                          })
                        );
                      }
                    }}
                  >
                    {course.enrolled ? "Unenroll" : "Enroll"}
                  </button>
                )}

                {/* Faculty-Specific Buttons */}
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