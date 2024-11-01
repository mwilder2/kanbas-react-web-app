// src/Kanbas/Account/Signin.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import { setCurrentUser } from "./reducer";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = () => {
    // Find user in database that matches entered credentials
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password
    );

    // If user is found, store in Redux and navigate to Dashboard
    if (user) {
      dispatch(setCurrentUser(user));
      navigate("/Kanbas/Dashboard");
    }
  };

  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h3>Sign in</h3>

      {/* Username input */}
      <input
        id="wd-username"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="form-control mb-2"
      />

      {/* Password input */}
      <input
        id="wd-password"
        placeholder="Password"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="form-control mb-3"
      />

      {/* Signin button */}
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100 mb-2">
        Sign in
      </button>

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
