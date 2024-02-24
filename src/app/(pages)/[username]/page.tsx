"use client";

import Dialog from "@/components/DialogComponent/Dialog";
import Profile from "@/components/DialogComponent/Profile.comp";
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
  }, []);

  return (
    <div className="w-screen h-screen">
      <Dialog isOpen={profile} setOpen={setProfile} noClose={true}>
        <Profile setClose={setProfile} noClose={true} />
      </Dialog>
      <BackgroundBeams/>
    </div>
  );
};

export default Page;
