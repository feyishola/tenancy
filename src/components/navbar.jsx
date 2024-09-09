import React from "react";
import icon from "../svgs/icon.svg";
import logoName from "../svgs/logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center border border-b-black">
      <div className="w-full max-w-[1797px] flex justify-between px-[62px] pt-[32px]">
        <div className="gap-2 flex">
          <img src={icon} alt="icon" />
          <img src={logoName} alt="logo name" />
        </div>

        <div className="flex gap-5 justify-between">
          <p>Make a choice</p>
          <p>Become a host</p>
          <p>About Us</p>
        </div>

        <div className="flex gap-5 justify-between">
          <IoMdNotificationsOutline />
          <RiMessage2Line />
          <div className="flex gap-1">
            <CgProfile />
            Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
