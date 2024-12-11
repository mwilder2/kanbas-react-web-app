import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Courses from "./Courses";
import PeopleTable from "./Courses/People/Table";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { fetchCoursesAsync, addCourseAsync, updateCourseAsync, deleteCourseAsync, setCurrentCourse } from "./Courses/reducer";
import { AppDispatch } from "./store";
import { fetchUsers } from "./Account/reducer";
import * as client from "../KanbasApi";

export default function Kanbas() {
  const dispatch: AppDispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { currentCourse, loading: coursesLoading, error: coursesError } = useSelector((state: any) => state.courses);
  const { users, loading: usersLoading, error: usersError } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);


  const findCoursesForUser = async () => {
    try {
      const courses = await client.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await client.getCourses();
      const enrolledCourses = await client.findCoursesForUser(currentUser._id);

      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });

      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
    // Fetch courses and users on component load
    dispatch(fetchCoursesAsync());
    dispatch(fetchUsers());
  }, [dispatch, currentUser, enrolling]);


  const addNewCourse = async () => {
    const newCourse = {
      name: "New Course",
      description: "A newly created course.",
      image: "/images/default.jpg", // Default image path
      number: "CS1234",
      credits: 3,
    };
    const createdCourse = await client.addCourse(newCourse);
    setCourses([...courses, createdCourse]); // Update local state with the new course
  };

  const updateCourse = () => {
    if (currentCourse) {
      const updatedCourse = { ...currentCourse, name: `${currentCourse.name} (Updated)` };
      dispatch(updateCourseAsync(updatedCourse));
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      const status = await client.deleteCourse(courseId);
      if (status.acknowledged) {
        setCourses(courses.filter((course) => course._id !== courseId));
      } else {
        console.error("Failed to delete course:", status);
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={currentCourse}
                  setCourse={(course) => dispatch(setCurrentCourse(course))}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  enrolling={enrolling}
                  setEnrolling={setEnrolling}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/People" element={<PeopleTable users={users} />} />
        </Routes>
      </div>
    </div>
  );
}