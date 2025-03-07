import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Student from './components/Student';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/student_login" element={<StudentLogin />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);
