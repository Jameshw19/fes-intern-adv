import SearchIcon from "@mui/icons-material/Search";

function ForYouHeader() {
  return (
    <>
      <div className="bg-white border-b h-20 z-[1]   ">
        <div className="relative flex items-center justify-between px-8 max-w-[1070px] m-0 h-full  ">
          <img
            // className="h-[132px] w-[132px] "
            // src="https://cdn.dribbble.com/users/846370/screenshots/6761160/logo_1501.jpg "
            alt="logo"
          />
          <div className="flex items-center gap-6 max-w-[340px] w-full ">
            <div className="flex items-center w-full">
              <div className="flex items-center w-full relative gap-2">
                <input
                  className="h-10 w-full px-4 outline-none bg-gray-100 border-2 border-gray-200 text-black rounded-lg"
                  placeholder=" Search For Books"
                  type="text"
                ></input>
                <div className="flex items-center absolute h-full right-2 justify-end border-l-2 border-solid border-gray-200 pl-2">
                  <SearchIcon className="w-7 h-7 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForYouHeader;
