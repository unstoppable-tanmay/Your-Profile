"use client";

import CreateProfile from "@/components/DialogComponent/CreateProfile.comp";
import Dialog from "@/components/DialogComponent/Dialog";
import Login from "@/components/DialogComponent/Login.comp";
import Profile from "@/components/DialogComponent/Profile.comp";
import UpdateProfile from "@/components/DialogComponent/Update.comp";
import { LampContainer } from "@/components/ui/lamp";
import useUserStore, { UserResponse } from "@/store/user";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [profile, setProfile] = useState(false);
  const [login, setLogin] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);

  const { user, setIsUser, setUser, isUser } = useUserStore();

  useEffect(() => {
    const JWTLogin = async () => {
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
    };

    JWTLogin().catch((err) => console.log(err));
  }, [setIsUser, setUser]);
  return (
    <div className="Home relative w-screen h-screen flex items-center justify-center">
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

      <LampContainer className="w-screen min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl select-none"
        >
          A Best Profile Can Lead <br />
          To A Better Position <br />
          <div className="text mt-2 text-3xl">
            {isUser && "Hello " + user.name.split(" ")[0] + "!"}
          </div>
          {isUser ? (
            <div className="flex gap-4 text-white w-full items-center justify-center mt-10 flex-wrap">
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
            </div>
          ) : (
            <div className="flex gap-4 text-white w-full items-center justify-center mt-10 flex-wrap">
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
          <motion.div className="flex flex-col gap-3 sm:text-sm text-base tracking-normal font-medium mt-10">
            <div className="item">It Is For All Developers.</div>
            <div className="item">Many Details You Can Show Here</div>
            <div className="item">Create Profile And Share Link Anywhere</div>
            <div className="item">
              You Can Download Or Embed The Profile Card
            </div>
          </motion.div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Home;
