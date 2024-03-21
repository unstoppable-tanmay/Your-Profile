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
      <ScrollContainer className="flex overflow-x-scroll items-center gap-3 md:gap-6 relative w-screen no-scrollbar px-10 select-none mask-class">
        {Object.entries(ProfileIcons).map((profileIcon, index) => {
          return (
            <SelectElement
              profileIcon={profileIcon}
              setClose={setClose}
              setProfileImage={setProfileImage}
              key={index}
            />
          );
        })}
      </ScrollContainer>
      <div className="dragText w-full flex items-center justify-center translate-y-6 text-xl text-def_white/15 tracking-wide select-none pointer-events-none">
        Drag To Scroll & Select To Close
      </div>
    </div>
  );
};

const SelectElement = ({
  profileIcon,
  setClose,
  setProfileImage,
}: {
  profileIcon: [string, string];
  setClose: Dispatch<SetStateAction<boolean>>;
  setProfileImage: Dispatch<SetStateAction<ProfileImageType>>;
}) => {
  const target = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const getProximityToWindowCenter = (targetElement: HTMLDivElement) => {
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();

      // Calculate the center coordinates of the target element
      const targetCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      // Calculate the center coordinates of the window
      const windowCenter = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      // Calculate the distance between the target center and window center
      const distanceToWindowCenter = Math.sqrt(
        Math.pow(targetCenter.x - windowCenter.x, 2) +
          Math.pow(targetCenter.y - windowCenter.y, 2)
      );

      // Return a clamped value between 0 and 1 based on proximity
      // 0 means the target is closer to the window center
      return Math.max(
        0,
        Math.min(
          1,
          1 -
            distanceToWindowCenter /
              Math.max(window.innerWidth, window.innerHeight)
        )
      );
    }
    return 0;
  };

  useEffect(() => {
    setScale(getProximityToWindowCenter(target.current!));
    target.current?.parentElement?.addEventListener("scroll", (e) => {
      setScale(getProximityToWindowCenter(target.current!));
    });
  }, []);

  return (
    <motion.div
      ref={target}
      className="imgWrapper flex-shrink-0 h-20 md:h-40 aspect-square relative"
      style={{ scale: scale }}
      onClick={(e) => {
        setProfileImage(profileIcon[0] as ProfileImageType);
        setClose(false);
        e.stopPropagation();
      }}
    >
      <FallbackImage alt="" src={profileIcon[1]} />
    </motion.div>
  );
};

const MemorizedSelectProfile = memo(SelectProfile);
export default MemorizedSelectProfile;
