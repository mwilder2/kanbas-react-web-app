// src/Kanbas/Account/Users.tsx
import { useState, useEffect } from "react";
import PeopleTable from "../Courses/People/Table";
import * as client from "../../KanbasApi";
import { FaPlus } from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    const allUsers = await client.findAllUsers();
    setUsers(allUsers);
  };


  const filterUsersByRole = async (selectedRole: string) => {
    setRole(selectedRole);
    if (selectedRole) {
      const filteredUsers = await client.findUsersByRole(selectedRole);
      setUsers(filteredUsers);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (searchName: string) => {
    setName(searchName);
    if (searchName) {
      const filteredUsers = await client.findUsersByPartialName(searchName);
      setUsers(filteredUsers);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const newUser = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@example.com`,
      role: "STUDENT",
    });
    setUsers([...users, newUser]); // Update local users list
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      {/* Filter by name */}
      <input
        className="form-control float-start w-25 me-2 wd-filter-by-name"
        placeholder="Search people"
        value={name}
        onChange={(e) => filterUsersByName(e.target.value)}
      />
      {/* Filter by role */}
      <select
        className="form-select float-start w-25 wd-select-role"
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <button onClick={createUser} className="btn btn-success float-end mb-3">
        <FaPlus className="me-2" />Add User</button>
      {/* Display filtered users */}
      <PeopleTable users={users} />
    </div>
  );
}
