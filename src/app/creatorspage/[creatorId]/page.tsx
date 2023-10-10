import { Link } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CreatorsPageProps = {};

const CreatorsPage: React.FC<CreatorsPageProps> = () => {
  return (
    <>
      <div className="bg-purple-400 h-[16rem]" />
      <div className="p-4 md:pl-[21rem] bg-slate-50 w-[calc(100vw - 20rem)] items-center flex flex-col">
        <div className="text-center">
          <div className="w-20 h-20 bg-black rounded-full mx-auto -mt-12" />
          <div className="flex flex-col">
            <span className="text-lg font-bold">Jane Doe</span>
            <span>Here is the headline</span>
            <div className="flex mx-auto mt-6 text-slate-500 items-center">
              <Link size={16} />
              <span> dasha.com/userid</span>
            </div>
            <Tabs defaultValue="account" className="w-[400px] mx-auto mt-16">
              <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="membership">Membership</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="h-[100rem]"></div>
      </div>
    </>
  );
};
export default CreatorsPage;
