import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });


// Base API URL for the backend server
const API_BASE_URL = "http://localhost:4000/api";

// Users API
export const signIn = async (credentials: { username: string; password: string }) => {
  const response = await axios.post("http://localhost:4000/kanbas/signin", credentials);
  return response.data;
};

export const signup = async (user: { username: string; password: string }) => {
  const response = await axios.post("http://localhost:4000/api/users/signup", user);
  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get("http://localhost:4000/kanbas/profile");
  return response.data;
};

export const updateProfile = async (profile: any) => {
  const response = await axios.put("http://localhost:4000/kanbas/profile", profile);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/?role=${role}`);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/?name=${name}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${id}`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
  return response.data;
}

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${API_BASE_URL}/users/${user._id}`, user);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${API_BASE_URL}/users`, user);
  return response.data;
};

// Retrieve courses for a specific user
export const findCoursesForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${API_BASE_URL}/users/${userId}/courses`);
  return response.data;
};

// Courses API
export const getCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${API_BASE_URL}/courses`);
  return data;
};

export const addCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${API_BASE_URL}/courses/`, course);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${API_BASE_URL}/courses/${id}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${API_BASE_URL}/courses/${course._id}`, course);
  return data;
};


// Assignments API calls
export const getAssignments = async () => {
  const response = await axios.get(`${API_BASE_URL}/assignments`);
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axios.post(`${API_BASE_URL}/assignments`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  await axios.delete(`${API_BASE_URL}/assignments/${assignmentId}`);
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${API_BASE_URL}/assignments/${assignment._id}`, assignment);
  return response.data;
};


// Modules API
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${API_BASE_URL}/modules/${courseId}/modules`);
  return response.data;
};

export const getModules = async () => {
  const response = await axios.get(`${API_BASE_URL}/modules`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(`${API_BASE_URL}/modules/${courseId}/modules`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  await axios.delete(`${API_BASE_URL}/modules/${moduleId}`);
};

// Update a module
export const updateModule = async (module: any) => {
  const response = await axiosWithCredentials.put(`${API_BASE_URL}/modules/${module._id}`, module);
  return response.data;
};

// Enrollments API calls
export const getEnrollments = async () => {
  const response = await axios.get(`${API_BASE_URL}/enrollments`);
  return response.data;
};

export const enrollUser = async (userId: string, courseId: string) => {
  const response = await axios.post(`${API_BASE_URL}/enrollments`, { userId, courseId });
  return response.data;
};

export const unenrollUser = async (userId: string, courseId: string) => {
  const response = await axios.delete(
    `${API_BASE_URL}/enrollments/${userId}/${courseId}`
  );
  return { user: userId, course: courseId };
};