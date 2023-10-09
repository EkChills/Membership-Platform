import React from "react";
import {
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import LandingPageNav from "@/components/landing page/LandingPageNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function page() {
  return (
    <>
      <LandingPageNav />
      <div className="text-center mt-20 flex flex-col gap-y-12 max-w-[40rem] mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl font-black text-slate-800">
            Creativity Powerd By Membership
          </h1>
          <p className="text-base text-slate-600 font-medium">
            Empower Creators and Support Their Passion with Dasha
          </p>
        </div>
        <RegisterLink>
          <Button className="rounded-full text-base">Get Started</Button>
        </RegisterLink>
      </div>
      {/* <Image src="/assets/banner.png" width={100} alt="banner image" height={100}/> */}
      <img src="/assets/patreonweb.png" alt="" className="w-full mt-16" />
    </>
  );
}
