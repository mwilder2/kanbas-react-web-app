export default function BootstrapCard() {
  return (
    <div id="wd-css-navigating-with-cards">
      <h2>Cards</h2>
      <div className="card" style={{ width: "18rem" }}>
        <img src="images/stacked.webp" className="card-img-top" alt="Stacked Starship" />
        <div className="card-body">
          <h5 className="card-title">Stacking Starship</h5>
          <p className="card-text">
            Stacking the most powerful rocket in history. Mars or bust!
          </p>
          {/* Changed from <a> to <button> to fix a build error */}
          <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>
            Boldly Go
          </button>
        </div>
      </div>
    </div>
  );
}
