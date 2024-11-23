// src/Kanbas/index.tsx
import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as client from "../KanbasApi";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Courses from "./Courses";
import PeopleTable from "./Courses/People/Table";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  // Fetch courses on load
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await client.getCourses();
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  // Add new course
  const addNewCourse = async () => {
    try {
      const newCourse = await client.addCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Error adding new course:", error);
    }
  };

  // Delete course
  const deleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // Update course
  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(
        courses.map((c) => (c._id === course._id ? course : c))
      );
    } catch (error) {
      console.error("Error updating course:", error);
    }
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
