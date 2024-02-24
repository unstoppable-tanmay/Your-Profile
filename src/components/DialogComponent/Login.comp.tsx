"use client";

import useUserStore from "@/store/user";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import validator from "validator";

const Login = ({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShow, setPasswordShow] = useState(false);

  const { user, setIsUser, setUser, isUser } = useUserStore();

  const Login = async () => {
    if (!userName) return alert("Enter User Name");
    if (!password) return alert("Enter Password");

    try {
      const loggedInUserResponse = await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          username: userName,
        }),
        credentials: "include",
      });

      const loggedInUser = await loggedInUserResponse.json();

      if (!loggedInUser.error) {
        setUser(loggedInUser);
        setIsUser(true);
        setClose(false);
      }else{
        setClose(false);
        alert(loggedInUser.error)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login create_snippet_wrapper w-[450px] relative max-w-[85vw] p-4 md:p-5 bg-def_blue_gray_light rounded-[10px] shrink-0 flex-col flex gap-3">
      {/* Close Button */}
      <div
        className="cross_btn absolute top-3 right-0 translate-x-[85%] hover:translate-x-[100%] duration-200 rounded-r-full bg-def_rose flex items-center justify-center px-1 md:px-2 py-1 cursor-pointer -z-10"
        onClick={(e) => setClose(false)}
      >
        <IoClose />
      </div>

      <div className="w-full text-center text-sm font-FiraMono font-medium">
        Log In
      </div>

      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 font-FiraMono outline-none text-xs"
      />
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
          className={`rounded-[5px] bg-def_blue_gray_dark px-4 py-2 font-FiraMono outline-none text-xs text-def_white/70 relative`}
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

      {/* Submit */}
      <button
        onClick={Login}
        className="px-2 font-FiraMono py-1 rounded-[5px] relative bg-def_blue_gray_dark text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 group"
      >
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent group-hover:w-full duration-300" />
        <span className="relative z-20">Log In</span>
      </button>
    </div>
  );
};

export default Login;
