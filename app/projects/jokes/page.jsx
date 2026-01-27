"use client"

import { useEffect, useState } from "react";

const RnadomJokes = () => {
    const [randomJoke, setRandomJoke] = useState({});
    const [showPunchline, setShowPunchline] = useState(false);
    const [loading, setLoading] = useState(false);

    const URL = "https://official-joke-api.appspot.com/random_joke";
    
    const fetchRandomJokes = async () => {
        setLoading(true);
        setShowPunchline(false);
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setRandomJoke(data);
        } catch (error) {
            console.error("Error fetching joke:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRandomJokes();
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <h1 className="text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
                    😂 Random Jokes 😂
                </h1>
                
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-500 mx-auto"></div>
                            <p className="mt-4 text-gray-600 text-lg">Loading joke...</p>
                        </div>
                    ) : (
                        <>
                            {/* Joke Type Badge */}
                            {randomJoke.type && (
                                <div className="mb-4">
                                    <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        {randomJoke.type}
                                    </span>
                                </div>
                            )}

                            {/* Setup */}
                            <div className="mb-6">
                                <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
                                    {randomJoke.setup || "Loading your joke..."}
                                </p>
                            </div>

                            {/* Punchline */}
                            <div className="mb-8 min-h-[60px]">
                                {showPunchline && randomJoke.punchline && (
                                    <div className="bg-gradient-to-r from-yellow-100 to-pink-100 p-4 rounded-xl animate-fadeIn">
                                        <p className="text-xl font-medium text-gray-700 italic">
                                            {randomJoke.punchline}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setShowPunchline(!showPunchline)}
                                    disabled={!randomJoke.setup}
                                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {showPunchline ? "🙈 Hide Punchline" : "🎭 View Punchline"}
                                </button>
                                
                                <button
                                    onClick={fetchRandomJokes}
                                    className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                                >
                                    🎲 Next Joke
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                <p className="text-center text-white mt-6 text-sm opacity-80">
                    Joke #{randomJoke.id || "..."} • Powered by Official Joke API
                </p>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </div>
    )
}

export default RnadomJokes;