import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5">
      <h3>Profile</h3>

      {/* Username input */}
      <input
        id="wd-username"
        value="alice"
        placeholder="Username"
        className="form-control mb-2"
      />

      {/* Password input */}
      <input
        id="wd-password"
        value="123"
        placeholder="Password"
        type="password"
        className="form-control mb-2"
      />

      {/* First Name input */}
      <input
        id="wd-firstname"
        value="Alice"
        placeholder="First Name"
        className="form-control mb-2"
      />

      {/* Last Name input */}
      <input
        id="wd-lastname"
        value="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2"
      />

      {/* Date of Birth input */}
      <input
        id="wd-dob"
        value="2000-01-01"
        type="date"
        className="form-control mb-2"
      />

      {/* Email input */}
      <input
        id="wd-email"
        value="alice@wonderland"
        type="email"
        className="form-control mb-2"
      />

      {/* Role select dropdown */}
      <select id="wd-role" className="form-control mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      {/* Signout button */}
      <Link
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100"
      >
        Sign out
      </Link>
    </div>
  );
}
