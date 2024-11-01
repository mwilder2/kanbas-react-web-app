// src/Kanbas/index.tsx
import { Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import PeopleTable from "./Courses/People/Table";
import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute"; // Import ProtectedRoute

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />

          {/* Protect Dashboard and Courses routes */}
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />

          <Route path="/People" element={<PeopleTable />} />
        </Routes>
      </div>
    </div>
  );
}
