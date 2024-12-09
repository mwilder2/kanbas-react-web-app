import axios from "axios";

// Base API URL for the backend server
const API_BASE_URL = "http://localhost:4000/api";

// Modules API
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${API_BASE_URL}/modules/course/${courseId}`);
  return response.data;
};

export const getModules = async () => {
  const response = await axios.get(`${API_BASE_URL}/modules`);
  return response.data;
};

export const addModule = async (module: any) => {
  const response = await axios.post(`${API_BASE_URL}/modules`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  await axios.delete(`${API_BASE_URL}/modules/${moduleId}`);
};

export const updateModule = async (module: any) => {
  const response = await axios.put(`${API_BASE_URL}/modules/${module._id}`, module);
  return response.data;
};


// Courses API
export const getCourses = async () => {
  const response = await axios.get(`${API_BASE_URL}/courses`);
  return response.data;
};

export const addCourse = async (course: any) => {
  const response = await axios.post(`${API_BASE_URL}/courses`, course);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  await axios.delete(`${API_BASE_URL}/courses/${courseId}`);
};

export const updateCourse = async (course: any) => {
  const response = await axios.put(`${API_BASE_URL}/courses/${course._id}`, course);
  return response.data;
};

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