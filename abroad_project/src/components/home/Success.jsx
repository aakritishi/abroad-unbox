import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import { FaTrash } from "react-icons/fa";
import photo1 from "../../assets/sucess_img/photo1.png";
import photo2 from "../../assets/sucess_img/photo2.png";
import photo3 from "../../assets/sucess_img/photo3.png";
const successes = [
  {
    photo: photo1,
  },
  {
    photo: photo2,
  },
  {
    photo: photo3,
  },
];
const Success = () => {
  const role = localStorage.getItem("role");
  const [successData, setSuccessData] = useState([]);

  const getData = async ()=>{
    try{
      const response = await axios.get(`${API_BASE_URL}/success-images/`);
      setSuccessData(response.data);
    }
    catch(error){
      console.log("Failed to fetch the data", error);
    }
  };

  useEffect(()=>{
    getData();
  },[]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this item?");
    if(!confirm) return;
    try {
      const response = await axios.delete(`${API_BASE_URL}/success-images/${id}/`);
      if(response){
        alert("Item deleted successfully");
        getData();
      }
    }
    catch (error) {
      console.error("Error deleting item", error);
    }
  }

  return (
    <div>
      <div className="p-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-11/12 mx-auto mt-3">
        <p className="text-2xl font-bold text-white">Our Success</p>
      </div>
      <div className="w-11/12 mx-auto mt-3 flex flex-row overflow-x-scroll">
        {successData.map((success, index) => (
          <div key={index} className="relative ">
            <div className="p-3 w-[320px] h-[400px] rounded-lg">
              {role == "admin" && (
                <FaTrash onClick={() => handleDelete(success.id)} className="absolute top-4 right-4 text-lg text-red-500" />
              )}
              <img
                className="h-full w-full rounded-lg"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19)",
                }}
                src={success.image}
                alt={success.name}
              />
            </div>
          </div>
        ))}
        {role == "admin" && (
          <div className="relative">
            <div className="h-[400px] min-w-[350px]">
              <button className="w-full h-full relative bg-none">
                <Link to="/add_success">
                  <FaPlusCircle className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl rounded-full shadow-md shadow-gray-900" />
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
