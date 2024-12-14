import axios from "axios";

const REMOTE_SERVER = "http://localhost:4000/api";

// Welcome message
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

// Assignment operations
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;

export const fetchAssignment = async () => {
  const response = await axios.get(ASSIGNMENT_API);
  return response.data;
};

export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

// Todos operations
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

export const fetchTodos = async () => {
  try {
    const response = await axios.get(TODOS_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

export const createTodo = async (title: string = "New Task") => {
  const response = await axios.post(TODOS_API, { title });
  return response.data;
};

export const postTodo = async (todo: any) => {
  const response = await axios.post(`${TODOS_API}`, todo);
  return response.data;
};

export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data; // This will be empty since the server sends only a status
};