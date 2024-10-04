import { Routes, Route, Navigate } from "react-router";
import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import PeopleTable from "./Courses/People/Table";

export default function Kanbas() {
  return (
    <div id="wd-kanbas" >
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/People" element={<PeopleTable />} />
        </Routes>
      </div>
    </div>
  );
}


