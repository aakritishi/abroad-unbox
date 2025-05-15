import { useState, useRef, useEffect } from "react";
import fullscreen_svg from '../../assets/svg/fullscreen-1.svg'
import smallscreen_svg from '../../assets/svg/fullscreen-2.svg'
import Nav from "../Nav";
import Footer from "../Footer";

function Info() {
    const [openSection, setOpenSection] = useState(null);
    const [isFullScreen, setIsFullScreen] = useState(false); // Track full-screen mode
    const descriptionRef = useRef(null);

    const infoSessions = [
        {
            id: 1,
            title: "Mindset",
            video: "https://www.youtube.com/embed/KzclmnHJcvs?autoplay=0&mute=0",
            // video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=0",
            description: [
                "This is the first info session covering various topics related to technology and innovation.",
                "Join us to learn about the latest trends in the industry and how to stay updated.",
            ],
        },
        {
            id: 2,
            title: "Application Timeline",
            video: "https://www.youtube.com/embed/LGdPMf-SgBA?autoplay=0&mute=1",
            description: [
                "Session 2 focuses on advanced development techniques and problem-solving strategies.",
                "We'll also discuss real-world applications and best practices for coding.",
            ],
        },
        {
            id: 3,
            title: "Career Counseling",
            video: "https://www.youtube.com/embed/LGdPMf-SgBA?autoplay=0&mute=1",
            description: [
                "Final session covering hands-on projects and industry insights.",
                "Get career advice and networking opportunities in this session.",
            ],
        },
        {
            id: 4,
            title: "Personal Essay / Goal Statement",
            video: "https://www.youtube.com/embed/KzclmnHJcvs?autoplay=0&mute=0",
            description: [
                "This is the first info session covering various topics related to technology and innovation.",
                "Join us to learn about the latest trends in the industry and how to stay updated.",
            ],
        },
    ];

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
            document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
            document.removeEventListener("msfullscreenchange", handleFullScreenChange);
        };
    }, []);

    return (
        <>
        <Nav />
        <div className="w-11/12 p4 mx-auto mt-3">
            <div className="p-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-full mx-auto">
                <p className="text-2xl font-bold text-white">Info Sessions</p>
            </div>

            {infoSessions.map((session) => (
                <div key={session.id}>
                    <button
                        type="button"
                        className={`p-2 bg-gradient-to-l from-[#006600] to-[#ffffff] w-full mx-auto mt-5 text-2xl font-bold text-left ${openSection === session.id ? "bg-gray-600" : ""
                            }`}
                        onClick={() => toggleSection(session.id)}
                    >
                        {session.title}
                    </button>

                    {openSection === session.id && (
                        <div className="content w-full flex flex-col md:flex-row lg:flex-row gap-2 mt-2">
                            <div className="w-full md:w-1/2 lg:w-1/2">
                                <iframe
                                    className="w-full h-[50dvh]"
                                    src={session.video}
                                    title={session.title}
                                ></iframe>
                            </div>

                            {/* Description Section with Full-Screen Mode */}
                            <div
                                ref={descriptionRef}
                                className={`w-full md:w-1/2 lg:w-1/2 p-3 bg-gradient-to-r from-[#00ffcc] to-[#66ffff] overflow-scroll h-[50dvh] ${isFullScreen ? "fixed top-0 left-0 w-screen h-screen z-50 p-6" : ""
                                    }`}
                            >
                                <div className="flex justify-between">
                                    <h2 className="text-2xl font-semibold">{session.title}:</h2>
                                    {!isFullScreen ? (
                                        <button
                                            className="text-white px-3 py-1 rounded-md"
                                            onClick={enterFullScreen}
                                        >
                                            {/* Full Screen */}
                                            <img className="w-8 h-8 mx-auto" src={fullscreen_svg} alt="Full Screen" />
                                        </button>
                                    ) : (
                                        <button
                                            className="text-white px-3 py-1 rounded-md"
                                            onClick={exitFullScreen}
                                        >
                                            {/* Exit Full Screen */}
                                            <img className="w-10 h-10 mx-auto" src={smallscreen_svg} alt="Full Screen" />
                                        </button>
                                    )}
                                </div>
                                <p className="flex flex-col gap-y-3">
                                    {session.description.map((desc, index) => (
                                        <span key={index}>{desc}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
        <Footer />
        </>
    );
}

export default Info;

