import React from "react";

type HomeTabProps = {};

const HomeTab: React.FC<HomeTabProps> = () => {
  return (
    <div className="w-full mt-4">
      <span className="text-xl font-semibold">Latest Posts</span>
      <div className="mt-10">
        <div className="bg-slate-500 w-full rounded-lg h-[480px]" />
        <div className="space-y-2 mt-4">
          <span className="text-xl font-semibold">Post Title</span>
          <p className="text-base font-medium">
            The calc function performs a calculation to be used as the
            property value. Browser Support The numbers in the table specify the
            first browser version that fully supports the function
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeTab;
