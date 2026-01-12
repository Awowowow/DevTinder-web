import React, { useEffect, useState, useCallback } from "react";
import EditPanel from "./EditPanel";
import PreviewPanel from "./PreviewPanel";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const loggedInUser = useSelector((store) => store.user);

  const [userData, setUserData] = useState({
    photoUrl: "",
    firstName: "",
    lastName: "",
    age: "",
    description: "",
    gender: "",
    skillsInput: "",
    skills: [],
  });

  // Initialize user data once
  useEffect(() => {
    if (loggedInUser) {
      setUserData({
        photoUrl: loggedInUser.photoUrl || "",
        firstName: loggedInUser.firstName || "",
        lastName: loggedInUser.lastName || "",
        age: loggedInUser.age || "",
        description: loggedInUser.description || "",
        gender: loggedInUser.gender || "",
        skills: loggedInUser.skills || [],
        skillsInput: (loggedInUser.skills || []).join(", "),
      });
    }
  }, [loggedInUser]);

  // Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      const updated = { ...prev, [name]: value };
      
      // Update skills array when skillsInput changes
      if (name === "skillsInput") {
        updated.skills = value
          .split(",")
          .map(s => s.trim())
          .filter(Boolean);
      }
      
      return updated;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EditPanel 
          handleChange={handleChange}
          userData={userData}
          loggedInUser={loggedInUser}
        />
        <PreviewPanel userData={userData} />
      </div>
    </div>
  );
};

export default EditProfile;