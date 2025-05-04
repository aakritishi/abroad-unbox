import { useState } from 'react'
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import linkedin_svg from '../assets/svg/linkedin1.svg'
import facebook_svg from '../assets/svg/facebook1.svg'
import instagram_svg from '../assets/svg/instagram1.svg'
import yt_svg from '../assets/svg/youtube.svg'
import bg1 from '../assets/bg_img/Photo 1-2.jpg'
import bg2 from '../assets/bg_img/Photo 2-2.jpg'
import bg3 from '../assets/bg_img/Photo 3-2.jpg'
import bg4 from '../assets/bg_img/Photo 4-2.jpg'
import document_svg from '../assets/svg/document.svg'
import test_svg from '../assets/svg/test.svg'
import counseling_svg from '../assets/svg/counseling-icon.svg'
import university_svg from '../assets/svg/university.svg'
import essay_svg from '../assets/svg/essay.svg'
import passport_visa_svg from '../assets/svg/passport-visa.svg'
import interview_svg from '../assets/svg/interview.svg'
import flight_svg from '../assets/svg/flight.svg'
import next_svg from '../assets/svg/next.svg'
import photo1 from '../assets/sucess_img/photo1.png'
import photo2 from '../assets/sucess_img/photo2.png'
import photo3 from '../assets/sucess_img/photo3.png'
import photo4 from '../assets/sucess_img/photo4.png'
import photo5 from '../assets/sucess_img/photo5.png'
import photo6 from '../assets/sucess_img/sachit.png'
import photo7 from '../assets/sucess_img/photo7.png'
import photo8 from '../assets/sucess_img/photo8.png'
import photo9 from '../assets/sucess_img/subash.png'
import photo10 from '../assets/sucess_img/pratik.png'
import photo11 from '../assets/sucess_img/photo11.png'
import photo12 from '../assets/sucess_img/photo12.png'
import photo13 from '../assets/sucess_img/photo13.png'
import photo14 from '../assets/sucess_img/photo14.png'
import photo15 from '../assets/sucess_img/photo15.png'
import photo16 from '../assets/sucess_img/photo16.png'
import photo17 from '../assets/sucess_img/photo17.png'
import photo18 from '../assets/sucess_img/photo18.png'
import photo19 from '../assets/sucess_img/photo19.png'
import photo20 from '../assets/sucess_img/photo20.png'
import photo21 from '../assets/sucess_img/photo21.png'
import photo22 from '../assets/sucess_img/photo22.png'
import photo23 from '../assets/sucess_img/photo23.png'

import Nav from './Nav';
import Footer from './Footer';

const details = [
    {
        photo: bg1,
        title: "Welcome to Abroad Unbox",
        detail_text: "Mentor to your Career",
        memo: "Welcome to your study and career in the US",
        detail_text2: "We are <strong>Prep School</strong>, not a consultancy helping students not just with getting your <strong>visa</strong>, but making sure you are able to <strong>succeed</strong> out there as well.",
    },
    {
        photo: bg2,
        title: "Everything Matters!",
        memo: "It's not just the documents, it about your overall profile.",
        detail_text: "Most of the university does the holistic profile review, Admissions and Scholarships are often based on:",
        list: "- Your Academics,<br/>- Standardize test Scores<br/>- Essays (Personal Essay & SOP)<br/>- Extracurricular involvement<br/>- Exceptional qualities<br/>- Communication<br/>- And much more........",
    },
    {
        photo: bg3,
        title: "Have the Right Mindset!",
        memo: "Don't have Tunnel Vision. Visa is just a foot on the door.",
        detail_text: "Don't make visa your <strong>goal</strong>.<br/>It is just the consequence of your <strong>preparation<strong>.",
        detail_text2: "Focus on your choice of <strong>Major</strong>, your <strong>University</strong> selection, <strong>Personal</strong> skills, <strong>Professional</strong> skills & <strong>Networking</strong>.",
    },
    {
        photo: bg4,
        title: "Grow, be Competent!",
        memo: "Ability is of little account without opportunity & Vice Versa.",
        detail_text: "Going to <strong>University</stong> is <strong>not</strong> just about getting a <strong>degree</strong>,<br/>Nor even the <strong>knowledge</strong>.<br/>You can do it <strong>Online</strong> these days,",
        detail_text2: "You are there to <strong>learn, solve</strong> problems, <strong>innovate</strong>, and add to the <strong>collective knowledge</strong> of humankind.",
        detail_text3: "<strong>Choose</strong> the university that allows you to do so.",

    },
];

const services = [
    {
        "svg": document_svg,
        "title": "Application",
        "text1": "Common App, LOR, Essays! EA, ED, Fee waiver, affidavit...!",
        "text2": "DON'T WORRY, we've got you covered. Getting your application right on time to maximize your scholarship opportunities can be confusing and challenging.",
        "text3": "We mentor you to submit an application that truly reflects you and helps you stand out among the pool of applicants."
    },
    {
        svg: test_svg,
        title: "Standardize Test",
        text1: "We offer an extensive free Duolingo or EPT prep",
        text2: "We also, have advance learning platform for learning SAT. We make sure students get a comprehensive understanding of the core concepts, tips and tricks, and study plan for your success in the SAT.",
        text3: "We also have study plan and resources for GRE & GMAT.",
    },
    {
        svg: counseling_svg,
        title: "Career Counseling",
        text1: "Choosing your major is going to define the scope and extend of Your life. So, we need a more pragmatic approach to our choice of major and career.",
        text2: "US offer a wide array of career choice and we have to make the decision wisely. We do one on one counseling to make sure you understand the ramification of your Major and Future choices.",
    },
    {
        svg: university_svg,
        title: "University Selection ",
        text1: "Getting the right university is a crucial step. It is going define the limits of your growth and we help you apply to the university that is optimum for you.",
        text2: "We consider over TWENTY data points including multiple ranking, research resources, mentorship program, location, safety, study outcome,.... and may more.......",
    },
    {
        svg: essay_svg,
        title: "Essay Writing",
        text1: "Essay is one of the most vital component for your application. It helps university know you as the person rather than just a number on your GPA or Standardize test.",
        text2: "We make sure you not only are able to craft the best essay that reflects you but provide a comprehensive skillsets to make essay in the future. These skillset will be the basis for your Cover letter, letter of Intent, emails, formal communication and more.",
    },
    {
        svg: passport_visa_svg,
        title: "Visa Appointments",
        text1: "Booking your visa interview on time is crucial. Don't worry, we are here to help.",
        text2: "Its not just about filling out the forms. It's also making sure, the forms and documentation are done Right.",
    },
    {
        svg: interview_svg,
        title: "Visa Prepration",
        text1: "Visa interview is one of the most difficult for students. We understand the trepidation here.",
        text2: "We have a five week comprehensive program for your visa interview preparation. We go through it all.We do extensiv research, get the core concept, manage the cross questions and foster confidence to make your visa interview a success.",
    },
    {
        svg: flight_svg,
        title: "Pre Departure Prep.",
        text1: "Your journey is not done with getting the F1 Visa. It is simply the beginning.",
        text2: "There is lot to be done. We have a four week course on the adjusting to US setting, do's and don't, your action plan, timeline and much more.",
    },
];

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
    {
        photo: photo4,
    },
    {
        photo: photo5,
    },
    {
        photo: photo6,
    },
    {
        photo: photo7,
    },
    {
        photo: photo8,
    },
    {
        photo: photo9,
    },
    {
        photo: photo10,
    },
    {
        photo: photo11,
    },
    {
        photo: photo12,
    },
    {
        photo: photo13,
    },
    {
        photo: photo14,
    },
    {
        photo: photo15,
    },
    {
        photo: photo16,
    },
    {
        photo: photo17,
    },
    {
        photo: photo18,
    },
    {
        photo: photo19,
    },
    {
        photo: photo20,
    },
    {
        photo: photo21,
    },
    {
        photo: photo22,
    },
    {
        photo: photo23,
    },
];

function Home() {
    // const containerRef = useRef(null);

    // // Function to scroll the container
    // const scrollRight = () => {
    //     if (containerRef.current) {
    //         containerRef.current.scrollBy({
    //             left: 400, // Adjust this value based on how much you want to scroll
    //             behavior: 'smooth',
    //         });
    //     }
    // };

    return (
        <>
        <Nav />
            <div className="relative">
            {/* ref={containerRef} */}
                <div className='w-11/12 mx-auto mt-3'> 
                    <div className='relative mx-auto flex flex-row overflow-x-scroll gap-4'>
                        {details.map((detail, index) => (
                            <div key={index} className="relative h-[420px] min-w-[350px] sm:h-[650px] md:h-[550px] sm:min-w-[600px] md:min-w-[800px] lg:min-w-[900px]">
                                {/* Blurred Background Layer */}
                                <div className='absolute inset-0 bg-cover bg-center h-full w-full' style={{ backgroundImage: `url(${detail.photo})` }}>
                                    <div className='bg-black z-[5] w-full h-full opacity-60'></div>
                                </div>

                                {/* Content Layer */}
                                <div className='relative w-3/4 flex flex-col ml-5 text-white z-10 p-5 sm:p-8'>
                                    <h2 className='text-xl sm:text-2xl font-bold'>{detail.title}</h2>
                                    <p className='mt-3 text-lg sm:text-xl'>{detail.memo}</p>
                                    <p className='w-full mt-3 sm:w-full text-sm sm:text-base'>
                                        <span dangerouslySetInnerHTML={{ __html: detail.detail_text }}></span>
                                    </p>
                                    {detail.list && (
                                        <p className='mt-3'>
                                            <span dangerouslySetInnerHTML={{ __html: detail.list }}></span>
                                        </p>
                                    )}
                                    <p className='w-full mt-3 text-sm sm:text-base'>
                                        <span dangerouslySetInnerHTML={{ __html: detail.detail_text2 }}></span>
                                    </p>
                                    <p className='w-full mt-3 text-sm sm:text-base'>
                                        <span dangerouslySetInnerHTML={{ __html: detail.detail_text3 }}></span>
                                    </p>
                                </div>

                                {/* Social Media Links */}
                                <div className='absolute bottom-4 right-4 w-full flex flex-row items-center justify-center gap-4 z-20'>
                                    <a href="https://www.facebook.com/share/183SYEbTBd/" target="_blank">
                                        <img className="w-10 sm:w-12 p-2 hover:bg-white rounded-lg" src={facebook_svg} alt="Facebook" />
                                    </a>
                                    <a href="https://www.instagram.com/abroadunbox/profilecard/?igsh=MWRud3N6Ym00a3Rtbw==" target="_blank">
                                        <img className="w-10 sm:w-12 p-2 hover:bg-white rounded-lg" src={instagram_svg} alt="Instagram" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/abroad-unbox/" target="_blank">
                                        <img className="w-10 sm:w-12 p-2 hover:bg-white rounded-lg" src={linkedin_svg} alt="Linkedin" />
                                    </a>
                                    <a href="https://youtube.com/@abroadunbox?si=XYkMA1BkUFrC9NuA" target="_blank">
                                        <img className="w-10 sm:w-12 p-2 hover:bg-white rounded-lg" src={yt_svg} alt="YouTube" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer lg:hidden"
                    // onClick={scrollRight}
                >
                    <img className="w-12 h-12 mx-auto" src={next_svg} alt="Next" />

                </div>
            </div>

            <div className='p-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-11/12 mx-auto mt-3'>
                <p className='text-2xl font-bold text-white'>Our Commitments and Services</p>
            </div>
            <div className="relative">
                {/* Scrollable container */}
                <div className='w-11/12 mx-auto mt-3 flex flex-row gap-3 overflow-x-scroll'>
                    {services.map((service, index) => (
                        <div key={index} className="relative">
                            <div className="h-[400px] min-w-[350px] bg-[#e6ffe6] p-2">
                                <a href="/login">
                                    <img className="w-12 h-12 mx-auto" src={service.svg} alt={service.title} />
                                </a>
                                <a href="/login">
                                    <h2 className='text-center text-2xl underline'>{service.title}</h2>
                                </a>
                                <p className='w-full mt-5'>
                                    <span dangerouslySetInnerHTML={{ __html: service.text1 }}></span>
                                </p>
                                <p className='w-full mt-5'>
                                    <span dangerouslySetInnerHTML={{ __html: service.text2 }}></span>
                                </p>
                                <p className='w-full mt-5'>
                                    <span dangerouslySetInnerHTML={{ __html: service.text3 }}></span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrow (fixed and only visible on mobile) */}
                <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer lg:hidden"
                    // onClick={scrollRight}
                >
                    <img className="w-12 h-12 mx-auto" src={next_svg} alt="Next" />

                </div>
            </div>

            <div className='p-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-11/12 mx-auto mt-3'>
                <p className='text-2xl font-bold text-white'>Experiences and Advices by Our Alumni</p>
            </div>
            <div className="relative">
                <div className='w-11/12 mx-auto mt-3 flex flex-row gap-3 overflow-x-scroll' >
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/eXpbRcULED0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/zSdyeC3Z_1g"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/ULaOvx6QqnA"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/YGkFxj6AZ4A"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/z-4112Vz2is"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/RGZsYDzTlkU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/D4VmCFfZorI"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/Yla3nOh43Lc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='h-[400px] min-w-[350px] bg-gray-400'>
                            <iframe
                                width="350"
                                height="400"
                                src="https://www.youtube.com/embed/KCaH7g0B97U"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer lg:hidden"
                    // onClick={scrollRight}
                >
                    <img className="w-12 h-12 mx-auto" src={next_svg} alt="Next" />

                </div>
            </div>

            <div className='p-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-11/12 mx-auto mt-3'>
                <p className='text-2xl font-bold text-white'>Our Success</p>
            </div>
            <div className='w-11/12 mx-auto mt-3 flex flex-row overflow-x-scroll'>
                {successes.map((success, index) => (
                    <div key={index} className="relative ">
                        <div className='p-3 w-[320px] h-[400px] rounded-lg' >

                            <img className="h-full w-full rounded-lg"
                                style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19)" }}
                                src={success.photo} alt="sucess image" />

                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Home;
