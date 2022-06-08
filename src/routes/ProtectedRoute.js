import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../components/Layout/DashboardLayout";

 const ProtectedRoute = ({ children, props }) => {
   const isloggedIn = localStorage.getItem("b_token");
   isloggedIn ? (
    <DashboardLayout {...props} />
  ) : (
    <Navigate to="/" />
  );
  return children;
}

export default ProtectedRoute;

