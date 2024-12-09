import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as client from "../../KanbasApi";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [form, setForm] = useState({ username: "", password: "", verifyPassword: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    if (form.password !== form.verifyPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const newUser = await client.signup({
        username: form.username,
        password: form.password,
      });

      dispatch(setCurrentUser(newUser));
      navigate("/Kanbas/Account/Profile");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Sign up failed. Please try again.");
    }
  };

  return (
    <div id="wd-signup-screen" className="container mt-5">
      <h3>Sign up</h3>

      {/* Display error message */}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      {/* Username input */}
      <input
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className="form-control mb-2"
      />

      {/* Password input */}
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="form-control mb-2"
      />

      {/* Verify password input */}
      <input
        placeholder="Verify Password"
        type="password"
        value={form.verifyPassword}
        onChange={(e) => setForm({ ...form, verifyPassword: e.target.value })}
        className="form-control mb-3"
      />

      {/* Signup button */}
      <button onClick={signup} className="btn btn-primary w-100 mb-2">
        Sign up
      </button>

      {/* Signin link */}
      <Link to="/Kanbas/Account/Signin" className="text-danger d-inline-block mt-1" style={{ fontSize: "12px" }}>
        Sign in
      </Link>
    </div>
  );
}
