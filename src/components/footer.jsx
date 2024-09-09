import React from 'react'
import icon from "../svgs/icon.svg";
import logoName from "../svgs/logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";


const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center" style={{borderTop:"1px solid black"}}>
        <div className="w-full max-w-[1797px] flex justify-between px-[62px] pt-[32px]">
        <div>
            <div className="gap-2 flex">
            <img src={icon} alt="icon" />
            <img src={logoName} alt="logo name" />
            </div>
            <p>© 2021 10ancy. All rights reserved.</p>
        </div>
        <div className="flex gap-2 justify-between">
            <IoMdNotificationsOutline />
            <RiMessage2Line />
            <IoMdNotificationsOutline />
            <RiMessage2Line />
            <IoMdNotificationsOutline />
        </div>

        <div className="flex gap-5 justify-between">
          <div>
            <p>Company</p>
            <ul style={{listStyle:"none",listStyleType:"none"}}>
                <li>About Us</li>
                <li>Locations we cover</li>
                <li>Read our Guidlines</li>
            </ul>
          </div>
          <div>
            <p>Support</p>
            <p>Help Center</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer