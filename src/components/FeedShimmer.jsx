
import React from "react";

const FeedShimmer = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-96 h-150 rounded-3xl overflow-hidden shadow-2xl bg-base-200">
        <div className="relative h-80 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer bg-size-[200%_100%]">
          <div className="absolute top-4 right-4">
            <div className="w-12 h-7 bg-white/30 rounded-full animate-pulse"></div>
          </div>
          
          <div className="absolute top-4 left-4">
            <div className="w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0  rom-gray-900 via-gray-900/95 to-transparent pt-8 pb-6 px-6">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-32 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 w-8 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="h-1 w-20 bg-gray-700 rounded-full animate-pulse"></div>
          </div>

          <div className="mb-4 space-y-2">
            <div className="h-3 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-3 w-5/6 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-3 w-4/6 bg-gray-700 rounded animate-pulse"></div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-7 w-20 bg-gray-700 rounded-full animate-pulse"
              ></div>
            ))}
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <div className="w-14 h-14 rounded-full bg-gray-700 animate-pulse"></div>
            <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse"></div>
            <div className="w-14 h-14 rounded-full bg-gray-700 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FeedShimmer;
