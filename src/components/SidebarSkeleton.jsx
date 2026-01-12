import React from 'react'

const SidebarSkeleton = () => {
    return (
      <div className="h-full flex flex-col p-4" data-theme="dracula">
        <ul className="menu gap-1">
          <li>
            <div className="relative h-10 bg-gradient-to-r from-gray-700/40 via-gray-600/40 to-gray-700/40 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slide"></div>
              <div className="flex items-center gap-3 px-3 h-full">
                <div className="w-5 h-5 bg-gray-600/60 rounded-full"></div>
                <div className="h-3 w-20 bg-gray-600/60 rounded"></div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative h-10 bg-gradient-to-r from-gray-700/40 via-gray-600/40 to-gray-700/40 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slide animation-delay-150"></div>
              <div className="flex items-center gap-3 px-3 h-full">
                <div className="w-5 h-5 bg-gray-600/60 rounded-full"></div>
                <div className="h-3 w-24 bg-gray-600/60 rounded"></div>
              </div>
            </div>
          </li>
        </ul>
  
        <style>{`
          @keyframes shimmer-slide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shimmer-slide {
            animation: shimmer-slide 2s infinite;
          }
          .animation-delay-150 {
            animation-delay: 0.15s;
          }
        `}</style>
      </div>
    );
  };

export default SidebarSkeleton