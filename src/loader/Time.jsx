import React from "react";
import moment from "moment/moment";

function Time({ time }) {
  var videoTime = 0;
  if (time >= 3600) {
    videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  } else {
    videoTime = moment()?.startOf("hour")?.seconds(time)?.format("mm:ss");
  }
  return (
    <div>
      <span className="absolute bottom-2 right-2 bg-black opacity-75 text-white font-medium px-2 py-1 text-xs rounded-md ">
        {videoTime}
      </span>
    </div>
  );
}

export default Time;
