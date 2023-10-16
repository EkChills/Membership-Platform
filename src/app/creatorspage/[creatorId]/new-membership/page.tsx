import NewMembershipForm from "@/components/creators page/NewMembershipForm";
import PagesWrapper from "@/components/creators page/PagesWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink } from "lucide-react";
import React from "react";

export default function NewMembership() {
  
  return (
    <PagesWrapper>
      <div className="">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-bold text-lg lg:text-2xl">New Membership</h2>
          <Button
            variant={"outline"}
            className="bg-transparent flex items-center gap-4"
          >
            <span className="text-sm font-semibold lg:text-base">
              preview page
            </span>
            <ExternalLink className="w-6 h-6" />
          </Button>
        </div>
        <div className="bg-white shadow-lg shadow-slate-200  rounded-lg px-4 py-6 mt-6">
          <h3 className="font-semibold text-base lg:text-lg">
            Customize Membership
          </h3>
        <NewMembershipForm />
        </div>
      </div>
    </PagesWrapper>
  );
}
