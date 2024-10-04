export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          {/* Changed from <a> to <button> to fix a build error */}
          <button className="nav-link active btn" onClick={(e) => e.preventDefault()}>
            Active
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn" onClick={(e) => e.preventDefault()}>
            Link
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn" onClick={(e) => e.preventDefault()}>
            Link
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link disabled btn" onClick={(e) => e.preventDefault()}>
            Disabled
          </button>
        </li>
      </ul>
    </div>
  );
}
