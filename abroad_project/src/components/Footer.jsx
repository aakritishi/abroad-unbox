import { useState } from 'react'
import { Link } from 'react-router-dom';
import linkedin_svg from '../assets/svg/linkedin1.svg'
import facebook_svg from '../assets/svg/facebook1.svg'
import instagram_svg from '../assets/svg/instagram1.svg'
import yt_svg from '../assets/svg/youtube.svg'
import logo from '../assets/bg_img/logo1.png'

function Login() {

    return (
        <>
            <footer className='px-4 py-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-full mx-auto mt-3 flex flex-col justify-between md:flex-row lg:flex-row'>
                <div className='w-1/4 mx-auto'>
                    <p className='text-2xl font-bold text-black'>Our Service</p>
                    <p className='flex flex-col mt-2'>
                        <a href='/student_login'><span>Career Counseling</span></a>
                        <a href='/student_login'><span>Usa Application</span></a>
                        <a href='/student_login'><span>University Selection</span></a>
                        <a href='/student_login'><span>Essay Writing</span></a>
                        <a href='/student_login'><span>Documentation</span></a>
                        <a href='/student_login'><span>Visa Application</span></a>
                        <a href='/student_login'><span>Visa Preparation</span></a>
                        <a href='/student_login'><span>After Visa Sessions</span></a>
                        <a href='/student_login'><span>SAT Preparation</span></a>
                        <a href='/student_login'><span>DET/IELTS/TOFEL</span></a>
                    </p>
                </div>
                <div className='w-1/4 mx-auto'>
                    <p className='text-2xl font-bold text-black'>Contact Us</p>
                    <p className='flex flex-col mt-2'>
                        <span>Kalikastan-29, Kathmandu, Nepal</span>
                        <span>
                            <a href="tel:01-45470760" className='hover:text-blue-900 hover:underline' >01-45470760</a>
                            <span> | </span>
                            <a href="tel:9848594312" className='hover:text-blue-900 hover:underline' >9848594312</a>
                        </span>
                        <a href='mailto:abroadunbox@gmail.com' className='hover:text-blue-900 hover:underline' ><span>abroadunbox@gmail.com</span></a>
                        <a href='bishal.karki942@gmail.com' className='hover:text-blue-900 hover:underline' ><span>bishal.karki942@gmail.com</span></a>
                        <span>www.abroadunbox.com</span>
                    </p>
                </div>
                <div className='w-1/4 mx-auto'>
                    <p className='text-2xl font-bold text-black'>Our Office Hours</p>
                    <p className='flex flex-col mt-2'>
                        <span>Sunday - Thursday</span>
                        <span>10:00 AM - 5:00 PM</span>
                        <span>Friday & Saturday</span>
                        <span>Closed</span>
                    </p>
                </div>
                <div className='w-1/4 mx-auto'>
                    <img src={logo} alt="logo" className='h-[200px] mx-auto' />
                    <div className='w-full flex flex-row items-center justify-center gap-4 mt-2'>
                        <a href="https://www.facebook.com/share/183SYEbTBd/" target="_blank">
                            <img className="w-12 p-2 hover:bg-black rounded-lg" src={facebook_svg} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/abroadunbox/profilecard/?igsh=MWRud3N6Ym00a3Rtbw==" target="_blank">
                            <img className="w-12 p-2 hover:bg-black rounded-lg" src={instagram_svg} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/abroad-unbox/" target="_blank">
                            <img className="w-12 p-2 hover:bg-black rounded-lg" src={linkedin_svg} alt="Linkedin" />
                        </a>
                        <a href="https://youtube.com/@abroadunbox?si=XYkMA1BkUFrC9NuA" target="_blank">
                            <img className="w-12 p-2 hover:bg-black rounded-lg" src={yt_svg} alt="YouTube" />
                        </a>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Login