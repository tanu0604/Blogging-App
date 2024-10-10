import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Add 'async' to handle async operations properly
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Firebase authentication for user login
      await signInWithEmailAndPassword(auth, email, password);
      alert("User Login Successful!!!");
      navigate("/blogs"); // Replace with the route you want to navigate to after login
    } catch (error) {
      console.error("Error during login:", error.message); // Log the error
    }
  };

  return (
    <div className="flex h-screen bg-gray-300">
      <form onSubmit={handleLogin} className="m-auto p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 ">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button 
          type="submit" 
          className="w-full p-2 bg-primaryColor text-white rounded hover:scale-110 focus::scale-105"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
