import React from "react";
import { useAuth } from "../../context/authContext.jsx";


const Navbar = () => {
  const{user} = useAuth();
  
  return (
    <div className="bg-gray-800 text-white h-16 flex items-center justify-between px-6 shadow-md">
       <p>Welcome {user.name}</p>
       <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors" > Logout </button>
    </div>
  );
}
export default Navbar;