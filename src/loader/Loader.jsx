import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div>
      <span className="flex items-center justify-center h-screen text-3xl">
        <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin text-black" />
      </span>
    </div>
  );
}

export default Loading;
