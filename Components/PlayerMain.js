import Replay10Icon from "@mui/icons-material/Replay10";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Forward10Icon from "@mui/icons-material/Forward10";
import { useRef, useState } from "react";
import Head from "next/head";

function PlayerMain({ bookData }) {
  // console.log(bookData);

  return (
    <>
      <div className="relative w-full overflow-y-auto h-screen">
        <div className="p-6 max-w-[800px] m-auto whitespace-pre-line">
          <div className="text-black text-2xl border-b-[1px] mb-8 pb-4 leading-normal">
            <b>{bookData.title}</b>
          </div>
          <div className="leading-[1.4] text-black whitespace-pre-line">
            {bookData.summary}
          </div>
        </div>
        <div className="w-full h-20 mt-auto flex items-center justify-between bg-[#042330] px-10 fixed bottom-0 left-0 z-[9998]">
          <div className="w-[calc(100%/3)] flex gap-3">
            <div className="flex max-w-[48px]">
              <div className="h-12 w-12 min-w-[48px]">
                <img
                  className="w-full h-full"
                  src={bookData.imageLink}
                  alt=""
                />
              </div>
            </div>
            <div className="text-white text-sm flex flex-col gap-1 justify-center">
              <div>{bookData.title}</div>
              <div className="text-[#bac8ce]">{bookData.author}</div>
            </div>
          </div>
          <div className="w-[calc(100%/3)] ">
            <div className="flex items-center justify-center gap-5">
              <button className="rounded-[50%] cursor-pointer flex items-center justify-center">
                <Replay10Icon className="h-7 w-7 stroke-white border-nonev bg-transparent" />
              </button>
              <button className="bg-white w-10 h-10 rounded-[50%] cursor-pointer ">
                <PlayCircleIcon className="text-black w-10 h-10 stroke-white " />
              </button>
              <button className="rounded-[50%] cursor-pointer flex items-center justify-center">
                <Forward10Icon className="h-7 w-7 stroke-white border-nonev bg-transparent" />
              </button>
            </div>
          </div>
          <div className="w-[calc(100%/3)] flex items-center gap-4">
            <div className="text-white text-sm">00:00</div>
            <input
              type="range"
              value={0}
              max={292.872}
              className="rounded-lg h-1 max-w-[300px] w-full cursor-pointer outline-none bg-gradient-to-r from-green-400 
            to-green-700  "
            ></input>
            <div className="text-white text-sm">00:00</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerMain;
