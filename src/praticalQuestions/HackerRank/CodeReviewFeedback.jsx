import React, { useState } from "react";

const CodeReviewFeedback = () => {
  const [aspects, setAspects] = useState([
    { name: "Readability", upvotes: 0, downvotes: 0 },
    { name: "Performance", upvotes: 0, downvotes: 0 },
    { name: "Security", upvotes: 0, downvotes: 0 },
    { name: "Documentation", upvotes: 0, downvotes: 0 },
    { name: "Testing", upvotes: 0, downvotes: 0 },
  ]);
  const handleVote = (index, type) => {
    const updatedAspects = [...aspects];
    if (type === "upvote") {
      updatedAspects[index].upvotes += 1;
    } else {
      updatedAspects[index].downvotes += 1;
    }
    setAspects(updatedAspects);
  };
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-5xl p-6 rounded-lg shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Code Review Feedback</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {aspects.map((aspect, index) => (
            <div key={index} className="bg-gray-900 text-white rounded-lg p-5 flex flex-col justify-between h-full hover:shadow-2xl transition duration-300">
              {/* Title */}
              <h2 className="text-center text-lg font-semibold mb-4">{aspect.name}</h2>

              {/* Votes */}
              <div className="flex items-center justify-between mb-4 text-lg">
                <p className="text-green-400">👍 {aspect.upvotes}</p>
                <p className="text-red-400">👎 {aspect.downvotes}</p>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button
                  onClick={() => handleVote(index, "upvote")}
                  className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg transition duration-300"
                >
                  Upvote
                </button>

                <button
                  onClick={() => handleVote(index, "downvote")}
                  className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg transition duration-300"
                >
                  Downvote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeReviewFeedback;
