import React, { useState } from "react";
import "./CodeReviewFeedback.css";

const CodeReviewFeedback = () => {
  const initialState = {
    Readability: { upvotes: 0, downvotes: 0 },
    Performance: { upvotes: 0, downvotes: 0 },
    Security: { upvotes: 0, downvotes: 0 },
    Documentation: { upvotes: 0, downvotes: 0 },
    Testing: { upvotes: 0, downvotes: 0 },
  };

  const [feedback, setFeedBack] = useState(initialState);

  const handleUpvote = (item) => {
    setFeedBack({
      ...feedback,
      [item]: {
        ...feedback[item],
        upvotes: feedback[item].upvotes + 1,
      },
    });
  };

  const handleDownvote = (item) => {
    setFeedBack({
      ...feedback,
      [item]: {
        ...feedback[item],
        downvotes: feedback[item].downvotes + 1,
      },
    });
  };

  return (
    <div className="container">
      <h1 className="title">CodeReviewFeedback</h1>
      <div className="feedback-grid">
        {Object.keys(feedback).map((item) => (
          <div className="card" key={item}>
            <h2 className="heading">{item}</h2>

            <div className="button-container">
              <div className="vote-box">
                <p className="vote-text">{feedback[item].upvotes}</p>

                <button
                  className="upvote-btn"
                  onClick={() => handleUpvote(item)}
                >
                  Upvote
                </button>
              </div>

              <div className="vote-box">
                <p className="vote-text">{feedback[item].downvotes}</p>

                <button
                  className="downvote-btn"
                  onClick={() => handleDownvote(item)}
                >
                  Downvote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeReviewFeedback;
