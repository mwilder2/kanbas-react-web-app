// src/Kanbas/Courses/Assignments/index.tsx
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaSearch, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments.filter(
      (assignment: any) => assignment.course === cid
    )
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);

  const handleDelete = (assignmentId: string) => {
    setSelectedAssignment(assignmentId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    // if (selectedAssignment) dispatch(deleteAssignment(selectedAssignment));
    setShowDeleteDialog(false);
    setSelectedAssignment(null);
  };

  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex align-items-center mb-3">
        <FaSearch className="me-2 fs-4 text-muted" />
        <input
          id="wd-search-assignment"
          className="form-control me-2"
          type="text"
          placeholder="Search for Assignments"
          style={{ width: "100%" }}
        />
      </div>

      <div className="d-flex justify-content-end mb-4">
        <button
          id="wd-add-assignment"
          className="btn btn-lg btn-success"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
        >
          <FaPlus className="me-1" /> Assignment
        </button>
      </div>

      <h3 id="wd-assignments-title" className="mb-3">
        ASSIGNMENTS ({assignments.length} Total)
      </h3>

      <ul id="wd-assignment-list" className="list-group">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link
              className="h5 mb-0 d-block text-decoration-none"
              to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
            >
              {assignment.title}
            </Link>
            <div>
              <FaTrash className="text-danger ms-3" onClick={() => handleDelete(assignment._id)} />
            </div>
          </li>
        ))}
      </ul>

      {showDeleteDialog && (
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteDialog(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteDialog(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
