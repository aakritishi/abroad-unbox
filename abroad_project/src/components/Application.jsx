import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import lock_svg from '../assets/svg/lock-red.svg';
import Footer from './Footer';
import Back from '../assets/svg/back-to-home.png';

const stages = [
    {
        id: '1',
        name: 'Stage 1',
        status: 'completed'
    },
    {
        id: '2',
        name: 'Stage 2',
        status: 'locked'
    },
    {
        id: '3',
        name: 'Stage 3',
        status: 'locked'
    },
    {
        id: '4',
        name: 'Stage 4',
        status: 'locked'
    },
    {
        id: '5',
        name: 'Stage 5',
        status: 'locked'
    },
    {
        id: '6',
        name: 'Stage 6',
        status: 'locked'
    },
    {
        id: '7',
        name: 'Stage 7',
        status: 'locked'
    },
    {
        id: '8',
        name: 'Stage 8',
        status: 'locked'
    },
    {
        id: '9',
        name: 'Stage 9',
        status: 'locked'
    },
];

function Application() {
    return (
        <>
            <div className='p-3 w-full mt- 3 flex flex- row gap-1 bg-gradient-to-r from-green-300 to-blue-300 text-xl font-semibold text-center items-center'>
                <Link to="/"><img src={Back} alt='Back to Home' title='Back to Home' className='w-15' /></Link>
                <p className='ml-[40%]'>My Application Roadmap</p>
            </div>
            <div className='px-3 w-full mt-3 justify-between flex  flex-row gap-1'>
                {stages.map((stage, index) => (

                    <div key={index} className="bg-gray-400 p-2 w-full text-white font-bold text-center text-xl flex justify-between">
                        {stage.status === "completed" ? (
                            <>
                                <span className="w-full">{stage.name}</span>
                                {/* <img src={lock_svg} className="w-8" alt="lock icon" /> */}
                            </>
                        ) : (
                            <>
                                <span className="w-full">{stage.name}</span>
                                <img src={lock_svg} className="w-8 text-red-500" alt="lock icon" />
                            </>
                        )}
                    </div>


                ))}
            </div>
            <div className='bg-gray- 500 w-11/12 mt-3 mx-auto p- 3 flex gap-3'>
                <div className='w-1/5 bg-gradient-to-l from-[#ffffff] to-[#248a4d] h-dvh p-2 text-center'>
                    <h2 className='text-2xl underline font-bold'>Stage 1:</h2>
                    <h2 className='text-xl font-semibold mt-6'>Understanding the Basics</h2>
                    <p className='font-medium mt-5'>We need to understand the ramification of ourdecisions to go Abroad.</p>
                    <p className='font-medium mt-5'>It's always a good idea to understand the reason we should or shouldn't go to US. always a good idea to understand the reason we should or shouldn't go to USA.</p>
                    <p className='font-medium mt-5'>Getting a comprehensive understanding of what to do is very important.</p>
                    <p className='font-medium mt-5'>Don't forget, your major is going to define the life you are going to have.</p>
                </div>
                <div className='w-full md:w-4/5 lh:w-4/5 bg-white h-svh p- 2 overflow-scroll'>
                    <div className='bg-gradient-to-r from-[#ffffff] to-blue-300 p-2 w-full text-2xl font-semibold text-center'>The Mindset</div>
                    <div>

                        {/* <div className='w-full bg-gradient-to-l from-[#ffffff] to-[#248a4d] h-auto p -2 text-center'>
                            <h2 className='text-2xl underline font-bold'>Stage 1: <span className='text-xl font-semibold mt-6 no-underline'> Understanding the Basics</span></h2>
    
                            <p className='font-medium mt-5'>We need to understand the ramification of ourdecisions to go Abroad. It's always a good idea to understand the reason we should or shouldn't go to US. always a good idea to understand the reason we should or shouldn't go to USA. Getting a comprehensive understanding of what to do is very important. Don't forget, your major is going to define the life you are going to have.</p>
                        </div> */}
                        <div className='bg-gradient-to-r from-[#ffffff] to-green-300 px-5 py-3  mt-2 text-center w-full tect-center'>
                            <p className='text-xl font-medium'>SESSION I - The Mindset</p>
                        </div>
                        <iframe className='w-full h-[400px] mt-2'
                            src="https://www.youtube.com/embed/ekMIfv0mvqs">
                        </iframe>
                        <a href='mailto:abroadunbox@gmail.com?subject=Request%20for%20Appointment%20for%20The%20Mindset'><div className='bg-green-300 px-5 mx-auto py-3 w-1/2 md:w-1/3 mt-2 border-1 text-center'>
                            <p className='text-xl font-medium'>Request Appointment</p>
                        </div></a>
                    </div>


                    <div className='bg-gradient-to-r from-[#ffffff] to-blue-300 p-2 w-full text-2xl font-semibold mt-8 text-center'>The Timeline</div>
                    <div>
                        <div className='bg-gradient-to-r from-[#ffffff] to-green-300 px-5 py-3 w-full mt-2 text-center'>
                            <p className='text-xl font-medium'>SESSION II - The Timeline</p>
                        </div>
                        <iframe className='w-full h-[600px] mt-2'
                            src="https://www.youtube.com/embed/ekMIfv0mvqs">
                        </iframe>
                        <a href='mailto:abroadunbox@gmail.com?subject=Request%20for%20Appointment%20for%20Application%20Timeline'><div className='bg-green-300 px-5 py-3 mx-auto w-1/2 md:w-1/3 mt-2 border-1 text-center'>
                            <p className='text-xl font-medium'>Request Appointment</p>
                        </div></a>
                    </div>

                    <div className='bg-gradient-to-r from-[#ffffff] to-blue-300 p-2 w-full text-2xl font-semibold mt-8 text-center'>Career Counseling & Major Selection</div>
                    <div>
                        <div className='bg-gradient-to-r from-[#ffffff] to-green-300 px-5 py-3 w-full mt-2 text-center'>
                            <p className='text-xl font-medium'>SESSION III - Career</p>
                        </div>
                        <iframe className='w-full h-[600px] mt-2'
                            src="https://www.youtube.com/embed/ekMIfv0mvqs">
                        </iframe>
                        <a href='mailto:abroadunbox@gmail.com?subject=Request%20for%20Appointment%20for%20Career%20Counseling'>
                            <div className='bg-green-300 px-5 py-3 w-1/2 mx-auto md:w-1/3 mt-2 border-1 text-center'>
                                <p className='text-xl font-medium'>Request Appointment</p>
                            </div>
                        </a>
                    </div>

                    <div className='bg-gradient-to-r from-[#ffffff] to-blue-300 text-center p-2 w-full text-2xl font-semibold mt-8'>English Proficiency Test (EPT)</div>
                    <div className='flex gap-5 w-full'>
                        <a href='https://englishtest.duolingo.com/applicants' className='bg-yellow-300 px-5 py-3 w-1/2 mt-2 border-1 text-center' target='_blank'>
                            <p className='text-xl font-medium'>Practice Module</p>
                        </a>
                        <a href='mailto:abroadunbox@gmail.com?subject=Request%20for%20Appointment%20for%20English%20Proficiency' className='bg-green-300 px-5 py-3 w-1/2 mt-2 border-1 text-center'>
                            <p className='text-xl font-medium'>Request Appointment</p>
                        </a>
                    </div>
                    <a><div className='bg-gradient-to-l from-[#ffffff] to-green-300 py-4 text-center w-full text-2xl font-semibold mt-5 cursor-pointer'>Stage 1: Submit</div></a>
                </div>
            </div>
            <Footer />

        </>
    );
}
export default Application;
