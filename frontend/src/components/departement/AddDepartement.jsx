import React ,{ useState }from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDepartement = () => {
  const [ departement , setDepartement] = useState({
    dep_name : "",
    description : ""
  })

const navigate = useNavigate();

  const handleChange = (e) =>{
    const {name , value } = e.target ;
    setDepartement({...departement , [name] : value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/api/departement/add", departement,
        {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if(response.data.success){
        navigate("/admin-dashboard/departements");
      }
      if(response.data.success){
        alert("Department added successfully");
      }
    }catch(error){
      if(error.response && !error.response.data.success){
        alert(error.response.data.error)
    }
  }
}
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8"
      >
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Department
        </h2>

        {/* Form */}
        <form className="space-y-5"  onSubmit={handleSubmit}>  
          {/* Department Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department Name
            </label>
            <input
              type="text"
              placeholder="Enter department name"
              name = "dep_name"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Write a short description..."
              name = "description"
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 pt-4">
            <button
              type="button"
              className="w-1/2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
export default AddDepartement;