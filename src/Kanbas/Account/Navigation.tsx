import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {/* Signin Link */}
      <Link
        to="/Kanbas/Account/Signin"
        className="list-group-item text-danger border border-0"
      >
        Signin
      </Link>

      {/* Signup Link */}
      <Link
        to="/Kanbas/Account/Signup"
        className="list-group-item text-danger border border-0"
      >
        Signup
      </Link>

      {/* Profile Link */}
      <Link
        to="/Kanbas/Account/Profile"
        className="list-group-item text-danger border border-0"
      >
        Profile
      </Link>
    </div>
  );
}
