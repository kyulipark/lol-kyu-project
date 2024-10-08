import React from "react";
import "./globals.css";

const Page = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(/bg_img.jpg')",
      }}
    >
      <h1 className="text-blue-500 text-4xl font-bold">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="mt-3">
        {" "}
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
    </div>
  );
};

export default Page;
