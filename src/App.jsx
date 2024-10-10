import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./components/Blog/BlogContext";
import BlogPosts from "./components/Blog/BlogPosts";
import Navbar from "./components/Layout/Navbar";
import TopNavbar from "./components/Layout/TopNavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Pages/Dashboard";
import "./index.css";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          {/* Home route without Navbar */}
          <Route path="/" element={<Home />} />

          {/* Login and Signup without Navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Dashboard and Blogs with TopNavbar and Sidebar */}
          <Route
            path="/blogs"
            element={
              <>
                <TopNavbar /> {/* Render Top Navbar */}
                <div className="flex">
                  <Navbar /> {/* Sidebar Navbar */}
                  <div className="ml-64 p-4 w-full"> {/* Main content */}
                    <BlogPosts /> {/* BlogPosts component */}
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/dashboard"
            element={
              <>
                <TopNavbar /> {/* Render Top Navbar */}
                <div className="flex">
                  <Navbar /> {/* Sidebar Navbar */}
                  <div className="ml-64 p-4 w-full"> {/* Main content */}
                    <Dashboard /> {/* Dashboard content */}
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
