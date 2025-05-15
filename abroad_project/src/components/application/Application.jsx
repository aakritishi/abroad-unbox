import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import lock_svg from "../../assets/svg/lock-red.svg";
import Footer from "../Footer";
import Back from "../../assets/svg/back-to-home.png";
import { IoMdMenu } from "react-icons/io";
import axios from "axios";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Application() {
  const [stages, setStages] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(1);
  const student_id = localStorage.getItem("student_id");
  const admin_id = localStorage.getItem("user_id");
  const role = localStorage.getItem("role");

  useEffect(() => {
    const getStages = async () => {
      try {
        if (role == "admin") {
          const response = await axios.get(
            `${API_BASE_URL}/application-time-stages/?user=${admin_id}`
          );
          setStages(response.data);
        } else {
          const response = await axios.get(
            `${API_BASE_URL}/application-time-stages/?student=${student_id}`
          );
          setStages(response.data);
        }
      } catch (error) {
        console.log("Failed to get the stages data", error);
      }
    };

    getStages();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <div className="p-3 w-full flex flex-row gap-1 bg-gradient-to-r from-green-300 to-blue-300 text-xl font-semibold text-center items-center">
        <Link to="/">
          <img
            src={Back}
            alt="Back to Home"
            title="Back to Home"
            className="w-10"
          />
        </Link>
        <p className="ml-[40%]">My Application Roadmap</p>
      </div>

      {/* Menu icon for small screens */}
      <div className="w-full mt-1 flex md:hidden justify-end px-1">
        <IoMdMenu
          onClick={toggleMenu}
          className="text-3xl text-green-800 cursor-pointer"
          aria-label="Toggle menu"
        />
      </div>

      {/* Stages */}
      <div className="w-full mt-3 flex md:flex-row flex-col gap-3 items-center">
        {stages.map((stage, index) => (
          <div key={index} className="w-11/12 md:w-2/3">
            {/* Desktop */}
            <div className="hidden md:flex flex-row justify-between items-center text-white font-bold text-xl">
              <span
                onClick={() =>
                  stage.is_locked === "unlocked" && setActiveStage(stage.stage)
                }
                className={`w-full p-3 cursor-pointer ${
                  stage.is_locked === "unlocked"
                    ? "bg-green-800 hover:bg-green-700"
                    : "bg-gray-400"
                }`}
              >
                Stage {stage.stage}
              </span>
              {stage.is_locked !== "unlocked" && (
                <img src={lock_svg} className="w-8 mr-3" alt="Lock icon" />
              )}
            </div>

            {/* Mobile */}
            {isMenuOpen && (
              <div className="flex md:hidden justify-between items-center text-white font-bold text-xl">
                <span
                  onClick={() =>
                    stage.is_locked === "unlocked" &&
                    setActiveStage(stage.stage)
                  }
                  className={`w-full p-3 cursor-pointer ${
                    stage.is_locked === "unlocked"
                      ? "bg-green-800 hover:bg-green-700"
                      : "bg-gray-400"
                  }`}
                >
                  Stage {stage.stage}
                </span>
                {stage.is_locked !== "unlocked" && (
                  <img src={lock_svg} className="w-8 mr-3" alt="Lock icon" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stage content */}
      <div className="w-11/12 mx-auto p-3 flex gap-3">
        {activeStage === 1 && <Stage1 />}
        {activeStage === 2 && <Stage2 />}
        {activeStage === 3 && <Stage3 />}
      </div>

      <Footer />
    </>
  );
}

export default Application;
