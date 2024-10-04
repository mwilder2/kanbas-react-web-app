export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#" onClick={(e) => e.preventDefault()}>
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" onClick={(e) => e.preventDefault()}>
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}
