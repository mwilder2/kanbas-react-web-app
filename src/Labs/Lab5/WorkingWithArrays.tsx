import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
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

// import React, { useState } from "react";

// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// export default function WorkingWithArrays() {
//   const API = `${REMOTE_SERVER}/lab5/todos`;
//   const [todo, setTodo] = useState({ id: "1", title: "New Task" });

//   return (
//     <div id="wd-working-with-arrays">
//       <h3>Working with Arrays</h3>

//       {/* Create a Todo */}
//       <h4>Creating new Items in an Array</h4>
//       <a
//         id="wd-create-todo"
//         className="btn btn-primary"
//         href={`${API}/create`}
//       >
//         Create Todo
//       </a>
//       <hr />

//       {/* Delete a Todo */}
//       <h4>Deleting from an Array</h4>
//       <a
//         id="wd-delete-todo"
//         className="btn btn-primary float-end"
//         href={`${API}/${todo.id}/delete`}
//       >
//         Delete Todo with ID = {todo.id}
//       </a>
//       <input
//         defaultValue={todo.id}
//         className="form-control w-50"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />
//       <hr />
//       {/* Update a Todo */}
//       <h4>Updating an Item in an Array</h4>
//       <a
//         href={`${API}/${todo.id}/title/${todo.title}`}
//         className="btn btn-primary float-end"
//       >
//         Update Todo
//       </a>
//       <input
//         defaultValue={todo.id}
//         className="form-control w-25 float-start me-2"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />
//       <input
//         defaultValue={todo.title}
//         className="form-control w-50 float-start"
//         onChange={(e) => setTodo({ ...todo, title: e.target.value })}
//       />
//       <br />
//       <br />
//       <hr />
//     </div>

//   );
// }



// import React, { useState } from "react";

// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// export default function WorkingWithArrays() {
//   const API = `${REMOTE_SERVER}/lab5/todos`;
//   const [todo, setTodo] = useState({ id: "1" });

//   return (
//     <div id="wd-working-with-arrays">
//       <h3>Working with Arrays</h3>

//       {/* Retrieve All Todos */}
//       <h4>Retrieving Arrays</h4>
//       <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
//         Get Todos
//       </a>
//       <hr />

//       {/* Retrieve a Todo by ID */}
//       <h4>Retrieving an Item from an Array by ID</h4>
//       <a
//         id="wd-retrieve-todo-by-id"
//         className="btn btn-primary float-end"
//         href={`${API}/${todo.id}`}
//       >
//         Get Todo by ID
//       </a>
//       <input
//         id="wd-todo-id"
//         defaultValue={todo.id}
//         className="form-control w-50"
//         onChange={(e) =>
//           setTodo({ ...todo, id: e.target.value })
//         }
//       />
//       <hr />

//       {/* Retrieve Completed Todos */}
//       <h4>Filtering Array Items</h4>
//       <a
//         id="wd-retrieve-completed-todos"
//         className="btn btn-primary"
//         href={`${API}?completed=true`}
//       >
//         Get Completed Todos
//       </a>
//       <hr />
//     </div>
//   );
// }
