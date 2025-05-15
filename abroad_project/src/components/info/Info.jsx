import { useState, useRef, useEffect } from "react";
import fullscreen_svg from "../../assets/svg/fullscreen-1.svg";
import smallscreen_svg from "../../assets/svg/fullscreen-2.svg";
import Nav from "../Nav";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Info() {
  const [openSection, setOpenSection] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const descriptionRef = useRef(null);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [infoData, setInfoData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/info-sections/`);
      if (response) {
        setInfoData(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch the data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this info?"
    );
    if (!confirm) return;

    try {
      const response = await axios.delete(
        `${API_BASE_URL}/info-sections/${id}/`
      );
      if (response) {
        alert("Info deleted successfully");
        getData();
      }
    } catch (error) {
      console.log("Failed to delete the info", error);
    }
  };

  const handleEdit = async (id) => {
    navigate(`/edit_info/${id}`);
  };

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const enterFullScreen = () => {
    if (descriptionRef.current) {
      if (descriptionRef.current.requestFullscreen) {
        descriptionRef.current.requestFullscreen();
      } else if (descriptionRef.current.webkitRequestFullscreen) {
        descriptionRef.current.webkitRequestFullscreen(); // Safari
      } else if (descriptionRef.current.msRequestFullscreen) {
        descriptionRef.current.msRequestFullscreen(); // IE/Edge
      }
      setIsFullScreen(true);
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen(); // Safari
    } else if (document.msFullscreenElement) {
      document.msExitFullscreen(); // IE/Edge
    }
    setIsFullScreen(false);
  };

  // Detect when full-screen mode exits automatically
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="w-11/12 p4 mx-auto mt-3">
        <div className="p-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-full mx-auto">
          <p className="text-2xl font-bold text-white">Info Sessions</p>
        </div>
        {role == "admin" && (
          <div className="flex justify-end">
            <button className="px-4 py-2 mt-2 border border-gray-300 rounded-lg bg-green-800 text-white hover:bg-green-700">
              <Link to="/add_info">Add Info</Link>
            </button>
          </div>
        )}

        {infoData.map((session) => (
          <div key={session.id}>
            <div className="bg-gradient-to-l mt-4 from-[#006600] to-[#ffffff] w-full flex justify-around items-center">
              <button
                type="button"
                className={`bg-gradient-to-l p-2  w-full mx-auto mt-3 text-2xl font-bold text-left ${
                  openSection === session.id ? "" : ""
                }`}
                onClick={() => toggleSection(session.id)}
              >
                {session.title}
              </button>
              {role == "admin" && (
                <div className="flex gap-3 justify-center mr-5">
                  <FaEdit
                    onClick={() => handleEdit(session.id)}
                    className="text-2xl text-blue-900"
                  />
                  <MdDelete
                    onClick={() => handleDelete(session.id)}
                    className="text-2xl text-red-500"
                  />
                </div>
              )}
            </div>

            {openSection === session.id && (
              <>
                <div className="content w-full flex flex-col md:flex-row lg:flex-row gap-2 mt-2">
                  <div className="w-full md:w-1/2 lg:w-1/2">
                    <iframe
                      className="w-full h-[50dvh]"
                      src={session.video_link}
                      title={session.title}
                    ></iframe>
                  </div>

                  {/* Description Section with Full-Screen Mode */}
                  <div
                    ref={descriptionRef}
                    className={`w-full md:w-1/2 lg:w-1/2 p-3 bg-gradient-to-r from-[#00ffcc] to-[#66ffff] overflow-scroll h-[50dvh] ${
                      isFullScreen
                        ? "fixed top-0 left-0 w-screen h-screen z-50 p-6"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-semibold">
                        {session.title}:
                      </h2>
                      {!isFullScreen ? (
                        <button
                          className="text-white px-3 py-1 rounded-md"
                          onClick={enterFullScreen}
                        >
                          {/* Full Screen */}
                          <img
                            className="w-8 h-8 mx-auto"
                            src={fullscreen_svg}
                            alt="Full Screen"
                          />
                        </button>
                      ) : (
                        <button
                          className="text-white px-3 py-1 rounded-md"
                          onClick={exitFullScreen}
                        >
                          {/* Exit Full Screen */}
                          <img
                            className="w-10 h-10 mx-auto"
                            src={smallscreen_svg}
                            alt="Full Screen"
                          />
                        </button>
                      )}
                    </div>
                    <p className="flex flex-col gap-y-3 text-justify">
                      {/* {session.description.map((desc, index) => (
                        <span key={index}>{desc}</span>
                      ))} */}
                      {session.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Info;
