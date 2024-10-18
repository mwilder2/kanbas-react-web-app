import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the current course ID from the URL
  const { pathname } = useLocation(); // Get the current pathname

  // Array of links to be displayed in the sidebar
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const lowerLink = link.toLowerCase(); // Make the link lowercase for the URL
        const isActive = pathname.includes(lowerLink); // Check if the link is active based on the pathname

        return (
          <Link
            key={link}
            id={`wd-course-${lowerLink}-link`}
            to={`/Kanbas/Courses/${cid}/${lowerLink}`} // Encode the course ID in the path
            className={`list-group-item border-0 ${isActive ? "active text-white" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
