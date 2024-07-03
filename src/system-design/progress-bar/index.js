import React from "react";

function ProgressBar({ percentage, width, height }) {
  console.log("a.a.a.per", percentage);
  return (
    <div
      style={{
        width: width,
        border: "1px solid red",
        height: height,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: "red",
          height: `calc(${height} - 2px)`,
        }}
      />
    </div>
  );
}

export default ProgressBar;
