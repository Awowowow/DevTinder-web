import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import validateForm from "../utils/validateForm";


const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' 
    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
    : 'bg-gradient-to-r from-red-500 to-rose-500';

  const icon = type === 'success' ? '✓' : '⚠️';

  return (
    <div className="fixed top-6 right-6 z-50 animate-slideIn">
      <div className={`${bgColor} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[300px] backdrop-blur-sm`}>
        <span className="text-2xl">{icon}</span>
        <p className="font-medium">{message}</p>
        <button 
          onClick={onClose}
          className="ml-auto text-white/80 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};




const EditPanel = ({ userData, handleChange, loggedInUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const error = validateForm(userData);
  
  useEffect(() => {
    if (errorMessage) {
      setErrorMessage("");
    }
  }, [userData]);

  const editUser = async () => {
    if (error) {
      setErrorMessage(error);
      return;
    }

    setIsLoading(true);
    
    const payload = {
      photoUrl: userData.photoUrl,
      firstName: userData.firstName,
      lastName: userData.lastName,
      age: userData.age,
      description: userData.description,
      skills: userData.skills,
      gender: userData.gender
    };

    const isUnchanged = JSON.stringify(payload) === JSON.stringify({
      photoUrl: loggedInUser.photoUrl,
      firstName: loggedInUser.firstName,
      lastName: loggedInUser.lastName,
      age: loggedInUser.age,
      about: loggedInUser.description,
      skills: loggedInUser.skills,
      gender: loggedInUser.gender,
    });
    
    if (isUnchanged) {
      setErrorMessage("No changes detected");
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        payload,
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");

      setToast({ message: 'Profile updated successfully!', type: 'success' });
      
      setTimeout(() => {
        navigate("/profile");
      }, 1000);

    } catch (err) {
      const message = 
        err.response?.data?.error ||
        err.response?.data?.message ||
        (typeof err.response?.data === 'string' 
          ? err.response?.data 
          : "Failed to update profile");
      
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };
   
  return (
    <>
    {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Edit Profile</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="text-red-400 text-lg">⚠️</span>
            <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            Profile Photo URL
          </label>
          <input
            name="photoUrl"
            value={userData.photoUrl}
            onChange={handleChange}
            type="text"
            placeholder="https://example.com/photo.jpg"
            className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              First Name
            </label>
            <input
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Age
            </label>
            <input
              name="age"
              value={userData.age}
              onChange={handleChange}
              type="number"
              placeholder="25"
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Gender
            </label>
            <input
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              type="text"
              placeholder="Male/Female/Others"
              className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            Bio
          </label>
          <textarea
            name="description"
            value={userData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Tell something about yourself..."
            className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
          />
          <p className="text-slate-500 text-xs mt-1">
            {userData.description?.length || 0} / 500 characters
          </p>
        </div>

        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">
            Skills
          </label>
          <input
            name="skillsInput"
            value={userData.skillsInput}
            onChange={handleChange}
            type="text"
            placeholder="your skills seperated by commas"
            className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-white border border-slate-600 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
          <p className="text-slate-500 text-xs mt-1">
            {userData.skills.length} / 10 skills
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex gap-4">
        <button
          className="flex-1 py-3.5 rounded-xl bg-slate-700 text-white font-semibold hover:bg-slate-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg cursor-pointer"
          onClick={() => navigate("/")}
          disabled={isLoading}
        >
          Cancel
        </button>

        <button 
          className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg cursor-pointer"
          onClick={editUser}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Saving...
            </span>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </div>
    </>
  );
};

export default EditPanel;