import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import Nav from "../Nav";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Essay() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoContent, setVideoContent] = useState([]);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("student_id", localStorage.getItem("student_id"));

    try {
      const response = await axios.post(
        `${API_BASE_URL}/essay-forms/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        alert("essay form submitted");
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      console.log("failed to post the essay form");
    }
  };

  const getVideo = async () => {
    try {
      const responseVideo = await axios.get(`${API_BASE_URL}/essay-videos/`);
      if (responseVideo) {
        setVideoContent(responseVideo.data);
        console.log(responseVideo.data.length);
      }
    } catch (error) {
      console.log("failed to fetch the data");
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  const handleAdd = () => {
    navigate("/add_video");
  };

  const handleEdit = (id) => {
    navigate(`/edit_video/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this video??"
      );
      if (!confirm) return;

      const response = await axios.delete(
        `${API_BASE_URL}/essay-videos/${id}/`
      );
      if (response) {
        alert("Video deleted successfully");
        getVideo();
      }
    } catch (error) {
      console.error("Failed to delete the data", error);
      alert("Failed to delete the video. Please try again.");
    }
  };

  return (
    <>
      <Nav />
      <div className="w-11/12 p4 mx-auto mt-3">
        <div className="p-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-full mx-auto flex justify-between">
          <p className="text-2xl font-bold text-white">Essay Writing</p>
          {role == "admin" && (
            <button className="px-4 py-3 rounded-lg bg-green-700 hover:bg-green-900 text-white">
              <Link to="/view_submitted_essay">View Submitted</Link>
            </button>
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row lg:flex-row gap-2 mt-2">
          {videoContent.length > 0 ? (
            <div className="w-full md:w-1/2 lg-1/2 relative">
              {role == "admin" && (
                <div className="absolute bg-white p-2 border border-gray-300 shadow-md shadow-gray-300 top-0 right-0 flex gap-4 z-10 text-white text-xl cursor-pointer">
                  <FaEdit
                    className="text-xl text-blue-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(videoContent[0].id);
                    }}
                  />
                  <MdDelete
                    className="text-xl text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(videoContent[0].id);
                    }}
                  />
                </div>
              )}
              {/* Video here */}
              <iframe
                className="w-full h-[70dvh]"
                src={videoContent[0].video_link}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="w-full md:w-1/2 lg-1/2 flex justify-center items-center">
              {role === "admin" ? (
                <div className="px-3 py-3 bg-gray-300 rounded-full">
                  <FaCirclePlus
                    className="text-4xl shadow-md shadow-gray-300"
                    onClick={handleAdd}
                  />
                </div>
              ) : (
                <p>No video available at the moment</p>
              )}
            </div>
          )}
          <div className="w-full md:mx-auto mx-auto h-[70dvh] md:w-1/2 lg-1/2 overflow-scroll bg-gradient-to-l from-[#006600] to-[#ffffff] p-2">
            <label className="text-xl font-semibold">Essay Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-lg bg-white"
            />
            <br />
            <br />
            <label className="text-xl mt-5 font-semibold">
              Your essay submission:{" "}
            </label>
            <br />
            <textarea
              type="textarea"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="13"
              className="p-2 w-full border border-gray-300 rounded-lg bg-white resize-none"
            ></textarea>
            <button
              onClick={handleSubmit}
              type="submit"
              name="submit"
              value="Submit"
              className="w-full bg-white p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-blue-300 hover:text-white text-xl font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Essay;
