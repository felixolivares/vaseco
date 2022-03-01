import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Employees, PDFViewer } from "../../screens";
import { Sidebar } from "..";
const ProtectedRouter = (props) => {
  const { signOut } = props;
  const [current, setCurrent] = useState("home");
  useEffect(() => {
    setRoute();
    window.addEventListener("hashchange", setRoute);
    return () => window.removeEventListener("hashchange", setRoute);
  }, []);
  function setRoute() {
    const location = window.location.href.split("/");
    const pathname = location[location.length - 1];
    console.log(pathname);
    setCurrent(pathname ? pathname : "home");
  }
  return (
    <Router>
      <Sidebar signOut={signOut} />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/employees" element={<Employees />} />
        <Route exact path="/viewer" element={<PDFViewer />} />
      </Routes>
    </Router>
  );
};
export default ProtectedRouter;
