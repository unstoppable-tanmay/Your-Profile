"use client";

import Dialog from "@/components/DialogComponent/Dialog";
import Profile from "@/components/DialogComponent/Profile.comp";
import { BoxesCore } from "@/components/ui/BoxBg";
import { WavyBackground } from "@/components/ui/Wave";
import { BackgroundBeams } from "@/components/ui/backgroundBeams";
import { Meteors } from "@/components/ui/meteors";
import useUserStore from "@/store/user";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Page = ({ params }: { params: { username: string } }) => {
  const { user, setIsUser, setUser, isUser } = useUserStore();
  const [profile, setProfile] = useState(false);
  const [loading,setLoading] = useState(true)
  useLayoutEffect(() => {
    const FetchData = async () => {
      const response = await fetch(`/api/view/${params.username}`);
      const user = await response.json();

      if (!user.error) {
        setUser(user);
        setIsUser(true);
        setProfile(true);
      }
      setLoading(false)
    };
    FetchData();
  }, [setIsUser,setUser,params.username]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Dialog isOpen={profile} setOpen={setProfile} noClose={true}>
        <Profile setClose={setProfile} noClose={true} />
      </Dialog>
      {loading && (
        <div className="text-lg font-FiraMono font-medium w-full h-full backdrop-blur-xl absolute flex items-center justify-center z-50">
          Loading
        </div>
      )}
      {/* <BackgroundBeams/> */}
      <WavyBackground/>
      {/* <BoxesCore/> */}
    </div>
  );
};

export default Page;
