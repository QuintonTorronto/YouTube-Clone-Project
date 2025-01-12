import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const { data, loading } = useAuth();
  return (
    <div className="flex mt-24">
      <Sidebar className="w-full" />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden scrollbar:!w-1">
        <div className="pr-4 mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })} 
        </div>
      </div>
    </div>
  );
}

export default Home;
