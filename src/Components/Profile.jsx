import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate, useNavigation } from "react-router-dom";

function Profile() {
  const nav = useNavigate();

  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        nav("/");
        // Sign-out successful.
        console.log("success");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen">
      Profile
      <button
        onClick={handleSignOut}
        className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all hover:scale-110 focus:outline-none focus:shadow-outline-blue"
      >
        {" "}
        Sign Out : 
      </button>
    </div>
  );
}

export default Profile;
