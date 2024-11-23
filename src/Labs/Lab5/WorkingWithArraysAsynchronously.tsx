import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch todos on load
  const fetchTodos = async () => {
    try {
      const fetchedTodos = await client.fetchTodos();
      setTodos(fetchedTodos);
      setErrorMessage(null); // Clear errors on successful fetch
    } catch (error: any) {
      setErrorMessage("Failed to fetch todos.");
    }
  };

  // Remove todo by ID
  const removeTodo = async (todo: any) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Failed to remove todo.");
    }
  };

  // Create todo
  const createTodo = async () => {
    try {
      const todos = await client.createTodo("Custom Task");
      setTodos(todos);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage("Failed to create a new todo.");
    }
  };

  // Post todo
  const postTodo = async () => {
    try {
      const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false });
      setTodos([...todos, newTodo]);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage("Failed to post a new todo.");
    }
  };

  // Delete todo
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Failed to delete todo.");
    }
  };

  // Edit todo (toggle editing mode)
  const editTodo = (todo: any) => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...todo, editing: true } : t
      )
    );
  };

  // Update todo using PUT
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(
        todos.map((t) =>
          t.id === todo.id ? { ...todo, editing: false } : t
        )
      );
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Failed to update todo.");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
              id="wd-delete-todo"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
              id="wd-edit-todo"
            />
            <input
              type="checkbox"
              className="form-check-input me-2"
              defaultChecked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            ) : (
              <input
                className="form-control w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) =>
                  updateTodo({ ...todo, title: e.target.value })
                }
              />
            )}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
