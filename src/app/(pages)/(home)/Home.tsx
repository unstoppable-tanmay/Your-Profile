"use client";

import CreateProfile from "@/components/DialogComponent/CreateProfile.comp";
import Dialog from "@/components/DialogComponent/Dialog";
import Profile from "@/components/DialogComponent/Profile.comp";
import React, { useState } from "react";

const Home = () => {
  const [profile, setProfile] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  return (
    <div className="Home relative w-screen h-screen flex items-center justify-start flex-col gap-10">
      <Dialog isOpen={profile} setOpen={setProfile}>
        <Profile setClose={setProfile} />
      </Dialog>
      <Dialog isOpen={createProfile} setOpen={setCreateProfile}>
        <CreateProfile setClose={setCreateProfile} />
      </Dialog>

      <div className="flex gap-4">
        <button className=" p-2" onClick={(e) => setProfile(true)}>
          Open-Profile
        </button>
        <button className=" p-2" onClick={(e) => setCreateProfile(true)}>
          Open-Create-Profile
        </button>
      </div>
    </div>
  );
};

export default Home;
