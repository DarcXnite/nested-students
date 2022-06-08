import React from "react";
import Score from "./Score";

const Students = ({ name, bio, scores }) => {
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <p>{bio}</p>
      {scores.map((score) => {
        return <Score key={score.date} date={score.date} score={score.score} />;
      })}
    </React.Fragment>
  );
};

export default Students;
