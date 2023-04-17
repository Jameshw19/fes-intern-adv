import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MicIcon from "@mui/icons-material/Mic";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function BookMain({ bookData }) {
  console.log(bookData);

  return (
    <>
      <div className="max-w-[1070px] w-full mx-auto px-5">
        <div className="py-10 w-full">
          {bookData.map((book) => (
            <div key={book.id} className="flex gap-4">
              <div className="w-full">
                <div className="text-black mb-4 font-semibold text-3xl ">
                  {book.title}
                </div>
                <div className="text-black mb-4 font-semibold "></div>
                <div className="text-xl text-black mb-4 font-light">
                  sub title
                </div>
                <div className="border-y-[1px] py-4 mb-5 border-y-gray-400">
                  <div className="flex flex-wrap max-w-[400px] gap-y-3">
                    <div className="flex items-center w-1/2 text-black font-medium text-sm">
                      <div className="flex  h-7 w-7 mr-1 text-black font-medium text-sm">
                        <StarBorderIcon className="w-full h-full " />
                      </div>
                      <div className=" text-black font-medium  text-sm">
                        averageRating
                      </div>
                      <div className=" text-black font-medium  text-sm">
                        &nbsp; (rating)
                      </div>
                    </div>
                    <div className="flex items-center w-1/2 text-black font-medium text-sm">
                      <div className="flex  h-7 w-7 mr-1 text-black font-medium text-sm">
                        <AccessTimeIcon className="w-full h-full " />
                      </div>
                      <div className=" text-black font-medium  text-sm">
                        &nbsp; 03:24
                      </div>
                    </div>
                    <div className="flex items-center w-1/2 text-black font-medium text-sm">
                      <div className="flex  h-7 w-7 mr-1 text-black font-medium text-sm">
                        <MicIcon className="w-full h-full " />
                      </div>
                      <div className=" text-black font-medium  text-sm">
                        &nbsp; Audio & Text
                      </div>
                    </div>
                    <div className="flex items-center w-1/2 text-black font-medium text-sm">
                      <div className="flex  h-7 w-7 mr-1 text-black font-medium text-sm">
                        <LightbulbIcon className="w-full h-full " />
                      </div>
                      <div className=" text-black font-medium  text-sm">
                        &nbsp; 8 Key ideas
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-5">
                  <button
                    className="flex items-center justify-center w-[144px] h-[48px] bg-purple-800 text-white 
text-base rounded cursor-pointer gap-2 hover:opacity-80"
                  >
                    <div className="flex">
                      <MenuBookIcon className="h-6 w-6" />
                    </div>
                    <div>Read</div>
                  </button>
                  <button
                    className="flex items-center justify-center w-[144px] h-[48px] bg-purple-800 text-white 
text-base rounded cursor-pointer gap-2 hover:opacity-80"
                  >
                    <div className="flex">
                      <MicIcon className="h-6 w-6" />
                    </div>
                    <div>Listen</div>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-blue-500 font-medium cursor-pointer mb-10 text-lg hover:opacity-75">
                  <div className="flex w-7 h-7 ">
                    <BookmarkIcon className="w-full h-full" />
                  </div>
                  <div>Add title to my library</div>
                </div>
                <div className="text-lg text-black mb-4 font-semibold ">
                  Whats it about?
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-gray-300 px-4 h-[48px] flex items-center cursor-not-allowed text-black font-medium rounded hover:opacity-80">
                    Communication Skills
                  </div>
                  <div className="bg-gray-300 px-4 h-[48px] flex items-center cursor-not-allowed text-black font-medium rounded hover:opacity-80">
                    Technology & the Future
                  </div>
                </div>
                <div className="text-black mb-4 leading-normal">
                  "How to Win Friends and Influence People" is a self-help book
                  written by Dale Carnegie and first published in 1936. The book
                  provides practical advice and techniques for improving one's
                  communication and social skills.
                </div>
                <h2 className="text-lg text-black mb-4 font-semibold ">
                  About the author
                </h2>
                <div className="text-black leading-normal">
                  "How to Win Friends and Influence People" is a self-help book
                  written by Dale Carnegie and first published in 1936. The book
                  provides practical advice and techniques for improving one's
                  communication and social skills.
                </div>
              </div>
              <div>
                <div className="h-[300px] w-[300px] min-w-[300px]">
                  <img className="w-full h-full block" src="" alt="bookImg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookMain;
