import React, { useEffect, useState } from "react";

function Pagination({ totalLength, value, handleChange }) {
  const [pageValue, setPageValue] = useState(value);
  const handleFirst = () => {
    setPageValue(1);
  };
  const handlePrevious = () => {
    setPageValue((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleNext = () => {
    setPageValue((prev) => (prev < totalLength ? prev + 1 : prev));
  };
  const handleLast = () => {
    setPageValue(totalLength);
  };
  const handleInputUpdate = (value) => {
    if (value >= 1 && value <= totalLength) {
      handleChange(value);
    }
  };
  useEffect(() => {
    handleChange(pageValue);
  }, [pageValue]);

  return (
    <>
      <button onClick={handleFirst}>{"<<"}</button>
      <button onClick={handlePrevious}>{"<"}</button>
      <input
        type="number"
        value={value}
        style={{ width: "40px" }}
        onChange={(e) => handleInputUpdate(e.target.value)}
      />
      <button onClick={handleNext}>{">"}</button>
      <button onClick={handleLast}>{">>"}</button>
    </>
  );
}

export default Pagination;
