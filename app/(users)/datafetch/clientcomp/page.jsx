"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DataFetchClient = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const revealGender = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch(`https://api.genderize.io/?name=${userName}`);
      const data = await res.json();
      const { name, gender, probability, count } = data;
      setUserInfo(data);
      setIsLoading(false);
    };
    revealGender();
  }, []);

  if (isLoading) {
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
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="neon-card relative bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-cyan-500 max-w-md w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            {userInfo.gender === "male" ? (
              <svg
                className="w-24 h-24 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3zm3-5C9.2 4 7 6.2 7 9c0 2 1.2 3.7 3 4.4v2.6H8v2h2v2h2v-2h2v-2h-2v-2.6c1.8-.7 3-2.4 3-4.4 0-2.8-2.2-5-5-5z" />
              </svg>
            ) : userInfo.gender === "female" ? (
              <svg
                className="w-24 h-24 text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.8)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4c-2.8 0-5 2.2-5 5 0 2 1.2 3.7 3 4.4v2.6H8v2h2v2h2v-2h2v-2h-2v-2.6c1.8-.7 3-2.4 3-4.4 0-2.8-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
              </svg>
            ) : (
              <svg
                className="w-24 h-24 text-gray-400 drop-shadow-[0_0_15px_rgba(156,163,175,0.8)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
          </div>

          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            {userInfo.name || "Unknown"}
          </h2>

          <div className="space-y-4 mt-6">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/30">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Gender
              </p>
              <p
                className={`text-2xl font-bold ${
                  userInfo.gender === "male"
                    ? "text-cyan-400"
                    : userInfo.gender === "female"
                      ? "text-pink-400"
                      : "text-gray-400"
                }`}
              >
                {userInfo.gender || "Unknown"}
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/30">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Probability
              </p>
              <div className="flex items-center space-x-3">
                <p className="text-2xl font-bold text-purple-400">
                  {userInfo.probability
                    ? `${(userInfo.probability * 100).toFixed(1)}%`
                    : "N/A"}
                </p>
                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(userInfo.probability || 0) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/30">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Sample Count
              </p>
              <p className="text-2xl font-bold text-cyan-400">
                {userInfo.count?.toLocaleString() || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFetchClient;
