import React from "react";

const Score = ({ date, score }) => {
  return (
    <React.Fragment>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
    </React.Fragment>
  );
};

export default Score;
