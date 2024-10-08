import React from "react";
import "./globals.css";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10">
      <h1 className="text-blue-500 text-4xl font-bold">
        {" "}
        리그 오브 레전드 정보 앱
      </h1>
      <p> Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
    </div>
  );
};

export default page;
