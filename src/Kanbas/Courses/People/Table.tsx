// src/Kanbas/Courses/People/Table.tsx
// import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios"; // For fetching data from the server

export default function PeopleTable() {
  const [users, setUsers] = useState<any[]>([]);

  // Fetch users from the server
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/kanbas/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch data on component load
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamically render rows based on the filtered list of users */}
          {users.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



// const { cid } = useParams(); // Get the course ID from the URL
// const { users, enrollments } = db; // Extract users and enrollments from the database

// Filter users based on their enrollment in the selected course
// const enrolledUsers = users.filter((user) =>
//   enrollments.some((enrollment) => enrollment.user === user._id && enrollment.course === cid)
// );
