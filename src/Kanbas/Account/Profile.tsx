import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "../../KanbasApi";


export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = async () => {
    if (!currentUser) {
      try {
        const profileData = await client.getProfile();
        setProfile(profileData);
        dispatch(setCurrentUser(profileData));
      } catch {
        navigate("/Kanbas/Account/Signin");
      }
    } else {
      setProfile(currentUser);
    }
  };
  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      setProfile(updatedProfile); // Update local state
      dispatch(setCurrentUser(updatedProfile)); // Update Redux state

      // Provide user feedback
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile.");
    }
  };

  const signout = async () => {
    await client.signout(); // Call the backend API to reset the user
    dispatch(setCurrentUser(null)); // Clear the current user in the Redux store
    navigate("/Kanbas/Account/Signin"); // Navigate to the Sign In page
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen" className="container mt-5">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input
            value={profile.username}
            className="form-control mb-2"
            placeholder="Username"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            value={profile.password}
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            value={profile.firstName}
            className="form-control mb-2"
            placeholder="First Name"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            value={profile.lastName}
            className="form-control mb-2"
            placeholder="Last Name"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            value={profile.dob}
            type="date"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            value={profile.email}
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            value={profile.role}
            className="form-control mb-3"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
            Update
          </button>
          <button onClick={signout} className="btn btn-danger w-100">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
