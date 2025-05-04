import { Link } from 'react-router-dom';
import linkedin_svg from '../assets/svg/linkedin1.svg';
import facebook_svg from '../assets/svg/facebook1.svg';
import instagram_svg from '../assets/svg/instagram1.svg';
import yt_svg from '../assets/svg/youtube.svg';
import logo from '../assets/bg_img/logo1.png';

function Footer() {
  return (
    <footer className="px-4 py-2 bg-gradient-to-r from-[#006600] to-[#ffffff] w-full mx-auto mt-3 flex flex-col justify-between md:flex-row lg:flex-row">
      <div className="w-full sm:w-1/4 mx-auto">
        <p className="text-2xl font-bold text-black">Our Service</p>
        <div className="flex flex-col mt-2">
          <Link to="/login" className="text-black hover:text-green-600">
            <span>Career Counseling</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>USA Application</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>University Selection</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>Essay Writing</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>Documentation</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>Visa Application</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>Visa Preparation</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>After Visa Sessions</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>SAT Preparation</span>
          </Link>
          <Link to="/login" className="text-black hover:text-green-600">
            <span>DET/IELTS/TOFEL</span>
          </Link>
        </div>
      </div>

      <div className="w-full sm:w-1/4 mx-auto">
        <p className="text-2xl font-bold text-black">Contact Us</p>
        <div className="flex flex-col mt-2">
          <span>Kalikastan-29, Kathmandu, Nepal</span>
          <span>
            <a
              href="tel:01-45470760"
              className="text-black hover:text-blue-900 hover:underline"
            >
              01-45470760
            </a>
            <span> | </span>
            {/* <a
              href="tel:9848594312"
              className="text-black hover:text-blue-900 hover:underline"
            >
              9848594312
            </a> */}
            <a
              href="viber://chat?number=+9779848594312"
              className="text-black hover:text-blue-900 hover:underline"
            >
              9848594312 (Viber)
            </a>
          </span>
          <a
            href="mailto:abroadunbox@gmail.com"
            className="text-black hover:text-blue-900 hover:underline"
          >
            abroadunbox@gmail.com
          </a>
          <a
            href="mailto:bishal.karki942@gmail.com"
            className="text-black hover:text-blue-900 hover:underline"
          >
            bishal.karki942@gmail.com
          </a>
          <span>www.abroadunbox.com</span>
        </div>
      </div>

      <div className="w-full sm:w-1/4 mx-auto">
        <p className="text-2xl font-bold text-black">Our Office Hours</p>
        <div className="flex flex-col mt-2">
          <span>Sunday - Thursday</span>
          <span>10:00 AM - 5:00 PM</span>
          <span>Friday & Saturday</span>
          <span>Closed</span>
        </div>
      </div>

      <div className="w-full sm:w-1/4 mx-auto flex flex-col items-center">
        <img src={logo} alt="logo" className="h-[200px] mx-auto" />
        <div className="w-full flex flex-row items-center justify-center gap-4 mt-4">
          <a
            href="https://www.facebook.com/share/183SYEbTBd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-12 p-2 hover:bg-black rounded-lg"
              src={facebook_svg}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/abroadunbox/profilecard/?igsh=MWRud3N6Ym00a3Rtbw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-12 p-2 hover:bg-black rounded-lg"
              src={instagram_svg}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/abroad-unbox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-12 p-2 hover:bg-black rounded-lg"
              src={linkedin_svg}
              alt="Linkedin"
            />
          </a>
          <a
            href="https://youtube.com/@abroadunbox?si=XYkMA1BkUFrC9NuA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-12 p-2 hover:bg-black rounded-lg"
              src={yt_svg}
              alt="YouTube"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
