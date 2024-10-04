import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h3>Sign in</h3>

      {/* Username input */}
      <input
        id="wd-username"
        placeholder="Username"
        className="form-control mb-2"
      />

      {/* Password input */}
      <input
        id="wd-password"
        placeholder="Password"
        type="password"
        className="form-control mb-3"
      />

      {/* Signin button */}
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Dashboard"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Link>

      {/* Signup link in default blue */}
      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
        className="d-block mt-2 text-primary"
        style={{ fontSize: '14px' }}
      >
        Sign up
      </Link>
    </div>
  );
}
