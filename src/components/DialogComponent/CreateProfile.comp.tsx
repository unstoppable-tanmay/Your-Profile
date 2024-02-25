"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose, IoEye, IoEyeOff, IoGitBranchOutline } from "react-icons/io5";
import Chips from "../SmallComponents/Chips.comp";
import {
  FaGithub,
  FaGoogle,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {
  CheckSocialProfiles,
  findMostMatchingWord,
  isLinkValid,
} from "@/lib/createProfileHelper";
import Image from "next/image";
import Dialog from "./Dialog";
import MemorizedSelectProfile from "./SelectProfile.comp";
import AddProject, { projectType } from "./AddProject.comp";
import useUserStore from "@/store/user";
import { ProfileImageType, getImage } from "@/lib/profileIconArray";
import validator from "validator";

const CreateProfile = ({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [designation, setDesignation] = useState("");
  const [about, setAbout] = useState("");

  const [profileImage, setProfileImage] =
    useState<ProfileImageType>("deadpool");
  const [coverImage, setCoverImage] = useState<File>();

  const [talksAbout, setTalksAbout] = useState<string[]>([]);
  const [talksAboutSearch, setTalksAboutSearch] = useState<string>();

  const [socialProfiles, setSocialProfiles] = useState<string[]>([]);
  const [socialProfilesSearch, setSocialProfilesSearch] = useState<string>();

  const [projects, setProjects] = useState<projectType[]>([]);

  const [openProfileSelect, setOpenProfileSelect] = useState(false);
  const [openProjectDialog, setOpenProjectDialog] = useState(false);

  const { user, setIsUser, setUser, isUser, loading, setLoading } =
    useUserStore();

  const [passwordShow, setPasswordShow] = useState(false);
  const [availableUserName, setAvailableUserName] = useState(true);

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const CreateProfile = async () => {
    setLoading(true);

    if (!email) return alert("Enter Email");
    if (!userName) return alert("Enter User Name");
    if (!password) return alert("Enter Password");
    if (!displayName) return alert("Enter Display Name");
    if (!designation) return alert("Enter Designation");
    if (!about) return alert("Enter About");
    if (!validator.isLength(about, { max: 200 }))
      return alert("About Length Should be low");
    if (!profileImage) return alert("Enter Profile Image");
    if (!socialProfiles) return alert("Enter Social Profile");

    if (!projects) alert("You May Add Projects");

    try {
      const imgData = coverImage ? await toBase64(coverImage) : "";

      const loggedInUserResponse = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username: userName,
          name: displayName,
          designation,
          profileImage,
          coverImage: imgData,
          about,
          talksAbout: talksAbout ? talksAbout : [],
          socialProfiles: socialProfiles ? socialProfiles : [],
          projects: projects
            ? projects.map((project) => JSON.stringify(project))
            : [],
        }),
        credentials: "include",
      });

      const loggedInUser = await loggedInUserResponse.json();

      setUser(loggedInUser);
      setIsUser(true);
      setClose(false);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    const delay = 500;
    let timeoutId: any;

    const checkUsernameAvailability = async () => {
      try {
        const response = await fetch(`/api/check/${userName}`, {
          credentials: "include",
        });
        const data = await response.json();
        setAvailableUserName(data);
      } catch (error) {
        console.error("Error checking username availability:", error);
      }
    };

    if (userName!.trim() !== "") {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkUsernameAvailability, delay);
    } else {
      setAvailableUserName(false);
    }

    return () => clearTimeout(timeoutId);
  }, [userName]);

  return (
    <div className="create_snippet_wrapper w-[550px] relative max-w-[85vw] py-4 pl-4 pr-2 md:py-5 md:pl-5 md:pr-2 bg-def_blue_gray_light rounded-[10px] shrink-0">

      {/* Close Button */}
      <div
        className="cross_btn absolute top-3 right-0 translate-x-[85%] hover:translate-x-[100%] duration-200 rounded-r-full bg-def_rose flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer -z-10"
        onClick={(e) => setClose(false)}
      >
        <IoClose />
      </div>

      <div className="Content max-h-[90vh] overflow-y-scroll flex flex-col gap-2.5 w-full h-full overflow-x-hidden scrollbar-dark pr-2">
        {/* Cover Images */}
        <div className="images flex w-full gap-4">
          {/* Cover Image */}
          <label
            htmlFor="coverImage"
            className="CoverImage flex-1 h-[14vh] min-h-[80px] rounded-[10px] bg-def_blue_gray_dark relative overflow-hidden"
          >
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="text text-sm font-FiraMono">Cover Image</div>
            </div>
            <input
              type="file"
              name=""
              id="coverImage"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  if (e.target.files[0].size < 524288)
                    setCoverImage(e.target.files[0]);
                  else alert("file size is larger than 512kb");
                }
              }}
            />
            {coverImage && (
              <Image
                fill
                src={URL.createObjectURL(coverImage)}
                alt=""
                className="object-cover"
              />
            )}
          </label>
        </div>

        {/* Display Name & Profile Image & Designation */}
        <div className="profileDetails w-full flex flex-wrap gap-3 text-xs items-center justify-between">
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 font-FiraMono outline-none"
          />
          {/* Profile Image */}
          <label
            htmlFor="profileImage"
            className="profileImg h-9 aspect-square rounded-[10px] bg-transparent relative cursor-pointer"
            onClick={(e) => setOpenProfileSelect(true)}
          >
            <Dialog
              isOpen={openProfileSelect}
              setOpen={setOpenProfileSelect}
              key={"SelectProfile"}
              closeOnBlurArea={false}
            >
              <MemorizedSelectProfile
                setClose={setOpenProfileSelect}
                setProfileImage={setProfileImage}
              />
            </Dialog>
            <Image alt="" fill src={getImage(profileImage)} />
          </label>
          <input
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 font-FiraMono outline-none text-def_white/70"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 font-FiraMono outline-none text-xs duration-200 ${
            validator.isEmail(email)
              ? "border-0"
              : email
              ? "border-[1px] border-def_rose"
              : ""
          }`}
        />

        {/* User Name & Password */}
        <div className="profileDetails w-full flex flex-wrap gap-3 text-xs items-center justify-between">
          <div
            className={`flex items-center justify-center pr-3 flex-1 bg-def_blue_gray_dark rounded-[5px] relative ${
              availableUserName
                ? "border-0"
                : userName
                ? "border-[1px] border-def_rose"
                : ""
            }`}
          >
            {!availableUserName && userName && (
              <div className="error absolute text-[11px] text-def_rose font-light bg-def_blue_gray_light translate-y-[200%] leading-none">
                username not available
              </div>
            )}
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => {
                /^[a-z-]*$/.test(e.target.value) && setUserName(e.target.value);
              }}
              className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 font-FiraMono outline-none"
            />
          </div>
          <div
            className={`flex items-center justify-between pr-3 flex-1 bg-def_blue_gray_dark rounded-[5px]  ${
              validator.isStrongPassword(password)
                ? "border-0"
                : password
                ? "border-[1px] border-def_rose"
                : ""
            }`}
          >
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`rounded-[5px] bg-def_blue_gray_dark px-4 py-2 font-FiraMono outline-none text-def_white/70 relative`}
            ></input>
            {passwordShow ? (
              <IoEye
                className="text-sm select-none"
                onClick={(e) => setPasswordShow(!passwordShow)}
              />
            ) : (
              <IoEyeOff
                className="text-sm select-none"
                onClick={(e) => setPasswordShow(!passwordShow)}
              />
            )}
          </div>
        </div>

        {/* About */}
        <textarea
          name=""
          id=""
          rows={4}
          placeholder="Hey What's Your Status ?"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="text-xs bg-def_blue_gray_dark rounded-[7px] outline-none resize-none p-2 text-def_white/40 font-FiraMono min-h-[60px] h-[70px] px-4"
        ></textarea>

        {/* Talks About */}
        <div className="talksAbout flex flex-col gap-2 ">
          <div className="name font-bold text-xs font-FiraMono text-def_white/60">
            Talks About
          </div>
          <label
            htmlFor="talksAbout"
            className="addTalksAbout w-full h-[60px] rounded-[7px] bg-def_blue_gray_dark resize-none p-2 px-4 outline-none text-xs relative flex gap-2 flex-wrap overflow-y-scroll cursor-text no-scrollbar"
          >
            {talksAbout.map((ele, ind) => {
              return <Chips size="sm" bg="bg-white" text={ele} key={ind} />;
            })}
            <div className="inputWrapper relative mt-0.5">
              <textarea
                id="talksAbout"
                rows={1}
                placeholder="click enter to add"
                className="bg-transparent outline-none self-start font-FiraMono capitalize resize-none min-w-[200px] no-scrollbar"
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
              ></textarea>
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
          <div className="name font-bold text-xs font-FiraMono text-def_white/60">
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
                else return <FaLink />;
              })}
            </div>
            <textarea
              name=""
              rows={1}
              id="socialProfiles"
              placeholder="Enter to add"
              value={socialProfilesSearch}
              onChange={(e) => setSocialProfilesSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  if (validator.isURL(socialProfilesSearch!)) {
                    setSocialProfiles((e) => [...e, socialProfilesSearch!]);
                    setSocialProfilesSearch("");
                  } else {
                    e.preventDefault();
                    alert("not a valid link");
                  }
                } else if (e.key == "Backspace" && socialProfilesSearch == "") {
                  setSocialProfiles((e) => e.slice(0, e.length - 1));
                }
              }}
              className="bg-transparent outline-none self-start min-w-[200px] font-FiraMono resize-none  no-scrollbar"
            />
          </label>
        </div>

        {/* Add Project */}
        <div
          className="extendButton w-full flex items-center justify-center text-xs font-FiraMono font-normal text-white/50 cursor-pointer hover:text-white duration-200"
          onClick={(e) => setOpenProjectDialog(true)}
        >
          <Dialog isOpen={openProjectDialog} setOpen={setOpenProjectDialog}>
            <AddProject
              projects={projects}
              setProjects={setProjects}
              setClose={setOpenProjectDialog}
            />
          </Dialog>
          Add Projects <IoGitBranchOutline className="text-sm" />
        </div>

        {/* Submit */}
        <button
          onClick={CreateProfile}
          className="px-2 font-FiraMono py-1 rounded-[5px] relative bg-def_blue_gray_dark text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 group"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent group-hover:w-full duration-300" />
          <span className="relative z-20">Create</span>
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
