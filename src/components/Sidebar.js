import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { PiDownloadSimple } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { IoTrendingUpOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgLivePhoto } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { MdSportsVolleyball } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center w-[90%]  px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <Link to={"/"} className="flex justify-start items-center ">
          <AiFillHome className="text-[20px]" />
          <span className="ml-[10px] text-[14px] ">Home</span>
        </Link>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <MdOutlineSlowMotionVideo className="text-[20px]" />

        <span className="ml-[10px] text-[14px] ">Shorts</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <MdOutlineSubscriptions className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Subscriptions</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <SiYoutubemusic className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Youtube Music</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[20px] rounded-xl cursor-pointer min-h-[20px]">
        <div className="border border-[#e5e5e5] w-full"></div>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <MdOutlineVideoLibrary className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Library</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <GoHistory className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">History</span>
      </div>
      {/*  */}
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <RiVideoLine className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Your Videos</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <BsClockHistory className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Watch Later</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <PiDownloadSimple className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Downloads</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <BiSolidLike className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Liked Videos</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[20px] rounded-xl cursor-pointer min-h-[20px]">
        <div className="border border-[#e5e5e5] w-full"></div>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <IoTrendingUpOutline className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Trending</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <LiaShoppingBagSolid className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Shopping</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <IoMusicalNoteOutline className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Music</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <PiFilmSlateLight className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Films</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <CgLivePhoto className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Live</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <SiYoutubegaming className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Gaming</span>
      </div>
      <div className="flex flex-row justify-start items-center w-[90%]   px-[10px]  h-[40px] rounded-xl hover:bg-[#ececec] cursor-pointer min-h-[40px]">
        <MdSportsVolleyball className="text-[20px]" />
        <span className="ml-[10px] text-[14px] ">Sport</span>
      </div>
    </>
  );
};

export default Sidebar;
