import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import { sendLikeRequest, sendPassRequest } from "../utils/userRequests";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [exitDirection, setExitDirection] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  if (!user) return null;
  const { _id, firstName, lastName, skills = [], age, photoUrl, description, gender } = user;

  const handleAction = async (type) => {
    if (isLoading || !isMounted) return;
  
    setIsLoading(true);
    setExitDirection(type === "like" ? "right" : "left");
  
    try {
      type === "like"
        ? await sendLikeRequest(_id)
        : await sendPassRequest(_id);
  
      setTimeout(() => {
        dispatch(removeFeed(_id));
        setIsLoading(false);
      }, 400);
    } catch (err) {
      console.error(`Error on ${type}:`, err);
      setIsLoading(false);
      setExitDirection(null);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 600);
  
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isLoading || !isMounted) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          handleAction("pass");
          break;
        case 'ArrowRight':
          handleAction("like");
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLoading, isMounted]);
  

  return (
    <div className="flex items-center justify-center p-4">
      <div 
        className={`relative w-96 h-150 rounded-3xl overflow-hidden shadow-2xl bg-base-200 transition-all duration-700 ease-out
          ${exitDirection === 'left' ? 'translate-x-[-150%] -rotate-12 opacity-0' : ''}
          ${exitDirection === 'right' ? 'translate-x-[150%] rotate-12 opacity-0' : ''}
          ${!exitDirection ? 'animate-[slideIn_0.6s_ease-out]' : ''}
        `}
      >
        <div className="relative h-80 overflow-hidden">
          <img
            src={
              photoUrl ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-trom-black via-black/50 to-transparent" />

          <div className="absolute top-4 right-4 flex gap-2">
            {age && (
              <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                <span className="text-white text-sm font-semibold">
                  {age}
                </span>
              </div>
            )}
          </div>

          <div className="absolute top-4 left-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm">✓</span>
            </div>
          </div>

          {exitDirection === 'left' && (
            <div className="absolute top-20 right-10 transform rotate-12 animate-[fadeInLabel_0.3s_ease-out]">
              <div className="bg-red-500 text-white px-8 py-4 rounded-lg text-4xl font-bold border-4 border-red-600 shadow-2xl">
                NOPE
              </div>
            </div>
          )}

          {exitDirection === 'right' && (
            <div className="absolute top-20 left-10 transform -rotate-12 animate-[fadeInLabel_0.3s_ease-out]">
              <div className="bg-green-500 text-white px-8 py-4 rounded-lg text-4xl font-bold border-4 border-green-600 shadow-2xl">
                LIKE
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-gray-900 via-gray-900/95 to-transparent pt-8 pb-6 px-6">
          <div className="mb-3">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold text-white">
                {firstName}
              </h2>
              {age && (
                <span className="text-2xl font-light text-white/90">{age}</span>
              )}
              {gender && (
                <span className="text-2xl text-white/90">
                  {typeof gender === 'string' && gender.toLowerCase() === "male" ? "♂" : 
                   typeof gender === 'string' && gender.toLowerCase() === "female" ? "♀" : 
                   "⚧"}
                </span>
              )}
            </div>
            <div className="h-1 w-20 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full mt-2"></div>
          </div>

          {description && (
            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {description}
            </p>
          )}

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-white text-xs font-medium backdrop-blur-sm hover:border-purple-400/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-center gap-6 pt-2">
            <button 
              onClick={() => handleAction("pass")}
              disabled={isLoading || !isMounted}
              className={`group relative w-16 h-16 rounded-full bg-linear-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 active:scale-95 ${isLoading ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
            >
              {isLoading && exitDirection === 'left' ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-3xl">✕</span>
              )}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
                <span className="px-2 py-0.5 rounded-full bg-black/60 text-xs text-white backdrop-blur-sm whitespace-nowrap">
                  Pass
                </span>
              </div>
            </button>

            <button 
              onClick={() => handleAction("like")}
              disabled={isLoading || !isMounted}
              className={`group relative w-16 h-16 rounded-full bg-linear-to-br from-pink-500 via-red-500 to-orange-500 flex items-center justify-center shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 active:scale-95 ${isLoading ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
            >
              {isLoading && exitDirection === 'right' ? (
                <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-3xl">❤️</span>
              )}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
                <span className="px-2 py-0.5 rounded-full bg-black/60 text-xs text-white backdrop-blur-sm whitespace-nowrap">
                  Like
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="absolute top-4 left-16 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-12 left-20 w-1 h-1 bg-white/20 rounded-full"></div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInLabel {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default UserCard;
