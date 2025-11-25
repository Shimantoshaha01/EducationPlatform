import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StudentLogin from "./pages/StudentLogin";
import StudentProfile from "./pages/StudentProfile";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
   
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-profile" element={<StudentProfile />} />
      </Routes>
    </Router>
  )
}

export default App
