import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../../Nav";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Stage1EditVideo() {
  const [link1, setLink1] = useState(null);
  const [link2, setLink2] = useState(null);
  const [link3, setLink3] = useState(null);
  const navigate = useNavigate();
  const {id} = useParams();

  const getVideoLink = async ()=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/stage-one-content/${id}/`);
        if(response){
            setLink1(response.data.video_link1);
            setLink2(response.data.video_link2);
            setLink3(response.data.video_link3);
        }
    }catch(error){
        console.log("Failed to get the data",error);
    }
  };

  useEffect(()=>{
    getVideoLink();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video_link1", link1);
    formData.append("video_link2", link2);
    formData.append("video_link3", link3);
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/stage-one-content/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        console.log(response);
        alert("video link updated successfully");
        navigate("/application");
      }
    } catch (error) {
      console.error("Failed to update the formdata", error);
    }
  };

  return (
    <>
      <Nav />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 rounded-lg shadow-gray-300 shadow-md mt-10"
      >
        <h2 className="text-xl font-bold mb-4">Update Video Link</h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Update Video Link</label>
          <input
            type="text"
            name="video_link1"
            value={link1}
            onChange={(e) => setLink1(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Update Video Link</label>
          <input
            type="text"
            name="video_link2"
            value={link2}
            onChange={(e) => setLink2(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Update Video Link</label>
          <input
            type="text"
            name="video_link3"
            value={link3}
            onChange={(e) => setLink3(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default Stage1EditVideo;
