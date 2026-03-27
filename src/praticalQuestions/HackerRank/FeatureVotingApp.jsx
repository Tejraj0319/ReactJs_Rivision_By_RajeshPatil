import React, { useState } from "react";

const FeatureVotingApp = () => {
  const [features, setFeatures] = useState([
    { name: "Dark Mode", upvotes: 0, downvotes: 0 },
    { name: "Multi-language Support", upvotes: 0, downvotes: 0 },
    { name: "Offline Mode", upvotes: 0, downvotes: 0 },
    { name: "Notifications", upvotes: 0, downvotes: 0 },
  ]);

  const [newFeature, setNewFeature] = useState("");

  const handleVote = (index, type) => {
    const updatedVotes = [...features];
    if (type === "upvote") {
      updatedVotes[index].upvotes += 1;
    } else {
      updatedVotes[index].downvotes += 1;
    }
    setFeatures(updatedVotes);
  };

  //   ADD NEW FEATURE
  const addFeature = () => {
    if (newFeature.trim() === "") return;
    setFeatures([...features, { name: newFeature, upvotes: 0, downvotes: 0 }]);
  };

  //   SORT
  const handleSort = () => {
    const sorted = [...features].sort((a, b) => b.upvotes - a.upvotes);
    setFeatures(sorted);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newFeature}
          onChange={(e) => {
            setNewFeature(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addFeature();
          }}
        >
          Add
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            handleSort();
          }}
        >
          Sort
        </button>
      </div>

      <div>
        {features.map((features, idx) => (
          <div key={idx}>
            <h2>{features.name}</h2>
            <div>
              <span>👍{features.upvotes}</span>
              <span>👎{features.downvotes}</span>
            </div>
            <div>
              <button
                onClick={() => {
                  handleVote(idx, "upvote");
                }}
              >
                upvote
              </button>
              <button
                onClick={() => {
                  handleVote(idx, "downvote");
                }}
              >
                downvote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureVotingApp;
