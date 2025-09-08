import React from "react";
import { useAuth } from "../context/authContext.jsx";
import AdminSideBar from "../components/dashbord/adminSideBar.jsx";
import Navbar from "../components/dashbord/Navbar.jsx";

const AdminDashboard = () => {
  const{user} = useAuth();
  
  return (
    <div className="flex h-screen">
       <AdminSideBar/>
       <div className='flex-1 bg-gray-100 flex-col' >
        <Navbar/>
       </div>
    </div>
  );
}
export default AdminDashboard;