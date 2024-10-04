import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5">
      <h3>Sign up</h3>

      {/* Username input */}
      <input
        placeholder="Username"
        className="form-control mb-2"
      />

      {/* Password input */}
      <input
        placeholder="Password"
        type="password"
        className="form-control mb-2"
      />

      {/* Verify password input */}
      <input
        placeholder="Verify Password"
        type="password"
        className="form-control mb-3"
      />

      {/* Signup button */}
      <Link
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>

      {/* Signin link */}
      <Link
        to="/Kanbas/Account/Signin"
        className="text-danger d-inline-block mt-1"
        style={{ fontSize: '12px' }}
      >
        Sign in
      </Link>

      {/* Profile link */}
      <Link
        to="/Kanbas/Account/Profile"
        className="text-danger d-inline-block mt-1 ms-3"
        style={{ fontSize: '12px' }}
      >
        Profile
      </Link>
    </div>
  );
}
