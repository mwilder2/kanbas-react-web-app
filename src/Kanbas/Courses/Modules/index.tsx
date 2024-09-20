export default function Modules() {
  return (
    <div>
      <button id="collapse-all">Collapse All</button>
      <button id="view-progress">View Progress</button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1 - Introduction to Web Development</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">What is Web Development?</li>
                <li className="wd-content-item">Setting up your development environment</li>
                <li className="wd-content-item">Introduction to HTML and CSS</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">LESSON 1: HTML Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">READING: Intro to HTML</li>
                <li className="wd-content-item">SLIDES: HTML Fundamentals</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">LESSON 2: CSS Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">READING: Intro to CSS</li>
                <li className="wd-content-item">SLIDES: CSS Fundamentals</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2 - JavaScript Fundamentals</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to JavaScript</li>
                <li className="wd-content-item">Variables, data types, and operators</li>
                <li className="wd-content-item">Basic functions and control flow</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">LESSON 1: JavaScript Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">READING: JavaScript Basics</li>
                <li className="wd-content-item">SLIDES: JavaScript Fundamentals</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">LESSON 2: Functions in JavaScript</span>
              <ul className="wd-content">
                <li className="wd-content-item">READING: JavaScript Functions</li>
                <li className="wd-content-item">SLIDES: Understanding Functions</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
