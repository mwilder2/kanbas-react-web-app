import React from 'react';

export default function BootstrapGrids() {
  return (

    <div id="wd-bs-grid-system">
      <h2>Bootstrap Grid System</h2>

      {/* Row with two equal columns */}
      <div className="row">
        <div className="col bg-danger text-white">
          <h3>Left half</h3>
        </div>
        <div className="col bg-primary text-white">
          <h3>Right half</h3>
        </div>
      </div>

      {/* Row with one third and two thirds columns */}
      <div className="row">
        <div className="col-4 bg-warning">
          <h3>One third</h3>
        </div>
        <div className="col-8 bg-success text-white">
          <h3>Two thirds</h3>
        </div>
      </div>

      {/* Row with sidebar and main content */}
      <div className="row">
        <div className="col-2 bg-dark text-white">
          <h3>Sidebar</h3>
        </div>
        <div className="col-8 bg-secondary text-white">
          <h3>Main content</h3>
        </div>
        <div className="col-2 bg-info">
          <h3>Sidebar</h3>
        </div>
      </div>
    </div>
  );
}
