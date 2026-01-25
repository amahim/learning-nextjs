const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="relative bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-cyan-500 max-w-md w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse"></div>

        <div className="relative z-10">
          {/* Avatar Skeleton */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-gray-700 rounded-full animate-pulse"></div>
          </div>

          {/* Name Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-10 w-48 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>

          {/* Info Cards Skeleton */}
          <div className="space-y-4 mt-6">
            {/* Gender Card */}
            <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/30">
              <div className="h-4 w-16 bg-gray-700 rounded mb-2 animate-pulse"></div>
              <div className="h-8 w-24 bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Probability Card */}
            <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/30">
              <div className="h-4 w-24 bg-gray-700 rounded mb-2 animate-pulse"></div>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-16 bg-gray-700 rounded animate-pulse"></div>
                <div className="flex-1 h-2 bg-gray-700 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Count Card */}
            <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/30">
              <div className="h-4 w-28 bg-gray-700 rounded mb-2 animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
