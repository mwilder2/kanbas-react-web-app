import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles.css";
import { AppDispatch } from "../store";
import { enrollUser, unenrollUser } from "../Account/enrollmentReducer";

// Define types for props
interface Course {
  _id: string;
  name: string;
  number: string;
  credits: number;
  description: string;
}

interface DashboardProps {
  courses: Course[];
  setCourse: (course: Course) => void;
  addNewCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: Course) => void;
}

export default function Dashboard({
  courses,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const dispatch: AppDispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null); // Track course being edited
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  // Local state for showing enrolled or all courses
  const [showEnrollments, setShowEnrollments] = useState(false);

  // Toggle enrollments view
  const toggleEnrollmentsView = () => {
    setShowEnrollments(!showEnrollments);
  };

  // Filter courses based on enrollment status
  const filteredCourses =
    currentUser?.role === "FACULTY"
      ? courses // Faculty: Show all courses
      : showEnrollments
        ? courses // Student: Show all courses if "Show All Courses" is toggled
        : courses.filter((course) =>
          enrollments.some(
            (enrollment: any) =>
              enrollment.user === currentUser?._id &&
              enrollment.course === course._id
          )
        );

  const handleUpdateCourse = () => {
    if (editingCourse) {
      updateCourse(editingCourse);
      setEditingCourse(null); // Exit edit mode
    }
  };


  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser?.role === "FACULTY" && (
        <button
          className="btn btn-primary float-end mb-3"
          onClick={() =>
            addNewCourse({
              _id: "",
              name: "New Course",
              number: "CS-101",
              credits: 3,
              description: "This is a new course",
            })
          }
          id="wd-add-new-course-click"
        >
          Add
        </button>
      )}

      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-info float-end mb-3"
          onClick={toggleEnrollmentsView}
        >
          {showEnrollments ? "Show My Courses" : "Show All Courses"}
        </button>
      )}

      <hr />

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredCourses.map((course) => (
          <div className="col" key={course._id}>
            <div className="card h-100">
              <img
                src={"/images/reactjs.jpg"}
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

                {/* Enrollment Buttons for Students */}
                {currentUser?.role === "STUDENT" &&
                  (enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  ) ? (
                    <button
                      className="btn btn-danger float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        toggleEnrollmentsView();
                        dispatch(
                          unenrollUser({
                            userId: currentUser._id,
                            courseId: course._id,
                          })
                        );
                      }}
                    >
                      Unenroll
                    </button>
                  ) : (
                    <button
                      className="btn btn-success float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(
                          enrollUser({
                            userId: currentUser._id,
                            courseId: course._id,
                          })
                        );
                      }}
                    >
                      Enroll
                    </button>
                  ))}

                {/* Edit/Delete Buttons for Faculty */}
                {currentUser?.role === "FACULTY" && (
                  editingCourse && editingCourse._id === course._id ? (
                    <>
                      {/* Edit Form */}
                      <input
                        type="text"
                        value={editingCourse.name}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            name: e.target.value,
                          })
                        }
                        className="form-control mb-2"
                      />
                      <textarea
                        value={editingCourse.description}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            description: e.target.value,
                          })
                        }
                        className="form-control mb-2"
                      />
                      <button
                        className="btn btn-success me-2"
                        onClick={handleUpdateCourse}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setEditingCourse(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Default View */}
                      <button
                        className="btn btn-warning me-2 float-end"
                        onClick={() => setEditingCourse(course)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger float-end"
                        onClick={() => deleteCourse(course._id)}
                      >
                        Delete
                      </button>
                    </>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


{/* {currentUser?.role === "FACULTY" && (
                  <>
                    <button
                      className="btn btn-warning me-2 float-end"
                      onClick={() => updateCourse(course)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger float-end"
                      onClick={() => deleteCourse(course._id)}
                    >
                      Delete
                    </button>
                  </>
                )} */}