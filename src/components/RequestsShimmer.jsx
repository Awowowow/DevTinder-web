import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RequestsShimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Skeleton height={40} width={320} />
          <Skeleton height={18} width={200} className="mt-2" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Skeleton height="100%" />

                {/* Dark gradient overlay (to match real card) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Name & age */}
                <div className="absolute bottom-4 left-4 space-y-2">
                  <Skeleton height={26} width={160} />
                  <Skeleton height={14} width={90} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <Skeleton height={14} count={3} />

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  <Skeleton width={70} height={22} borderRadius={999} />
                  <Skeleton width={70} height={22} borderRadius={999} />
                  <Skeleton width={70} height={22} borderRadius={999} />
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Skeleton height={48} width="100%" borderRadius={12} />
                  <Skeleton height={48} width="100%" borderRadius={12} />
                </div>

                {/* View profile */}
                <Skeleton height={16} width={140} className="mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestsShimmer;
