import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../components/Layout/DashboardLayout";

 const ProtectedRoute = ({ children }) => {
  localStorage.getItem("b_token") ? (
    <DashboardLayout {...props} />
  ) : (
    <Navigate to="/" />
  );
  return children;
}

export default ProtectedRoute;

