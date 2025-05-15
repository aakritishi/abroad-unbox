import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Stage1 = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const [responseLink, setResponseLink] = useState();

  const handleRedirect = ()=>{
    navigate('/stage1/add_video');
  }

  const getVideoLink = async ()=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/stage-one-content/`);
        if(response){
            setResponseLink(response.data);
        }
    }catch(error){
        console.log("Failed to fetch the video link", error);
    }
  }

  useEffect (()=>{
    getVideoLink();
  },[]);

  return (
    <div className="flex md:flex-row flex-col">
      <div className="md:w-1/5 w-full bg-gradient-to-l from-[#ffffff] to-[#248a4d] h-aoto md:h-dvh p-2 text-center">
        <h2 className="text-2xl underline font-bold">Stage 1:</h2>
        <h2 className="text-xl font-semibold mt-6">Understanding the Basics</h2>
        <p className="font-medium mt-5">
          We need to understand the ramification of ourdecisions to go Abroad.
        </p>
        <p className="font-medium mt-5 md:flex hidden">
          It's always a good idea to understand the reason we should or
          shouldn't go to US. always a good idea to understand the reason we
          should or shouldn't go to USA.
        </p>
        <p className="font-medium mt-5 md:flex hidden">
          Getting a comprehensive understanding of what to do is very important.
        </p>
        <p className="font-medium mt-5 md:flex hidden">
          Don't forget, your major is going to define the life you are going to
          have.
        </p>
      </div>
      <div className="w-full md:w-4/5 lh:w-4/5 bg-white h-svh p- 2 overflow-scroll">
        {role == "admin" && (
            <div className="flex justify-end items-end">
                <button className="px-3 py-2 my-2 rounded-lg text-white bg-green-800" onClick={handleRedirect}>Add Video</button>
            </div>
        )}
        <div className="bg-gradient-to-r from-[#ffffff] to-blue-300 p-2 w-full text-2xl font-semibold text-center">
          The Mindset
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#ffffff] to-green-300 px-5 py-3  mt-2 text-center w-full tect-center">
            <p className="text-xl font-medium">SESSION I - The Mindset</p>
          </div>
          <iframe
            className="w-full h-[400px] mt-2"
            src="https://www.youtube.com/embed/ekMIfv0mvqs"
          ></iframe>
          <a href="mailto:abroadunbox@gmail.com?subject=Request%20for%20Appointment%20for%20The%20Mindset">
            <div className="bg-green-300 px-5 mx-auto py-3 w-1/2 md:w-1/3 mt-2 border-1 text-center">
              <p className="text-xl font-medium">Request Appointment</p>
            </div>
          </a>
        </div>
        <div className="bg-gradient-to-r from-[#ffffff] to-blue-300 p-2 w-full text-2xl font-semibold mt-8 text-center">
          The Timeline
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#ffffff] to-green-300 px-5 py-3 w-full mt-2 text-center">
            <p className="text-xl font-medium">SESSION II - The Timeline</p>
          </div>
          <iframe
            className="w-full h-[600px] mt-2"
            src="https://www.youtube.com/embed/ekMIfv0mvqs"
          ></iframe>
          <a href="mailto:abroadunbox@gmail.com?subject=Request%20for%20Appointment%20for%20Application%20Timeline">
            <div className="bg-green-300 px-5 py-3 mx-auto w-1/2 md:w-1/3 mt-2 border-1 text-center">
              <p className="text-xl font-medium">Request Appointment</p>
            </div>
          </a>
        </div>
        <div className="bg-gradient-to-r from-[#ffffff] to-blue-300 p-2 w-full text-2xl font-semibold mt-8 text-center">
          Career Counseling & Major Selection
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#ffffff] to-green-300 px-5 py-3 w-full mt-2 text-center">
            <p className="text-xl font-medium">SESSION III - Career</p>
          </div>
          <iframe
            className="w-full h-[600px] mt-2"
            src="https://www.youtube.com/embed/ekMIfv0mvqs"
          ></iframe>
          <a href="mailto:abroadunbox@gmail.com?subject=Request%20for%20Appointment%20for%20Career%20Counseling">
            <div className="bg-green-300 px-5 py-3 w-1/2 mx-auto md:w-1/3 mt-2 border-1 text-center">
              <p className="text-xl font-medium">Request Appointment</p>
            </div>
          </a>
        </div>
        <div className="bg-gradient-to-r from-[#ffffff] to-blue-300 text-center p-2 w-full text-2xl font-semibold mt-8">
          English Proficiency Test (EPT)
        </div>
        <div className="flex gap-5 w-full">
          <a
            href="https://englishtest.duolingo.com/applicants"
            className="bg-yellow-300 px-5 py-3 w-1/2 mt-2 border-1 text-center"
            target="_blank"
          >
            <p className="text-xl font-medium">Practice Module</p>
          </a>
          <a
            href="mailto:abroadunbox@gmail.com?subject=Request%20for%20Appointment%20for%20English%20Proficiency"
            className="bg-green-300 px-5 py-3 w-1/2 mt-2 border-1 text-center"
          >
            <p className="text-xl font-medium">Request Appointment</p>
          </a>
        </div>
        <a>
          <div className="bg-gradient-to-l from-[#ffffff] to-green-300 py-4 text-center w-full text-2xl font-semibold mt-5 cursor-pointer">
            Stage 1: Submit
          </div>
        </a>
      </div>
    </div>
  );
};

export default Stage1;
