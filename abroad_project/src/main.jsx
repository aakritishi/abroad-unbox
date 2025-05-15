import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import Student from "./components/Student";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Info from "./components/info/Info";
import Essay from "./components/essay/Essay";
import Application from "./components/application/Application";
import AddExpAdvices from "./components/forms/AddExpAdvices";
import AddSuccess from "./components/forms/AddSuccess";
import AddInfo from "./components/info/AddInfo";
import AdminRoute from "./components/adminRoute/AdminRoute";
import EditInfo from "./components/info/EditInfo";
import AddVideo from "./components/essay/AddVideo";
import EditVideo from "./components/essay/EditVideo";
import ViewSubmittedEssay from "./components/essay/ViewSubmittedEssay";
import RegisterStudent from "./components/forms/RegisterStudent";
import Stage1AddVideo from "./components/application/stages_action/stage1AddVideo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/essay" element={<Essay />} />
        <Route path="/application" element={<Application />} />

        {/* admin private routes */}
        <Route path="/add_new_alumni" element={<AdminRoute><AddExpAdvices /></AdminRoute>} />
        <Route path="/add_success" element={<AdminRoute><AddSuccess /></AdminRoute>} />
        <Route path="/edit_info/:id" element={<AdminRoute><EditInfo /></AdminRoute>} />
        <Route path="/add_video" element={<AdminRoute><AddVideo /></AdminRoute>} />
        <Route path="/edit_video/:id" element={<AdminRoute><EditVideo/></AdminRoute>} />
        <Route path="/view_submitted_essay" element={<AdminRoute><ViewSubmittedEssay/></AdminRoute>} />
        <Route path="/register_student" element={<AdminRoute><RegisterStudent/></AdminRoute>} />
        <Route path="/add_info" element={<AdminRoute><AddInfo /></AdminRoute>}/>
        <Route path="/stage1/add_video" element={<AdminRoute><Stage1AddVideo /></AdminRoute>}/>

      </Routes>
      {/* <Footer /> */}
    </Router>
  </StrictMode>
);
