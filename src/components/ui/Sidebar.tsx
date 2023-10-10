import { BarChart2, Bell, Home, Settings, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav className="pt-4 px-4 bg-white border-gray-100 border h-screen w-[20rem]">
      <Image src="/assets/patreon.svg" alt="logo" width={40} height={40} />
      <div className="mt-6 space-y-2">
        <Link
          href={"/"}
          className="text-lg font-medium py-2 px-4 w-full text-gray-700 bg-slate-100 flex items-center gap-2 rounded-lg"
        >
          {" "}
          <Home size={20} />
          My Page
        </Link>
        <Link
          href={"/"}
          className="text-lg font-medium py-2 px-4 w-full text-gray-400 flex items-center gap-2 rounded-lg"
        >
          {" "}
          <Users size={20} /> Members
        </Link>
        <Link
          href={"/"}
          className="text-lg font-medium py-2 px-4 w-full text-gray-400 flex items-center gap-2 rounded-lg"
        >
          {" "}
          <BarChart2 size={20} /> Payouts
        </Link>
        <Link
          href={"/"}
          className="text-lg font-medium py-2 px-4 w-full text-gray-400 flex items-center gap-2 rounded-lg"
        >
          {" "}
          <Bell size={20} /> Notifications
        </Link>
        <Link
          href={"/"}
          className="text-lg font-medium py-2 px-4 w-full text-gray-400 flex items-center gap-2 rounded-lg"
        >
          {" "}
          <Settings size={20} /> Settings
        </Link>
      </div>
      <Button variant="outline" className="rounded-full mt-4 w-full">
        Create Post
      </Button>
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="h-10 w-10 bg-slate-500 rounded-full" />
        <div className="flex flex-col">
          <span className="text-base font-bold text-gray-800">Jane Doe</span>
          <span className="text-sm text-slate-500">Creator</span>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
