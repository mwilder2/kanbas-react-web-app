import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div>
      {/* Add the controls at the top */}
      <ModulesControls /><br /><br /><br /><br />

      {/* List of modules */}
      <ul id="wd-modules" className="list-group rounded-0">
        {/* Week 1 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1 - Introduction to Web Development
            <LessonControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">What is Web Development?</li>
                <li className="wd-content-item">Setting up your development environment</li>
                <li className="wd-content-item">Introduction to HTML and CSS</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1: HTML Basics
              <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">READING: Intro to HTML</li>
                <li className="wd-content-item">SLIDES: HTML Fundamentals</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2: CSS Basics
              <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">READING: Intro to CSS</li>
                <li className="wd-content-item">SLIDES: CSS Fundamentals</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 2 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 2 - JavaScript Fundamentals
            <LessonControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to JavaScript</li>
                <li className="wd-content-item">Variables, data types, and operators</li>
                <li className="wd-content-item">Basic functions and control flow</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1: JavaScript Basics
              <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">READING: JavaScript Basics</li>
                <li className="wd-content-item">SLIDES: JavaScript Fundamentals</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2: Functions in JavaScript
              <LessonControlButtons />
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
