import axios from "axios";

// Create an Axios instance with credentials enabled
const axiosWithCredentials = axios.create({ withCredentials: true });

// Base API URL for the backend server
const API_BASE_URL = "http://localhost:4000/api";

// Individual API endpoint base URLs
const MODULES_API = `${API_BASE_URL}/modules`;
const COURSES_API = `${API_BASE_URL}/courses`;
const USERS_API = `${API_BASE_URL}/users`;
const ASSIGNMENTS_API = `${API_BASE_URL}/assignments`;
const ENROLLMENTS_API = `${API_BASE_URL}/enrollments`;

// Modules API
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${MODULES_API}/course/${courseId}`);
  return response.data;
};

export const getModules = async () => {
  const response = await axiosWithCredentials.get(MODULES_API);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

// export const deleteModule = async (moduleId: string) => {
//   const response = await axios.delete(`${MODULES_API}/${moduleId}`);
//   return response.data;
// };

export const deleteModule = async (moduleId: string) => {
  await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
};

export const updateModule = async (module: any) => {
  const response = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};

// Courses API
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  console.log(data);
  return data;
};

export const updateCourse = async (course: any) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
};

// Users API
const KANBAS_API = "http://localhost:4000/kanbas"; // Separate path for Kanbas-specific routes

export const signIn = async (credentials: { username: string; password: string }) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const signup = async (user: { username: string; password: string }) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  console.log(response.data);
  return response.data;
};

export const getProfile = async () => {
  const response = await axiosWithCredentials.get(`${KANBAS_API}/profile`);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/action/signout`);
  return response.data;
};

// Assignments API
export const getAssignments = async () => {
  const response = await axiosWithCredentials.get(ASSIGNMENTS_API);
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
};

export const updateAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

// Enrollments API
export const getEnrollments = async () => {
  const response = await axiosWithCredentials.get(ENROLLMENTS_API);
  return response.data;
};

export const enrollUser = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(ENROLLMENTS_API, { userId, courseId });
  return response.data;
};

export const unenrollUser = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return { user: userId, course: courseId };
};


// import axios from "axios";

// // Base API URL for the backend server
// const API_BASE_URL = "http://localhost:4000/api";

// // Individual API endpoint base URLs
// const MODULES_API = `${API_BASE_URL}/modules`;
// const COURSES_API = `${API_BASE_URL}/courses`;
// const USERS_API = `${API_BASE_URL}/users`;
// const ASSIGNMENTS_API = `${API_BASE_URL}/assignments`;
// const ENROLLMENTS_API = `${API_BASE_URL}/enrollments`;

// // Modules API
// export const findModulesForCourse = async (courseId: string) => {
//   const response = await axios.get(`${MODULES_API}/course/${courseId}`);
//   return response.data;
// };

// export const getModules = async () => {
//   const response = await axios.get(MODULES_API);
//   return response.data;
// };

// export const addModule = async (module: any) => {
//   const response = await axios.post(MODULES_API, module);
//   return response.data;
// };

// export const deleteModule = async (moduleId: string) => {
//   await axios.delete(`${MODULES_API}/${moduleId}`);
// };

// export const updateModule = async (module: any) => {
//   const response = await axios.put(`${MODULES_API}/${module._id}`, module);
//   return response.data;
// };

// // Courses API
// export const getCourses = async () => {
//   const response = await axios.get(COURSES_API);
//   return response.data;
// };

// export const addCourse = async (course: any) => {
//   const response = await axios.post(COURSES_API, course);
//   return response.data;
// };

// export const deleteCourse = async (courseId: string) => {
//   await axios.delete(`${COURSES_API}/${courseId}`);
// };

// export const updateCourse = async (course: any) => {
//   const response = await axios.put(`${COURSES_API}/${course._id}`, course);
//   return response.data;
// };

// // Users API
// const KANBAS_API = "http://localhost:4000/kanbas"; // Separate path for Kanbas-specific routes
// export const signIn = async (credentials: { username: string; password: string }) => {
//   const response = await axios.post(`${USERS_API}/signin`, credentials);
//   return response.data;
// };

// export const signup = async (user: { username: string; password: string }) => {
//   const response = await axios.post(`${USERS_API}/signup`, user);
//   return response.data;
// };

// export const updateUser = async (user: any) => {
//   const response = await axios.put(`${USERS_API}/${user._id}`, user);
//   console.log(response.data);
//   return response.data;
// };


// export const getProfile = async () => {
//   const response = await axios.get(`${KANBAS_API}/profile`);
//   return response.data;
// };

// export const signout = async () => {
//   const response = await axios.post(`${USERS_API}/action/signout`);
//   return response.data;
// };

// // Assignments API
// export const getAssignments = async () => {
//   const response = await axios.get(ASSIGNMENTS_API);
//   return response.data;
// };

// export const createAssignment = async (assignment: any) => {
//   const response = await axios.post(ASSIGNMENTS_API, assignment);
//   return response.data;
// };

// export const deleteAssignment = async (assignmentId: string) => {
//   await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
// };

// export const updateAssignment = async (assignment: any) => {
//   const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
//   return response.data;
// };

// // Enrollments API
// export const getEnrollments = async () => {
//   const response = await axios.get(ENROLLMENTS_API);
//   return response.data;
// };

// export const enrollUser = async (userId: string, courseId: string) => {
//   const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
//   return response.data;
// };

// export const unenrollUser = async (userId: string, courseId: string) => {
//   const response = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
//   return { user: userId, course: courseId };
// };