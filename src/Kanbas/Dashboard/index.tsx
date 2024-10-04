import { Link } from "react-router-dom";
import '../styles.css'; // Assuming you have a separate CSS file for custom styles

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      {/* Bootstrap Grid for Courses */}
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">

        {/* Course 1 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/reactjs.webp" className="card-img-top wd-course-img" alt="React Framework Course" />
            <div className="card-body">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS1010/Home">
                <h5 className="card-title">CS1010 React JS</h5>
              </Link>
              <p className="card-text">Full Stack Software Development with React</p>
              <Link to="/Kanbas/Courses/CS1010/Home" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/ai.jpg" className="card-img-top wd-course-img" alt="AI Course" />
            <div className="card-body">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS2020/Home">
                <h5 className="card-title">CS2020 Artificial Intelligence</h5>
              </Link>
              <p className="card-text">Introduction to Artificial Intelligence</p>
              <Link to="/Kanbas/Courses/CS2020/Home" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>

        {/* Course 3 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/cybersecurity.jpg" className="card-img-top wd-course-img" alt="Cyber Security Course" />
            <div className="card-body">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS3030/Home">
                <h5 className="card-title">CS3030 Cyber Security</h5>
              </Link>
              <p className="card-text">Foundations of Cybersecurity</p>
              <Link to="/Kanbas/Courses/CS3030/Home" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>

        {/* Course 4 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/datastructures.jpg" className="card-img-top wd-course-img" alt="Data Structures Course" />
            <div className="card-body">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS4040/Home">
                <h5 className="card-title">CS4040 Data Structures</h5>
              </Link>
              <p className="card-text">Data Structures and Algorithms</p>
              <Link to="/Kanbas/Courses/CS4040/Home" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>

        {/* Course 5 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/webdevelopment.jpg" className="card-img-top wd-course-img" alt="Web Development Course" />
            <div className="card-body">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS5050/Home">
                <h5 className="card-title">CS5050 Web Development</h5>
              </Link>
              <p className="card-text">Frontend Development with Web Technologies</p>
              <Link to="/Kanbas/Courses/CS5050/Home" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>

        {/* Course 6 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/angular.jpg" className="card-img-top wd-course-img" alt="Angular Framework Course" />
            <div className="card-body">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS6060/Home">
                <h5 className="card-title">CS6060 Angular Development</h5>
              </Link>
              <p className="card-text">Frontend Development with Angular</p>
              <Link to="/Kanbas/Courses/CS6060/Home" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>

        {/* Course 7 */}
        <div className="col">
          <div className="card h-100">
            <img src="/images/flask.jpg" className="card-img-top wd-course-img" alt="Flask Framework Course" />
            <div className="card-body">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CS7070/Home">
                <h5 className="card-title">CS7070 Flask Development</h5>
              </Link>
              <p className="card-text">Backend Development with Flask</p>
              <Link to="/Kanbas/Courses/CS7070/Home" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
