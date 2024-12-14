import { Routes, Route, Navigate } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Courses from "./Courses";
import PeopleTable from "./Courses/People/Table";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { fetchCoursesAsync, addCourseAsync, updateCourseAsync, deleteCourseAsync, setCurrentCourse } from "./Courses/reducer";
import { AppDispatch } from "./store";
import Session from "./Account/Session";

export default function Kanbas() {

  const dispatch: AppDispatch = useDispatch();

  const { courses, currentCourse, loading, error } = useSelector((state: any) => state.courses);


  useEffect(() => {
    // Fetch courses on component load
    dispatch(fetchCoursesAsync());
  }, [dispatch]);

  const addNewCourse = () => {
    const newCourse = {
      _id: Date.now().toString(),
      name: "New Course",
      description: "A new course description.",
      image: "/images/default.jpg",
    };
    dispatch(addCourseAsync(newCourse));
  };

  const updateCourse = () => {
    if (currentCourse) {
      const updatedCourse = { ...currentCourse, name: `${currentCourse.name} (Updated)` };
      dispatch(updateCourseAsync(updatedCourse));
    }
  };

  const deleteCourse = (courseId: string) => {
    dispatch(deleteCourseAsync(courseId));
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={currentCourse}
                    setCourse={(course) => dispatch(setCurrentCourse(course))}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
            <Route path="/People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
