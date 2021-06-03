import React from "react";

const Team = ({ teamName, teamImg, vote, func, className }) => {
  return (
    <div className={`wrapper ${className}`}>
      <h3>{teamName}</h3>
      <img src={teamImg} alt="logo" />
      <button onClick={() => func(teamName)}>Vote</button>
      <p>Vote count: {vote}</p>
    </div>
  );
};

export default Team;