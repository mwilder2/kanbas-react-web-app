// src/Labs/Lab4/EventObject.tsx
import React, { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState<any>(null);

  const handleClick = (e: any) => {
    e.target = e.target.outerHTML; // Store HTML content to avoid circular reference
    delete e.view; // Remove `view` to prevent circular structure in JSON
    setEvent(e); // Update event state with modified event object
  };

  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}
