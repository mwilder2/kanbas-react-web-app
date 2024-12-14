import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const API = `http://localhost:4000/api/lab5/todos`;
  const [todo, setTodo] = useState({ id: "1", completed: false, description: "New Description" });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Update Completed */}
      <h4>Updating the Completed Property</h4>
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary float-end"
      >
        Complete Todo ID = {todo.id}
      </a>
      <input
        type="checkbox"
        checked={todo.completed}
        className="form-check-input float-start me-2"
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      />
      <input
        defaultValue={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <br />
      <br />
      <hr />

      {/* Update Description */}
      <h4>Updating the Description Property</h4>
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary float-end"
      >
        Describe Todo ID = {todo.id}
      </a>
      <input
        defaultValue={todo.description}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        defaultValue={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <br />
      <br />
      <hr />
    </div>
  );
}