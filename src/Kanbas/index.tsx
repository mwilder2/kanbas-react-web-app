import { Routes, Route, Navigate } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Courses from "./Courses";
import PeopleTable from "./Courses/People/Table";
import Dashboard from "./Dashboard";
import {
  fetchCoursesAsync,
  addCourseAsync,
  deleteCourseAsync,
  updateCourseAsync,
  setCurrentCourse,
} from "./Courses/reducer";
import { AppDispatch } from "./store";
import Session from "./Account/Session";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
  const dispatch: AppDispatch = useDispatch();

  const { courses } = useSelector((state: any) => state.courses);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchCoursesAsync());
    }
  }, [dispatch, currentUser]);

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    setCourse={(course) => dispatch(setCurrentCourse(course))}
                    addNewCourse={(course) => dispatch(addCourseAsync(course))}
                    deleteCourse={(courseId) => dispatch(deleteCourseAsync(courseId))}
                    updateCourse={(course) => dispatch(updateCourseAsync(course))}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}

// import { Routes, Route, Navigate } from "react-router";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Account from "./Account";
// import ProtectedRoute from "./Account/ProtectedRoute";
// import Courses from "./Courses";
// import PeopleTable from "./Courses/People/Table";
// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import { fetchCoursesAsync, addCourseAsync, updateCourseAsync, deleteCourseAsync, setCurrentCourse } from "./Courses/reducer";
// import { AppDispatch } from "./store";
// import Session from "./Account/Session";
// import * as client from "../KanbasApi";


// export default function Kanbas() {
//   const dispatch: AppDispatch = useDispatch();

//   // Extracting state slices
//   const { courses, currentCourse } = useSelector((state: any) => state.courses);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   // Fetch courses when the component loads or when `currentUser` changes
//   useEffect(() => {
//     if (currentUser) {
//       dispatch(fetchCoursesAsync());
//     }
//   }, [dispatch, currentUser]);

//   const addNewCourse = () => {
//     const newCourse = {
//       _id: Date.now().toString(),
//       name: "New Course",
//       description: "A new course description.",
//       image: "/images/default.jpg",
//     };
//     dispatch(addCourseAsync(newCourse));
//   };

//   const updateCourse = () => {
//     if (currentCourse) {
//       const updatedCourse = { ...currentCourse, name: `${currentCourse.name} (Updated)` };
//       dispatch(updateCourseAsync(updatedCourse));
//     }
//   };

//   const deleteCourse = (courseId: string) => {
//     dispatch(deleteCourseAsync(courseId));
//   };

//   return (
//     <Session>
//       <div id="wd-kanbas">
//         <KanbasNavigation />
//         <div className="wd-main-content-offset p-3">
//           <Routes>
//             <Route path="/" element={<Navigate to="/Dashboard" />} />
//             <Route path="/Account/*" element={<Account />} />
//             <Route
//               path="/Dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard
//                     courses={courses}
//                     course={currentCourse}
//                     setCourse={(course) => dispatch(setCurrentCourse(course))}
//                     addNewCourse={addNewCourse}
//                     deleteCourse={deleteCourse}
//                     updateCourse={updateCourse}
//                   />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
//             <Route path="/People" element={<PeopleTable />} />
//           </Routes>
//         </div>
//       </div>
//     </Session>
//   );
// }
