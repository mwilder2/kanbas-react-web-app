import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS1010/Home">
              CS1010 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack Software Development with React
            </p>
            <Link to="/Kanbas/Courses/CS1010/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/ai.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS2020/Home">
              CS2020 Artificial Intelligence
            </Link>
            <p className="wd-dashboard-course-title">
              Introduction to AI
            </p>
            <Link to="/Kanbas/Courses/CS2020/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/cybersecurity.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS3030/Home">
              CS3030 Cyber Security
            </Link>
            <p className="wd-dashboard-course-title">
              Foundations of Cybersecurity
            </p>
            <Link to="/Kanbas/Courses/CS3030/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/datastructures.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS4040/Home">
              CS4040 Data Structures
            </Link>
            <p className="wd-dashboard-course-title">
              Data Structures and Algorithms
            </p>
            <Link to="/Kanbas/Courses/CS4040/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/webdevelopment.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS5050/Home">
              CS5050 Web Development
            </Link>
            <p className="wd-dashboard-course-title">
              Frontend Development with Web Technologies
            </p>
            <Link to="/Kanbas/Courses/CS5050/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/angular.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS6060/Home">
              CS6060 Angular Development
            </Link>
            <p className="wd-dashboard-course-title">
              Frontend Development with Angular
            </p>
            <Link to="/Kanbas/Courses/CS6060/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/flask.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS7070/Home">
              CS7070 Flask Development
            </Link>
            <p className="wd-dashboard-course-title">
              Backend Development with Flask
            </p>
            <Link to="/Kanbas/Courses/CS7070/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
