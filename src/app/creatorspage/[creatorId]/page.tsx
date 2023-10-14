import { Link } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeTab from "@/components/creators page/HomeTab";

type CreatorsPageProps = {};

const CreatorsPage: React.FC<CreatorsPageProps> = () => {
  return (
    <>
      <div className="bg-purple-400 h-[16rem]" />
      <div className="text-center p-4 md:ml-[20rem] bg-slate-50 w-[calc(100vw - 20rem)] h-[calc(100vh - 16rem)] items-center flex flex-col">
        <div className="">
          <div className="w-20 h-20 bg-black rounded-full mx-auto -mt-12" />
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold">Jane Doe</span>
            <span>Here is the headline</span>
            <div className="flex mx-auto mt-6 text-slate-500 items-center">
              <Link size={16} />
              <span> dasha.com/userid</span>
            </div>
          </div>
        </div>
        <Tabs defaultValue="home" className="max-w-[864px] mt-16 w-full">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="membership">Membership</TabsTrigger>
          </TabsList>
          <TabsContent className="text-left" value="home">
            <HomeTab />
          </TabsContent>
        </Tabs>
        {/* <div className="h-[100rem]"></div> */}
      </div>
    </>
  );
};
export default CreatorsPage;
