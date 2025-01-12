import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidAPI";
import ReactPlayer from "react-player/youtube";
import { AiOutlineLike } from "react-icons/ai";
import ViewCount from "../loader/ViewCount";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import SuggestedVideo from "./SuggestedVideo";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
    });
  };

  return (
    <div className="">
      <div className="flex justify-center flex-row h-[calc(100%-56px)] mt-20 ml-10  ">
        <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6 ">
            {/*Video Player  */}
            <div className="h-[200px] md:h-[630px]  ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                height="100%"
                width="100%"
                controls={true}
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>
            {/* Video Details */}
            <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {video?.title}
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-4">
              <div className="flex ">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={video?.author?.avatar[0]?.url}
                    />
                  </div>
                </div>
                <div className="flex space-x-5">
                  <div className="flex flex-col ml-3">
                    <div className="text-md font-semibold flex items-center">
                      {video?.author?.title}
                      {video?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                      )}
                    </div>
                    <div className=" font-medium text-gray-500 text-sm">
                      {video?.author?.stats?.subscribersText}
                    </div>
                  </div>
                  <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                    Subscribe
                  </span>
                </div>
              </div>
              <div className="flex mt-4 md:mt-0">
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-gray-200">
                  <AiOutlineLike className="text-xl font-medium mr-2" />
                  {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
                </div>
                <div className="flex items-center font-medium justify-center h-11 px-6 rounded-3xl bg-gray-200 ml-4">
                  {<ViewCount views={video?.stats?.views} />}
                </div>
              </div>
            </div>
            {/* Video Description */}
            <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm text-justify w-[100%]">
              {video?.description}
            </div>
            <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
              {video?.stats?.comments} <p>Comments</p>
            </div>
          </div>
          <div
            className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px] z-1 scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-gray-300 
            scrollbar-thumb:!rounded scrollbar-thumb:!bg-gray-400 scrollbar-track:!rounded"
          >
            {relatedVideo?.contents?.map((item, index) => {
              if (item?.type !== "video") return false;
              return <SuggestedVideo key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
