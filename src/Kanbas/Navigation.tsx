import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

      {/* Northeastern Link with Logo */}
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        rel="noreferrer"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.svg" width="75px" alt="Northeastern Logo" />
      </a>

      {/* Account Link */}
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text-white" />
        <br /> Account
      </Link>
      <br />

      {/* Dashboard Link */}
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br /> Dashboard
      </Link>
      <br />

      {/* Courses Link */}
      <Link to="/Kanbas/Courses/CS1010/Home" id="wd-course-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <LiaBookSolid className="fs-1 text-danger" />
        <br /> Courses
      </Link>
      <br />

      {/* Calendar Link */}
      <button id="wd-calendar-link"
        className="list-group-item text-center border-0 bg-black text-white"
        disabled>
        <IoCalendarOutline className="fs-1 text-white" />
        <br /> Calendar
      </button>
      <br />

      {/* Inbox Link */}
      <button id="wd-inbox-link"
        className="list-group-item text-center border-0 bg-black text-white"
        disabled>
        <FaInbox className="fs-1 text-white" />
        <br /> Inbox
      </button>
      <br />


      {/* Labs Link */}
      <Link to="/Labs" id="wd-labs-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <LiaCogSolid className="fs-1 text-white" />
        <br /> Labs
      </Link>
      <br />

      {/* People Link */}
      <Link to="/Kanbas/People" id="wd-people-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaUserCircle className="fs-1 text-white" />
        <br /> People
      </Link>
    </div>
  );
}
