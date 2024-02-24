"use client";

import {
  ProfileIcons,
  ProfileImageType,
  getImage,
} from "@/lib/profileIconArray";
import ScrollContainer from "react-indiana-drag-scroll";
import React, {
  Dispatch,
  SetStateAction,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import FallbackImage from "../UtilityComponent/FallbackImage.comp";
import { motion } from "framer-motion";

const SelectProfile = ({
  setClose,
  setProfileImage,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
  setProfileImage: Dispatch<SetStateAction<ProfileImageType>>;
}) => {
  const windowLeftPoint = useRef(0);
  const windowMiddlePoint = useRef(0);
  const windowRightPoint = useRef(0);

  useEffect(() => {
    windowMiddlePoint.current = window.innerWidth / 2;
    windowRightPoint.current = window.innerWidth;
  });

  useEffect(() => {
    document.querySelectorAll(".imgWrapper").forEach((e, i) => {});
  }, []);

  return (
    <div className="wrapper">
      <ScrollContainer className="flex overflow-x-scroll items-center gap-3 md:gap-6 relative w-screen no-scrollbar px-10 select-none">
        {Object.entries(ProfileIcons).map((profileIcon, index) => {
          return (
            <motion.div
              className="imgWrapper flex-shrink-0 h-20 md:h-40 aspect-square relative"
              key={index}
              onClick={(e) => {
                setProfileImage(profileIcon[0] as ProfileImageType);
                setClose(false);
                e.stopPropagation();
              }}
            >
              <FallbackImage alt="" src={profileIcon[1]} />
            </motion.div>
          );
        })}
      </ScrollContainer>
      <div className="dragText w-full flex items-center justify-center translate-y-6 text-xl text-def_white/15 tracking-wide select-none pointer-events-none">
        Drag To Scroll & Select To Close
      </div>
    </div>
  );
};

const MemorizedSelectProfile = memo(SelectProfile);
export default MemorizedSelectProfile;
