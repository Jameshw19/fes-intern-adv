import React, { useEffect, useState } from "react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import { BOOKS_URL } from "./API";
import { useRouter } from "next/router";
import Link from "next/link";

function SuggestedBook() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${BOOKS_URL}suggested`);
      const data = await response.json();
      setBookData(data);
      //   console.log(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {bookData.map((book) => (
        <Link href={"/book/" + book.id} key={book.id} bookData={book}>
          <div
            key={book.id}
            className="relative snap-start pt-[32px] pr-[12px] pl-[12px] pb-[12px] no-underline rounded max-w-[200px] w-full"
          >
            {book.subscriptionRequired ? (
              <div className="bg-black w-fit h-[18px] px-2 absolute top-0 right-0 text-white text-xs flex items-center rounded-3xl">
                Premium
              </div>
            ) : (
              <div></div>
            )}
            <div className="mb-2 w-[172px] h-[172px]">
              <img src={book.imageLink} alt="bookImg" />
            </div>
            <div className="text-base font-bold text-black mb-2 ">
              {book.title}
            </div>
            <div className="text-sm text-gray-400 font-light mb-2  ">
              {book.author}
            </div>
            <div className="text-sm text-black mb-2 ">{book.subTitle}</div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 text-sm font-light text-gray-400 ">
                <div className="flex w-4 h-4 ">
                  <AccessTimeRoundedIcon className="w-full h-full " />
                </div>
                <div>03:24</div>
              </div>
              <div className="flex items-center gap-1 text-sm font-light text-gray-400">
                <div className="flex w-4 h-4 ">
                  <StarOutlineOutlinedIcon className="w-full h-full" />
                </div>
                <div>{book.averageRating}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default SuggestedBook;
