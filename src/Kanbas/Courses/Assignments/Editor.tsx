export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />

      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description" defaultValue="The assignment is available online. Submit a link to the landing page of" />
      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <input id="wd-group" defaultValue="Group A" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="letter">Letter</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="in-person">In Person</option>
              </select>
            </td>
          </tr>

          {/* Online Entry Options checkboxes */}
          <tr>
            <td colSpan={2}>
              <fieldset style={{ border: '1px solid #ccc', padding: '10px' }}>
                <legend>Online Entry Options</legend>
                <div>
                  <input type="checkbox" id="text-entry" name="online-option" value="text-entry" />
                  <label htmlFor="text-entry">Text Entry</label>
                </div>
                <div>
                  <input type="checkbox" id="website-url" name="online-option" value="website-url" />
                  <label htmlFor="website-url">Website URL</label>
                </div>
                <div>
                  <input type="checkbox" id="media-recordings" name="online-option" value="media-recordings" />
                  <label htmlFor="media-recordings">Media Recordings</label>
                </div>
                <div>
                  <input type="checkbox" id="student-annotation" name="online-option" value="student-annotation" />
                  <label htmlFor="student-annotation">Student Annotation</label>
                </div>
                <div>
                  <input type="checkbox" id="file-uploads" name="online-option" value="file-uploads" />
                  <label htmlFor="file-uploads">File Uploads</label>
                </div>
              </fieldset>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
              <input id="wd-assign" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
