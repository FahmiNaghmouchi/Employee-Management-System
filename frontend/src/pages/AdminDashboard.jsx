import React from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const{user,loading} = useAuth();
  const navigate = useNavigate();
  if(loading){
    return <div>Loading...</div>
  }
  if(!user){
    navigate("/login");
  }
  return (
    <div>
        <h2>AdminDashboard Page {user.name}</h2>
    </div>
  );
}
export default AdminDashboard;