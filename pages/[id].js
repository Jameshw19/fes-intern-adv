import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ForYouHeader from "@/Components/ForYouHeader";
import ForYouSideBar from "@/Components/ForYouSideBar";
import BookMain from "@/Components/BookMain";
import { BOOKS_URL } from "@/Components/API";

function BookPage({ bookData }) {
  const router = useRouter();
  const { id } = router.query;
  const [bookid, setBookId] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );
      const data = await res.json();
      setBookId(data);
    }
  });

  return (
    <>
      <div className="relative flex flex-col ml-[200px] transition-all ">
        <ForYouHeader />
        <ForYouSideBar />
        <BookMain bookData={bookData} bookid={id} />
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const id = params;
  // console.log(id);

  const response = await fetch(`${BOOKS_URL}recommended`);
  const bookData = await response.json();

  return {
    props: { bookData },
  };
}

export default BookPage;
