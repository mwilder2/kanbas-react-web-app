import { useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router";
import * as client from "../../../KanbasApi";

export default function PeopleDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };

  return (
    <div className="wd-people-details">
      <div className="text-center">
        <FaUserCircle className="fs-1 text-secondary" />
      </div>
      <div className="text-danger fs-4">
        {!editing ? (
          <>
            <FaPencil onClick={() => setEditing(true)} className="float-end fs-5 mt-2 wd-edit" />
            {user.firstName} {user.lastName}
          </>
        ) : (
          <input
            className="form-control w-50"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
          />
        )}
      </div>
      {editing && (
        <>
          <input
            type="email"
            className="form-control w-50"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            className="form-select w-50"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">TA</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
          </select>
          <button onClick={saveUser} className="btn btn-primary mt-2">
            Save
          </button>
        </>
      )}
    </div>
  );
}
