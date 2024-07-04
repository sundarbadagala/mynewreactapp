import React, { useEffect, useState } from "react";
import ProgressBar from "./progress-bar";
import StarRating from "./star-rating";
import CountDown from "./count-down";
import Pagination from "./pagination2";

function Index() {
  const [perc, setPerc] = useState(20);
  const [rating, setRating] = useState(3);
  const [pagination, setPagination] = useState(1);
  const handleSelect = (rating) => {
    setRating(rating);
  };
  const handlePagination = (value) => {
    setPagination(value);
  };
  return (
    <div>
      {/* <ProgressBar percentage={perc} width="500px" height="10px" /> */}
      {/* <StarRating count={5} value={rating} handleSelect={handleSelect} /> */}
      {/* <CountDown/> */}
      <Pagination
        totalLength={10}
        value={pagination}
        handleChange={handlePagination}
      />
    </div>
  );
}

export default Index;
