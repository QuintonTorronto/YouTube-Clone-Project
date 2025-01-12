import React from "react";

function ViewCount({ views }) {
  let viewNumber = 0;
  function showViews(views) {
    if (views >= 1000000) {
      viewNumber = Math.floor(views / 1000000);
      return <span>{viewNumber}M views</span>;
    } else if (views >= 1000) {
      viewNumber = Math.floor(views / 1000);
      return <span>{viewNumber}k views</span>;
    } else {
      viewNumber = views;
      return <span>{viewNumber} views</span>;
    }
  }
  return <div>{showViews(views)}</div>;
}

export default ViewCount;
