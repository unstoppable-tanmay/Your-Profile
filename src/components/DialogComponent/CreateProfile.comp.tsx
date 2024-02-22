"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";
import Chips from "../SmallComponents/Chips.comp";
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  CheckSocialProfiles,
  findMostMatchingWord,
  isLinkValid,
} from "@/lib/createProfileHelper";
import Image from "next/image";

const CreateProfile = ({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
}) => {
  const [userName, setUserName] = useState("");
  const [designation, setDesignation] = useState("");
  const [about, setAbout] = useState("");

  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const [talksAbout, setTalksAbout] = useState<string[]>([]);
  const [talksAboutSearch, setTalksAboutSearch] = useState<string>();

  const [socialProfiles, setSocialProfiles] = useState<string[]>([]);
  const [socialProfilesSearch, setSocialProfilesSearch] = useState<string>();

  return (
    <div className="create_snippet_wrapper w-[550px] relative max-w-[85vw] p-4 md:p-5 bg-def_blue_gray_light rounded-[10px] shrink-0">
      {/* Close Button */}
      <div
        className="cross_btn absolute top-3 right-0 translate-x-[100%] rounded-r-full bg-def_rose flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer"
        onClick={(e) => setClose(false)}
      >
        <IoClose />
      </div>

      <div className="Content max-h-[80vh] overflow-y-scroll flex flex-col gap-5 w-full h-full overflow-x-hidden no-scrollbar">
        {/* Images */}
        <div className="images flex w-full gap-4">
          <input
            type="file"
            name=""
            id="coverImage"
            className="hidden"
            onChange={(e) =>
              e.target.files &&
              e.target.files[0] &&
              setCoverImage(URL.createObjectURL(e.target.files[0]))
            }
          />
          <label
            htmlFor="coverImage"
            className="CoverImage flex-1 h-[15vh] rounded-[10px] bg-def_blue_gray_dark relative overflow-hidden"
          >
            {coverImage && <Image fill src={coverImage} alt="" className="" />}
          </label>
        </div>

        {/* Name & designation */}
        <div className="profileDetails w-full flex flex-wrap gap-3 items-center justify-between">
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 text-sm font-FiraMono outline-none"
          />
          <input
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 text-sm font-FiraMono outline-none text-def_white/70"
          />
        </div>

        {/* About */}
        <textarea
          name=""
          id=""
          rows={4}
          placeholder="Hey What's Your Status ?"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="text-xs bg-def_blue_gray_dark rounded-[7px] outline-none resize-none p-2 text-def_white/40 font-FiraMono min-h-[50px]"
        ></textarea>

        {/* Talks About */}
        <div className="talksAbout flex flex-col gap-2 ">
          <div className="name font-bold text-sm font-FiraMono text-def_white/60">
            Talks About
          </div>
          <label
            htmlFor="talksAbout"
            className="addTalksAbout w-full h-[60px] rounded-[7px] bg-def_blue_gray_dark resize-none p-2 outline-none text-xs relative flex gap-2 flex-wrap overflow-y-scroll cursor-text"
          >
            {talksAbout.map((ele, ind) => {
              return <Chips size="sm" bg="bg-white" text={ele} key={ind} />;
            })}
            <div className="inputWrapper relative">
              <input
                id="talksAbout"
                placeholder="click enter to add"
                className="bg-transparent outline-none flex-1 self-start font-FiraMono capitalize w-full"
                value={talksAboutSearch}
                onChange={(e) => {
                  setTalksAboutSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    setTalksAbout((e) => [
                      ...e,
                      "#" +
                        talksAboutSearch?.slice(0, 1).toUpperCase() +
                        talksAboutSearch?.slice(1),
                    ]);
                    setTalksAboutSearch("");
                  } else if (e.key == "Backspace" && talksAboutSearch == "")
                    setTalksAbout((e) => e.slice(0, e.length - 1));
                  else if (e.key == "Tab" && talksAboutSearch) {
                    e.preventDefault();
                    setTalksAbout((e) => [
                      ...e,
                      "#" + findMostMatchingWord(talksAboutSearch),
                    ]);
                    setTalksAboutSearch("");
                  }
                }}
              ></input>
              <div className="shadowedWord absolute top-0 left-0 font-FiraMono text-white/30 max-w-full">
                {talksAboutSearch}
                {talksAboutSearch &&
                  findMostMatchingWord(talksAboutSearch || "")
                    .toString()
                    .split("")
                    .splice(talksAboutSearch.length)
                    .join("")}
              </div>
            </div>
            <div className="flex flex-col absolute"></div>
          </label>
        </div>

        {/* Social Profiles */}
        <div className="socialProfiles flex flex-col gap-2 gap-x-4 gap-y-2">
          <div className="name font-bold text-sm font-FiraMono text-def_white/60">
            Social Profiles
          </div>
          <label
            htmlFor="socialProfiles"
            className=" w-full rounded-[7px] bg-def_blue_gray_dark resize-none p-2 outline-none text-xs relative flex gap-2 flex-wrap overflow-y-scroll cursor-text"
          >
            <div className="Profiles flex flex-wrap gap-2 text-base text-white/50 ">
              {socialProfiles.map((profile, ind) => {
                let icon = CheckSocialProfiles(profile);
                if (icon == "github") return <FaGithub />;
                else if (icon == "linkedin") return <FaLinkedin />;
                else if (icon == "twitter") return <FaTwitter />;
                else if (icon == "instagram") return <AiFillInstagram />;
                else if (icon == "google") return <FaGoogle />;
              })}
            </div>
            <input
              type="text"
              name=""
              id="socialProfiles"
              placeholder="Enter to add"
              value={socialProfilesSearch}
              onChange={(e) => setSocialProfilesSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  if (
                    isLinkValid(socialProfilesSearch!) &&
                    CheckSocialProfiles(socialProfilesSearch!)
                  ) {
                    setSocialProfiles((e) => [...e, socialProfilesSearch!]);
                    setSocialProfilesSearch("");
                  } else alert("not a valid link");
                } else if (e.key == "Backspace" && socialProfilesSearch == "") {
                  setSocialProfiles((e) => e.slice(0, e.length - 1));
                }
              }}
              className="bg-transparent outline-none flex-1 self-start w-full font-FiraMono"
            />
          </label>
        </div>

        {/* Submit */}
        <button className="Submit w-full py-1 rounded-[5px] font-FiraMono bg-def_dark_blue hover:scale-95 active:scale-100 duration-300">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
