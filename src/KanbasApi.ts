import axios from "axios";

const API_BASE_URL = "http://localhost:4000/kanbas";

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
  await axios.put(`${API_BASE_URL}/courses/${course._id}`, course);
};

export const signIn = async (credentials: { username: string; password: string }) => {
  const response = await axios.post("http://localhost:4000/kanbas/signin", credentials);
  return response.data;
};

export const getAssignments = async () => {
  const response = await axios.get("http://localhost:4000/kanbas/assignments");
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axios.post("http://localhost:4000/kanbas/assignments", assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  await axios.delete(`http://localhost:4000/kanbas/assignments/${assignmentId}`);
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`http://localhost:4000/kanbas/assignments/${assignment._id}`, assignment);
  return response.data;
};
