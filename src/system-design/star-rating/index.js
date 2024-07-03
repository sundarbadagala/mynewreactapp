import React, { useState } from "react";

function StarRating({ count, value, handleSelect }) {
  const [hoverValue, setHoverValue] = useState(value);
  const handleHover = (count) => {
    setHoverValue(count);
  };
  const handleHoverOut = () => {
    setHoverValue(value);
  };
  return (
    <>
      {[...Array(count).keys()].map((item) => (
        <span
          style={{
            color: item + 1 <= hoverValue ? "gold" : "grey",
            cursor: "pointer",
          }}
          onMouseOver={() => handleHover(item + 1)}
          onMouseOut={() => handleHoverOut()}
          onClick={() => handleSelect(item + 1)}
        >
          &#9733;
        </span>
      ))}
    </>
  );
}

export default StarRating;
