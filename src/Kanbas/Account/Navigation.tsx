import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  // Define the links based on whether the user is logged in
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  // Helper function for active link styling
  const isActive = (link: string) => (pathname.includes(link) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {/* Render general links */}
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item text-danger border-0 ${isActive(link)}`}
        >
          {link}
        </Link>
      ))}
      {/* Render the Users link for ADMIN users */}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item text-danger border-0 ${isActive("Users")}`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
