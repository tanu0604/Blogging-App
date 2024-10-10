
import React, { useEffect, useState } from "react";
import { auth, db } from '../Firebase'; // Correctly import auth and db
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
import logo from "../../assests/Website/logo.png";
import "./TopNavbar.css";
import { FaSearch } from "react-icons/fa";

const TopNavbar = () => {
  const [userName, setUserName] = useState("No name provided");
  const [userEmail, setUserEmail] = useState("");
  const [userProfession, setUserProfession] = useState("Not specified");

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
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        // If not authenticated, clear user info
        setUserName("No name provided");
        setUserEmail("");
        setUserProfession("Not specified");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="TopNavigation bg-white fixed w-full shadow p-3 z-10">
      <div className="navItems flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10" />
        <div className="dropdown relative">
          <button className="btn bg-gray-50 dropdown-toggle text-gray-500" type="button" aria-expanded="false">
            AfterGlow
          </button>
        </div>
        <h1 className="text-sm text-gray-500">Scenario: Default</h1>
        <div className="flex items-center ml-4 bg-white shadow-md p-2 rounded-lg w-24">
          <FaSearch className="text-gray-600 mr-2" />
          <span className="text-gray-600 font-semibold">Search...</span>
        </div>
        <div className="flex items-center ml-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div className="flex flex-col text-left">
            <span className="font-semibold">{userName}</span>
            <span className="text-gray-500 text-xs">{userProfession}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
// import React, { useEffect, useState } from "react";
// import { auth, db } from '../Firebase'; // Correctly import auth and db
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore"; 
// import logo from "../../assests/Website/logo.png";
// import { FaSearch } from "react-icons/fa";
// import { useHistory } from "react-router-dom"; // Import useHistory

// const TopNavbar = () => {
//   const [userName, setUserName] = useState("No name provided");
//   const [userEmail, setUserEmail] = useState("");
//   const [userProfession, setUserProfession] = useState("Not specified");
//   const history = useHistory(); // Initialize history

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setUserEmail(user.email);
//         const userDocRef = doc(db, "Users", user.uid);
//         try {
//           const userDoc = await getDoc(userDocRef);
//           if (userDoc.exists()) {
//             const userData = userDoc.data();
//             setUserName(userData.username || "No name provided");
//             setUserProfession(userData.profession || "Not specified");
//           } else {
//             console.log("No such document!");
//           }
//         } catch (error) {
//           console.error("Error fetching user data: ", error);
//         }
//       } else {
//         setUserName("No name provided");
//         setUserEmail("");
//         setUserProfession("Not specified");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleProfileClick = () => {
//     // Navigate to the Dashboard with user info
//     history.push({
//       pathname: '/dashboard',
//       state: {
//         userName,
//         userEmail,
//         userProfession,
//       },
//     });
//   };

//   return (
//     <nav className="TopNavigation bg-white fixed w-full shadow p-3 z-10">
//       <div className="navItems flex justify-between items-center">
//         <img src={logo} alt="Logo" className="h-10" />
//         <div className="dropdown relative">
//           <button className="btn bg-gray-50 dropdown-toggle text-gray-500" type="button" aria-expanded="false">
//             AfterGlow
//           </button>
//         </div>
//         <h1 className="text-sm text-gray-500">Scenario: Default</h1>
//         <div className="flex items-center ml-4 bg-white shadow-md p-2 rounded-lg w-24">
//           <FaSearch className="text-gray-600 mr-2" />
//           <span className="text-gray-600 font-semibold">Search...</span>
//         </div>
//         <div className="flex items-center ml-4 cursor-pointer" onClick={handleProfileClick}>
//           <img
//             src="https://via.placeholder.com/40"
//             alt="Profile"
//             className="w-10 h-10 rounded-full mr-2"
//           />
//           <div className="flex flex-col text-left">
//             <span className="font-semibold">{userName}</span>
//             <span className="text-gray-500 text-xs">{userProfession}</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default TopNavbar;
