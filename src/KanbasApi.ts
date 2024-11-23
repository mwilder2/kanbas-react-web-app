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
