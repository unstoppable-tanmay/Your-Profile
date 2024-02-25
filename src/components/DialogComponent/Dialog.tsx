"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import ReactDOM from "react-dom";

const Dialog = ({
  children,
  isOpen,
  setOpen,
  closeOnBlurArea = true,
  noClose = false,
}: {
  children: ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | null;
  closeOnBlurArea?: boolean;
  noClose?: boolean;
}) => {
  if (typeof document === "undefined") {
    // Return null during server-side rendering
    return null;
  }
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dialog-overlay w-full h-full flex items-center justify-center fixed top-0 left-0 z-[200] bg-transparent text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`blurLayer w-full h-full absolute backdrop-blur-md ${
              !noClose && "pointer-events-none"
            }`}
            onClick={(e) => {
              if (closeOnBlurArea) {
                !noClose && setOpen!(false);
                e.stopPropagation();
              }
            }}
          ></motion.div>
          <motion.div
            className="dialog-content"
            initial={{ scale: 0.5, opacity: 0, translateY: "100%" }}
            animate={{ scale: 1, opacity: 1, translateY: "0%" }}
            exit={{ scale: 0.5, opacity: 0, translateY: "100%" }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Dialog;
