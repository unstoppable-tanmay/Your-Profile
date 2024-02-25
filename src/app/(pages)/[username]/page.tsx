"use client";

import Dialog from "@/components/DialogComponent/Dialog";
import Profile from "@/components/DialogComponent/Profile.comp";
import { BoxesCore } from "@/components/ui/BoxBg";
import { WavyBackground } from "@/components/ui/Wave";
import { BackgroundBeams } from "@/components/ui/backgroundBeams";
import { Meteors } from "@/components/ui/meteors";
import useUserStore from "@/store/user";
import { redirect } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Page = ({ params }: { params: { username: string } }) => {
  const { user, setIsUser, setUser, isUser, loading, setLoading } =
    useUserStore();
  const [profile, setProfile] = useState(false);
  // const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    const FetchData = async () => {
      const response = await fetch(`/api/view/${params.username}`);
      const user = await response.json();

      if (!user.error) {
        setUser(user);
        setIsUser(true);
        setProfile(true);
      } else {
        console.log(user.error);
        alert("No User Found");
        window.location.href = "/";
      }
      setLoading(false);
    };
    FetchData();
  }, [setIsUser, setUser, params.username,setLoading]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Dialog isOpen={profile} setOpen={setProfile} noClose={true}>
        <Profile setClose={setProfile} noClose={true} />
      </Dialog>
      <Dialog isOpen={loading} setOpen={null} noClose={true}>
        {/* Loading */}
        {loading && (
          
        <div className="text-lg font-FiraMono font-medium w-full h-full backdrop-blur-xl absolute flex items-center justify-center text-[10vw] z-30 select-none">
        Loading
      </div>
        )}
      </Dialog>
      <WavyBackground />
    </div>
  );
};

export default Page;
