import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

type LandingPageNavProps = {};

const LandingPageNav: React.FC<LandingPageNavProps> = () => {
  return (
    <nav className="flex items-center p-4 border border-b-1">
      <Image alt="logo" src="/assets/patreon.svg" width={40} height={40} />
      <div className="flex items-center w-full ml-4 gap-x-4 md:gap-x-8 justify-end">
        <div className="relative w-full md:w-[20rem]">
          <Input
            type="text"
            placeholder="Find a creator"
            className="bg-slate-100 rounded-full h-10 pl-8 w-full"
          />
          <Search
            size={20}
            className="text-gray-500 absolute top-[0.7rem] left-2"
          />
        </div>
        <div>
          <UserCircle
            className="md:hidden text-gray-500 cursor-pointer"
            size={24}
          />
          <div className="gap-x-4 hidden md:flex">
            <LoginLink>
              <Button className="rounded-full" variant="outline">
                Log In
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button className="rounded-full">Become a creator</Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default LandingPageNav;
