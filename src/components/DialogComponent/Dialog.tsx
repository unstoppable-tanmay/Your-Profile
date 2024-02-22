"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

const Dialog = ({
  children,
  isOpen,
  setOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dialog-overlay w-full h-full flex items-center justify-center fixed z-[200]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onWheel={(e) => e.stopPropagation()}
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="blurLayer w-full h-full absolute backdrop-blur-md"
            onClick={(e) => setOpen(false)}
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
    </AnimatePresence>
  );
};

export default Dialog;
