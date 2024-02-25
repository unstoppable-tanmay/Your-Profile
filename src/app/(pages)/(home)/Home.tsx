"use client";

import CreateProfile from "@/components/DialogComponent/CreateProfile.comp";
import Dialog from "@/components/DialogComponent/Dialog";
import Login from "@/components/DialogComponent/Login.comp";
import Profile from "@/components/DialogComponent/Profile.comp";
import UpdateProfile from "@/components/DialogComponent/Update.comp";
import { BoxesCore } from "@/components/ui/BoxBg";
import { BackgroundBeams } from "@/components/ui/backgroundBeams";
import { LampContainer } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";
import useUserStore, { UserResponse } from "@/store/user";
import { motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Home = () => {
  const [profile, setProfile] = useState(false);
  const [login, setLogin] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);

  const { user, setIsUser, setUser, isUser, loading, setLoading } =
    useUserStore();

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  // const [loading, setLoading] = useState(true);

  const logOut = () => {
    removeCookie("token");
    setUser({
      name: "",
      designation: "",
      profileImage: "",
      coverImage: "",
      about: "",
      talksAbout: [],
      socialProfiles: [],
      projects: [],
    });
    setIsUser(false);
  };

  useLayoutEffect(() => {
    const JWTLogin = async () => {
      setLoading(true)
      const response = await fetch(`/api/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await response.json();

      if (!user.error) {
        setUser(user);
        setIsUser(true);
      }
      setLoading(false);
    };
    JWTLogin().catch((err) => console.log(err))
  }, [setIsUser, setUser,setLoading]);
  return (
    <div className="Home relative w-screen h-screen flex items-center justify-center py-10">
      <Dialog isOpen={login} setOpen={setLogin} key={"Login"}>
        <Login setClose={setLogin} />
      </Dialog>
      <Dialog isOpen={profile} setOpen={setProfile} key={"Profile"}>
        <Profile setClose={setProfile} />
      </Dialog>
      <Dialog isOpen={createProfile} setOpen={setCreateProfile}>
        <CreateProfile setClose={setCreateProfile} />
      </Dialog>
      <Dialog isOpen={updateProfile} setOpen={setUpdateProfile}>
        <UpdateProfile setClose={setUpdateProfile} />
      </Dialog>
      <Dialog isOpen={loading} setOpen={null} noClose>
        {/* Loading */}
        {loading && (
          <div className="text-lg font-FiraMono font-medium w-full h-full backdrop-blur-xl absolute flex items-center justify-center text-[10vw] z-30 select-none">
            Loading
          </div>
        )}
      </Dialog>

      <motion.div className=" text-white text-center text-3xl font-medium tracking-tight md:text-6xl select-none flex flex-col items-center justify-center gap-6 z-20 mx-5 my-10">
        A Best Profile Can Lead <br />
        To A Better Position <br />
        <div className="text mt-2 text-2xl md:text-5xl">
          {isUser && "Hello " + user.name.split(" ")[0] + "!"}
        </div>
        {isUser ? (
          <div className="flex gap-4 text-white w-full items-center justify-center flex-wrap z-50">
            <motion.button
              onClick={(e) => setProfile(true)}
              className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
            >
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">View Profile</span>
            </motion.button>

            <motion.button
              onClick={(e) => setUpdateProfile(true)}
              className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
            >
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">Update Profile</span>
            </motion.button>
            <motion.button
              onClick={logOut}
              className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
            >
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-def_rose to-transparent" />
              <span className="relative z-20 text-def_rose">Log Out</span>
            </motion.button>
          </div>
        ) : (
          <div className="flex gap-4 text-white w-full items-center justify-center flex-wrap">
            <motion.button
              onClick={(e) => setLogin(true)}
              className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
            >
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">Login</span>
            </motion.button>

            <motion.button
              onClick={(e) => setCreateProfile(true)}
              className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
            >
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">Create Profile</span>
            </motion.button>
          </div>
        )}
        <motion.div className="flex flex-col gap-3 sm:text-sm text-base tracking-normal font-medium">
          <div className="item">It Is For All Developers.</div>
          <div className="item">Many Details You Can Show Here</div>
          <div className="item">Create Profile And Share Link Anywhere</div>
          <div className="item">You Can Download Or Embed The Profile Card</div>
        </motion.div>
      </motion.div>

      <div className="BoxCore w-full h-full overflow-hidden z-10 absolute">
        {/* <BoxesCore /> */}
        {/* <Meteors /> */}
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Home;
