"use client";

import React, {
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { IoClose, IoGitBranchOutline } from "react-icons/io5";
import Chips from "../SmallComponents/Chips.comp";
import {
  FaGithub,
  FaGoogle,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdFileDownload } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { BackgroundBeams } from "../ui/backgroundBeams";
import { Meteors } from "../ui/meteors";
import useUserStore from "@/store/user";
import FallbackImage from "../UtilityComponent/FallbackImage.comp";
import { ProfileImageType, getImage } from "@/lib/profileIconArray";
import { CheckSocialProfiles } from "@/lib/createProfileHelper";
import Dialog from "./Dialog";
import AddProject, { projectType } from "./AddProject.comp";
import html2canvas from "html2canvas";

const Profile = ({
  setClose,
  noClose = false,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
  noClose?: boolean;
}) => {
  const componentRef = useRef<any>();
  const { user, setIsUser, setUser, isUser } = useUserStore();

  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [projects, setProjects] = useState<projectType[]>(
    user.projects.map((e) => JSON.parse(e))
  );

  const handleDownloadImage = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element, { imageTimeout: 0 });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div
      ref={componentRef}
      className="create_snippet_wrapper w-[550px] relative max-w-[85vw] bg-def_blue_gray_light rounded-[10px] resize"
    >
      {/* Close Button */}
      {!noClose && (
        <div
          className="cross_btn absolute top-3 right-0 translate-x-[85%] hover:translate-x-[100%] duration-200 rounded-r-full bg-def_rose flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer -z-10"
          onClick={(e) => {
            !noClose && setClose(false);
          }}
        >
          <IoClose />
        </div>
      )}

      {/* Download Button */}
      {!noClose && (
        <div
          onClick={handleDownloadImage}
          className="cross_btn absolute bottom-3 right-0 translate-x-[85%] hover:translate-x-[100%] duration-200 rounded-r-full bg-def_white/20 flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer -z-10"
        >
          <MdFileDownload />
        </div>
      )}

      {/* Link Button */}
      {!noClose && (
        <div
          onClick={(e) => {
            navigator.clipboard.writeText(
              `${window.location.origin}/${user.username}`
            );
            alert("link copied");
          }}
          className="cross_btn absolute bottom-14 right-0 translate-x-[85%] hover:translate-x-[100%] duration-200 rounded-r-full bg-def_white/20 flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer -z-10"
        >
          <ImEmbed2 />
        </div>
      )}

      <div className="ContentWrapper w-full flex flex-col items-center gap-5 p-4 md:p-5 overflow-hidden relative">
        {/* Cover Image */}
        <div className="CoverImage w-full h-[16vh] rounded-[10px] bg-black z-30 relative overflow-hidden">
          <FallbackImage
            alt=""
            src={user.coverImage}
            className="object-cover object-center"
          />
        </div>

        <div className="profileDetails w-full flex flex-col md:flex-row flex-wrap gap-y-3 items-center justify-between z-30">
          <div className="details flex gap-3 items-center">
            {/* Profile Image */}
            <div className="profileImg h-9 aspect-square rounded-[10px] bg-transparent relative cursor-pointer">
              <FallbackImage
                alt=""
                src={getImage(user.profileImage as ProfileImageType)}
              />
            </div>

            {/* Name */}
            <div className="nameDetails flex flex-col">
              <div className="name font-bold">{user.name}</div>
            </div>
          </div>

          {/* Designation */}
          <div className="designation text-center md:text-xs text-[11px] font-medium text-white/40 font-FiraMono pt-2">
            {user.designation}
          </div>
        </div>

        {/* About */}
        <div className="description text-xs font-light font-FiraMono text-white/60 line-clamp-5 md:line-clamp-6  text-center md:text-justify z-30">
          {user.about}
        </div>

        {/* Talks About */}
        <div className="talksAbout flex flex-col gap-2 z-30 w-full">
          <div className="name font-bold text-sm font-FiraMono">
            Talks About
          </div>
          <div className="tags flex flex-wrap gap-x-4 gap-y-2">
            {user.talksAbout.map((ele, ind) => (
              <Chips size="xs" text={ele} key={ind} />
            ))}
          </div>
        </div>

        {/* Social Profiles */}
        {user.socialProfiles && (
          <div className="socialProfiles flex flex-col gap-2 gap-x-4 gap-y-2 z-30 w-full">
            <div className="name font-bold text-sm font-FiraMono">
              Social Profiles
            </div>
            <div className="Profiles flex flex-wrap gap-4 text-xl text-white/50 ">
              {user.socialProfiles.map((profile, ind) => {
                let icon = CheckSocialProfiles(profile);
                if (icon == "github") return <FaGithub />;
                else if (icon == "linkedin") return <FaLinkedin />;
                else if (icon == "twitter") return <FaTwitter />;
                else if (icon == "instagram") return <AiFillInstagram />;
                else if (icon == "google") return <FaGoogle />;
                else return <FaLink />;
              })}
            </div>
          </div>
        )}

        {/* Add Project */}
        <div
          className="extendButton w-full flex items-center justify-center text-xs font-FiraMono font-normal text-white/50 cursor-pointer hover:text-white duration-200 z-30 -my-1.5"
          onClick={(e) => setOpenProjectDialog(true)}
        >
          <Dialog isOpen={openProjectDialog} setOpen={setOpenProjectDialog}>
            <AddProject
              showProjects
              projects={projects}
              setProjects={setProjects}
              setClose={setOpenProjectDialog}
            />
          </Dialog>
          Show Projects <IoGitBranchOutline className="text-sm" />
        </div>

        {/* Bg Beams */}
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Profile;
