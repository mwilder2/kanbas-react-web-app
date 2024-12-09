import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "../../KanbasApi"; // Import API client functions

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error handling
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try {
      // Authenticate user using the backend API
      const user = await client.signIn(credentials);

      // If authentication succeeds, store user in Redux and navigate to Dashboard
      dispatch(setCurrentUser(user));
      navigate("/Kanbas/Dashboard");
    } catch (error: any) {
      // Handle error
      setErrorMessage(error.response?.data?.message || "Sign in failed. Please try again.");
    }
  };

  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h3>Sign in</h3>

      {/* Display error message */}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

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
        style={{ fontSize: "14px" }}
      >
        Sign up
      </Link>
    </div>
  );
}
