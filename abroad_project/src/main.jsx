import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Student from './components/Student';
import Login from './components/Login';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import Footer from './components/Footer';
import Info from './components/Info';
import Essay from './components/Essay';
import Application from './components/Application';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        {/* <Route path="/admin_login" element={<AdminLogin />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/student_login" element={<StudentLogin />} /> */}
        <Route path="/info" element={<Info />} />
        <Route path="/essay" element={<Essay />} />
        <Route path="/application" element={<Application />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </StrictMode>,
);
