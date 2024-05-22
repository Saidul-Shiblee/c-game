"use client";
import React from "react";

const ClickCounter = ({ gameData, currentMascot }) => {
  return (
    <div>
      <h3
        className={`text-center text-yellow-number text-9xl font-bold z-10 transition-transform absolute left-1/2 -translate-x-1/2 top-1/4 number-shadow-text`}
      >
        {gameData?.[currentMascot?.version]?.numberOfClicks}
      </h3>
    </div>
  );
};

export default ClickCounter;
