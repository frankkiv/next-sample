// import Image from "next/image"
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer flex items-center">
          {/* <Image src="https://links.papareact.com/ocw" className="object-contain" layout="fill"/> */}
          <img
            src="https://links.papareact.com/ocw"
            className="object-contain"
          />
        </div>
        <div className="relative lg:hidden w-10 flex-shrink-0 flex items-center">
          <img
            src="https://links.papareact.com/jjm"
            className=" object-contain"
          />
        </div>
        {/* Middle */}
        <div className="relative mt-1 p-3 rounded-md ">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 border-gray focus:ring-black focus:boreder-black rounded-md"
          />
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-10 w-10 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://miro.medium.com/fit/c/1360/1360/0*1gWvcBM5Q1Vk1mxi."
            alt="profile pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;