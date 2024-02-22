"use client";

import React, { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import Chips from "../SmallComponents/Chips.comp";
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdFileDownload } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";

const Profile = ({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="create_snippet_wrapper w-[550px] relative max-w-[85vw] flex flex-col gap-5 p-4 md:p-6 bg-def_blue_gray_light rounded-[10px]">
      {/* Close Button */}
      <div
        className="cross_btn absolute top-3 right-0 translate-x-[100%] rounded-r-full bg-def_rose flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer"
        onClick={(e) => setClose(false)}
      >
        <IoClose />
      </div>

      {/* Download Button */}
      <div className="cross_btn absolute bottom-3 right-0 translate-x-[100%] rounded-r-full bg-def_white/20 flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer">
        <MdFileDownload />
      </div>

      {/* Embed Button */}
      <div className="cross_btn absolute bottom-14 right-0 translate-x-[100%] rounded-r-full bg-def_white/20 flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer">
        <ImEmbed2 />
      </div>

      <div className="CoverImage w-full h-[18vh] rounded-[10px] bg-black"></div>
      <div className="profileDetails w-full flex flex-wrap gap-y-3 items-center justify-between">
        <div className="details flex gap-3 items-center">
          <div className="profileImg w-[40px] h-[40px] rounded-full bg-black"></div>
          <div className="nameDetails flex flex-col">
            <div className="name font-bold">Tanmay</div>
            <div className="connections text-white/40 text-[10px] font-FiraMono">
              431 connections
            </div>
          </div>
        </div>
        <div className="designation md:text-xs text-[10px] font-medium text-white/40 font-FiraMono">
          Full Stack Developer
        </div>
      </div>
      <div className="description text-xs font-light font-FiraMono text-white/60 line-clamp-3 md:line-clamp-6  text-center md:text-justify">
        I am Tanmay, a developer, coder, and UI/UX enthusiast. I am on a mission
        to blend creativity and functionality to craft seamless digital
        experiences. When I am not coding, I am grooving to the rhythms of
        music, finding inspiration in the harmony of technology and melodies.
      </div>

      <div className="talksAbout flex flex-col gap-2 ">
        <div className="name font-bold text-sm font-FiraMono">Talks About</div>
        <div className="tags flex flex-wrap gap-x-4 gap-y-2">
          <Chips size="xs" text="#React" />
          <Chips size="xs" text="#Next" />
          <Chips size="xs" text="#Js" />
          <Chips size="xs" text="#C++" />
          <Chips size="xs" text="#Tailwind" />
        </div>
      </div>

      <div className="socialProfiles flex flex-col gap-2 gap-x-4 gap-y-2">
        <div className="name font-bold text-sm font-FiraMono">
          Social Profiles
        </div>
        <div className="Profiles flex flex-wrap gap-4 text-xl text-white/50 ">
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
          <AiFillInstagram />
          <FaGoogle />
          <RiWhatsappFill />
        </div>
      </div>
    </div>
  );
};

export default Profile;
