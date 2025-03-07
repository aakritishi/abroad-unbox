import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/bg_img/logo1.png';

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [role, setRole] = useState('');
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    const storedFirstName = localStorage.getItem('first_name');
    const storedRole = localStorage.getItem('role');
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      setFirstName(storedFirstName);
      setRole(storedRole);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]); // re-run when the route changes

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('first_name');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      <div className='bg-gradient-to-l from-[#006600] to-[#ffffff] px-10 py-4 flex items-center'>
        <img className='mr-auto w-[70px]' src={logo} alt='Logo'/>
        <nav className='px-10 py-5 mt-3 text-xl font-bold mr-auto'>
        <ul className='flex gap-10 justify-between'>
          <Link to="/"><li className='hover:text-blue-900 hover:underline'>Home</li></Link>
          <a href='/student_login'><li className='hover:text-blue-900 hover:underline'>Application</li></a>
          <a href='/student_login'><li className='hover:text-blue-900 hover:underline'>Essay</li></a>
          <a href='/student_login'><li className='hover:text-blue-900 hover:underline'>SAT</li></a>
          <a href='/student_login'><li className='hover:text-blue-900 hover:underline'>English Proficiency</li></a>
          <a href='/student_login'><li className='hover:text-blue-900 hover:underline'>Info Session</li></a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=27.7172,85.3240" target="_blank">
                <li className="hover:text-blue-900 hover:underline">Navigate</li>
            </a>
        </ul>
        </nav>

        {isLoggedIn ? (
          <div className='flex items-center ml-auto'>
            <span className='mr-4 text-black'>Welcome, {first_name}, {role}</span>
            <button
              onClick={handleLogout}
              className='p-2 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-black hover:scale-105 transition-transform duration-200'>
              Log Out
            </button>
          </div>
        ) : (
          <div className='flex items-center ml-auto'>
            {/* <Link to="/students">
              <button className='ml-auto p-2 bg-gray-500 text-white rounded-lg cursor-pointer mr-4 hover:bg-black hover:scale-105 transition-transform duration-200'>
                Students
              </button>
            </Link> */}
            <Link to="/student_login">
              <button className='ml-auto p-2 bg-[#1a53ff] text-white rounded-lg cursor-pointer mr-4 hover:bg-black hover:scale-105 transition-transform duration-200'>
                Log In
              </button>
            </Link>
            {/* <Link to="/student_login">
              <button className='ml-auto p-2 bg-[#008080] text-white rounded-lg cursor-pointer hover:bg-black hover:scale-105 transition-transform duration-200'>
                Student Log In
              </button>
            </Link> */}
          </div>
        )}
      </div>
      {/* <nav className='bg-gradient-to-r from-[#339933] to-[#99ccff] px-10 py-5 mt-3 text-xl font-bold'>
        <ul className='flex gap-10 justify-between'>
          <Link to="/"><li className='hover:text-blue-900 hover:underline'>Home</li></Link>
          <a href=''><li className='hover:text-blue-900 hover:underline'>Application</li></a>
          <a href=''><li className='hover:text-blue-900 hover:underline'>Essay</li></a>
          <a href=''><li className='hover:text-blue-900 hover:underline'>SAT</li></a>
          <a href=''><li className='hover:text-blue-900 hover:underline'>English Proficiency</li></a>
          <a href=''><li className='hover:text-blue-900 hover:underline'>Info Session</li></a>
        </ul>
      </nav> */}
    </>
  );
}

export default Nav;
