import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { courses } from "../Database"; // Import the courses from the database
import { FaAlignJustify } from "react-icons/fa6"; // Importing the icon for the breadcrumb

export default function Courses() {
  const { cid } = useParams(); // Get the course ID from the URL
  const course = courses.find((course) => course._id === cid); // Find the course by its ID
  const { pathname } = useLocation(); // Get the current location path

  // Extract the current section from the path (e.g., Home, Modules, etc.)
  const currentSection = pathname.split("/")[4]; // Gets the part after /Courses/:cid/

  return (
    <div id="wd-courses">
      {/* Render the breadcrumb: course name > current section */}
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course ? course.name : "Course not found"}
        {currentSection && ` > ${currentSection}`}
      </h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <Routes>
                {/* Set up the nested routes for course content */}
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="People" element={<h2>People</h2>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
