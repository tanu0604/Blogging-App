
import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Dashboard = () => {
  const [userName, setUserName] = useState("No name provided");
  const [userEmail, setUserEmail] = useState("");
  const [userProfession, setUserProfession] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);

        const userDocRef = doc(db, "Users", user.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName(userData.username || "No name provided");
            setUserProfession(userData.profession || "Not specified");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="dashboard-container p-4 mt-16 lg:ml-24 md:ml-24 ml-0">
      <h1 className="text-2xl font-semibold mb-4 text-center text-primaryColor">User Profile</h1>
      
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col items-center p-6">
          {/* Profile Picture Placeholder */}
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/100" // Replace with actual user profile picture URL
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
          </div>

          <h2 className="text-xl font-semibold">Name: {userName || "No name provided"}</h2>
          <p className="text-lg text-gray-600">Email: {userEmail || "No email provided"}</p>
          <p className="text-lg text-gray-600">Profession: {userProfession || "Not specified"}</p>
          
          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-primaryColor text-white rounded focus:scale-100 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
