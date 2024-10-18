import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Courses/CS1010/Home", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid }
  ];

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
      <br />

      {/* Account Link */}
      <Link to="/Kanbas/Account" id="wd-account-link"
        className={`list-group-item text-center border-0 ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br /> Account
      </Link>
      <br />

      {/* Dynamically Render Links */}
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0 ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}
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