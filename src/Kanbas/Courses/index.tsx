import { useParams } from "react-router";
import { Navigate, Route, Routes, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams(); // Get the course ID from the URL
  const course = courses.find((course) => course._id === cid); // Find the course by its ID
  const { pathname } = useLocation(); // Get the current location path

  const currentSection = pathname.split("/")[4]; // Gets the part after /Courses/:cid/

  return (
    <div id="wd-courses">
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
