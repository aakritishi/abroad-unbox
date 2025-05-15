import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AddVideo() {
  const [link, setLink] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video_link", link);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/essay-videos/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        console.log(response);
        alert("new video link added successfully");
        navigate("/essay");
      }
    } catch (error) {
      console.error("Failed to post the formdata", error);
    }
  };
  return (
    <>
      <Nav />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 rounded-lg shadow-gray-300 shadow-md mt-10"
      >
        <h2 className="text-xl font-bold mb-4">Add New Link</h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Add Video Link</label>
          <input
            type="text"
            name="video_link"
            onChange={(e) => setLink(e.target.value)}
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
export default AddVideo;
