const Page = () => {
  return (
    <div className="overflow-x-hidden container bg-[#e8e8e8]">
      <div className="bg-white p-4 rounded cursor-pointer grid grid-cols-grid-auto gap-x-5 md:gap-x-4 xl:gap-x-4 [&:hover_img]:scale-110 transition-transform ease-in">
        <div className="row-start-1 row-end-5 h-48 w-48 xl:h-40 xl:w-40 md:w-[72px] md:h-[72px] overflow-hidden rounded md:row-start-2 md:col-start-1 md:col-end-2">
          <img
            src="./images/cat.jpeg"
            alt=""
            className=" h-48 xl:h-40 md:h-full rounded object-cover object-center transition-transform ease-in"
          />
        </div>
        <div className="flex justify-between items-center pb-2 col-start-2 row-start-1 md:row-start-1 md:col-start-1 md:col-end-3 ">
          <div className="flex justify-between items-center border-[1px] border-border rounded-[50vh] h-9">
            <button className="mx-1 rounded-50 hover:bg-[#e6f8fc] transition h-7 w-7 flex justify-center items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                  fill="#075ea4"
                />
              </svg>
            </button>
            <span className=" text-[#e00034] text-16-24 font-bold"> 197° </span>
            <button className="mx-1 rounded-50 hover:bg-[#fae8e6] transition h-7 w-7 flex justify-center items-center">
              <svg
                fill="#e00034"
                width="16"
                height="16"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" mr-1"
            >
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#8f949b"
                strokeWidth="2"
              />
              <path
                d="M12 7L12 11.5L12 11.5196C12 11.8197 12.15 12.1 12.3998 12.2665V12.2665L15 14"
                stroke="#8f949b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#8f949b] text-[14px] leading-5">
              Posted 5th Jun
            </span>
          </div>
        </div>
        <div className="col-start-2 row-start-2 relative ">
          <a
            href=""
            className="text-[18px] leading-[26px] md:text-16-24 font-bold hover:text-[#ff7900] transition line-clamp-2 after:content-[''] after:absolute after:right-0 after:top-0 after:w-12 after:h-full after:bg-gradient"
          >
            Up to 55% Off The North Face Kids/Adults Clothing (Selected Lines) @
            Taunton Leisure - FREE DEL on all orders over £50
          </a>
          <div className="flex items-center">
            <span className="text-20-28 font-bold text-[#ff7900] ">£78</span>
            <div className="!w-[1px] h-[23px] bg-[#d1d5db] mx-2"></div>
            <a href="">
              <span className=" text-14-20 font-bold text-[#ff7900] hover:underline">
                Taunton Leisure
              </span>{" "}
              <span className=" text-14-20 text-[#8f949b]"> Deals</span>
            </a>
          </div>
        </div>

        <div className="py-1 text-14-20 text-[#35373b] col-start-2 row-start-3 md:col-start-1 md:col-end-3">
          Upto 55% off TNF Kids Clothing (Selected Lines) Some Highlights of
          Deals Spotted (More Offers @ Taunton Leisure Site) Free C&C From
          Taunton Leisure Store Delivery is FREE on all orders …
        </div>
        <div className="relative flex items-center justify-between col-start-2 row-start-4 md:col-start-1 md:col-end-3">
          <div className="flex items-center justify-end w-full md:flex-col md:justify-start">
            <div className="absolute left-0 top-0 flex items-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className=" mr-1"
              >
                <path
                  fill="#000000"
                  d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
                />
              </svg>
              <span>coco</span>
            </div>
            <span className="flex items-center md:self-end">
              <button className="flex items-center justify-center border-[1px] border-border rounded-[50vh] h-9 px-4 lg:px-0 lg:w-9 hover:bg-[#f6f7f9] transition active:bg-[#e9eaed]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z"
                    stroke="#5a5d62
                    "
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <a
                href=""
                className="flex items-center border-[1px] border-border rounded-[50vh] h-9 px-4 ml-2 hover:bg-[#f6f7f9] transition active:bg-[#e9eaed]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 17 17"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M17 1.5v7.969c0 0.827-0.673 1.5-1.5 1.5h-0.508v-1h0.508c0.276 0 0.5-0.225 0.5-0.5v-7.969c0-0.275-0.224-0.5-0.5-0.5h-14c-0.276 0-0.5 0.225-0.5 0.5v7.969c0 0.275 0.224 0.5 0.5 0.5h1.5v2.892l1.779-1.569 0.661 0.75-3.44 3.035v-4.108h-0.5c-0.827 0-1.5-0.673-1.5-1.5v-7.969c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5zM14.020 9.54v3.043c0 0.827-0.673 1.5-1.5 1.5h-0.5v3.064l-3.667-3.064h-0.853c-0.827 0-1.5-0.673-1.5-1.5v-3.043c0-0.827 0.673-1.5 1.5-1.5h5.020c0.827 0 1.5 0.673 1.5 1.5zM13.020 9.54c0-0.275-0.224-0.5-0.5-0.5h-5.020c-0.276 0-0.5 0.225-0.5 0.5v3.043c0 0.275 0.224 0.5 0.5 0.5h1.217l2.303 1.926v-1.926h1.5c0.276 0 0.5-0.225 0.5-0.5v-3.043z"
                    fill="#5a5d62
                    "
                  />
                </svg>
                <span className="ml-1 text-[#5a5d62]">1</span>
              </a>
            </span>

            <span className="ml-2 md:w-full md:ml-0 md:mt-2 md:flex md:justify-center">
              <button className="bg-[#ff7900] hover:bg-[#ff9300] hover:shadow-[0 0 0 2 #ff9300] rounded-[50vh] px-4 h-9 transition flex items-center text-white md:w-full justify-center">
                <span className="text-[14px] leading-[14px] font-bold">
                  Get deal*
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 17"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className=" ml-2"
                >
                  <path
                    d="M17 1.5v7.969c0 0.827-0.673 1.5-1.5 1.5h-0.508v-1h0.508c0.276 0 0.5-0.225 0.5-0.5v-7.969c0-0.275-0.224-0.5-0.5-0.5h-14c-0.276 0-0.5 0.225-0.5 0.5v7.969c0 0.275 0.224 0.5 0.5 0.5h1.5v2.892l1.779-1.569 0.661 0.75-3.44 3.035v-4.108h-0.5c-0.827 0-1.5-0.673-1.5-1.5v-7.969c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5zM14.020 9.54v3.043c0 0.827-0.673 1.5-1.5 1.5h-0.5v3.064l-3.667-3.064h-0.853c-0.827 0-1.5-0.673-1.5-1.5v-3.043c0-0.827 0.673-1.5 1.5-1.5h5.020c0.827 0 1.5 0.673 1.5 1.5zM13.020 9.54c0-0.275-0.224-0.5-0.5-0.5h-5.020c-0.276 0-0.5 0.225-0.5 0.5v3.043c0 0.275 0.224 0.5 0.5 0.5h1.217l2.303 1.926v-1.926h1.5c0.276 0 0.5-0.225 0.5-0.5v-3.043z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
