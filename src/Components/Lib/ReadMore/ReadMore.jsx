import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ children, sliceValue }) => {
  const [showMore, setShowMore] = useState(false);
  const text = children;
  return (
    <div>
      <div className="read-more">
        {showMore ? text : `${text.slice(0, sliceValue)}`}
        <div>
          <button
            className="non-cta-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "- Show less" : "+ Read more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
