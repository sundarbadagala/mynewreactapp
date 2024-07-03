import React, { useEffect, useState } from "react";
import ProgressBar from "./progress-bar";
import StarRating from "./star-rating";

function Index() {
  const [perc, setPerc] = useState(20);
  const [rating, setRating] = useState(3);
  const handleSelect = (rating) => {
    setRating(rating);
  };
  return (
    <div>
      {/* <ProgressBar percentage={perc} width="500px" height="10px" /> */}
      <StarRating count={5} value={rating} handleSelect={handleSelect} />
    </div>
  );
}

export default Index;
