import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import Avatar from "react-avatar";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import ViewCount from "../loader/ViewCount";

function Video({ video }) {
  return (
    <div className="">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col px-2 mb-4 ">
          {/* thumbnail */}
          <div className="relative h-48 w-[100%] rounded-xl hover:rounded-none duration-200 overflow-hidden ">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt="thumbnail"
            />
            {/* timestamp */}
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex space-x-2 items-start pt-4">
            {/* channel logo */}
            <div>
              <div className=" flex overflow-hidden">
                <Avatar
                  src={video?.author?.avatar[0]?.url}
                  size="50"
                  round={true}
                  className=""
                />
              </div>
            </div>
            {/* video title */}
            <div className=" ">
              <span className="text-lg font-semibold line-clamp-2">
                {video?.title}
              </span>
              {/* Channel name */}
              <span className="text-slate-700 flex">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="mx-2 my-1 text-slate-500" />
                )}
              </span>
              {/* Views & Published time */}
              <span className="text-slate-700 flex">
                {video?.stats?.views && (
                  <ViewCount views={video?.stats?.views} />
                )}
                <span className="px-2 text-slate-500">•</span>
                {video?.publishedTimeText}
              </span>
            </div>
          </div>
        </div>  
      </Link>
    </div>
  );
}

export default Video;
