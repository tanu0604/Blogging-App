import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./Firebase"; // Adjust the import based on your Firebase configuration
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set the display name for the user
      await updateProfile(user, {
        displayName: username, // Set the display name
      });

      // Store user info in Firestore, including profession
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email, // Email of the user
        username: username, // Name of the user
        profession: profession, // Profession of the user
        blogIds: [], // Blogs written by the user
      });

      // Log the display name and profession
      console.log("Display Name:", user.displayName);
      console.log("Profession:", profession);

      alert("Signup done successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error); // Improved error logging
      alert("Error during signup: " + error.message); // Improved error handling
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-96">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-primaryColor text-white p-2 rounded-lg w-full hover:scale-110 focus::scale-105"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
