import { fetchChampionList } from "@/utils/api";
import React from "react";
import ChampionCard from "./_components/ChampionCard";

export default async function ChampionsPage() {
  const championData = await fetchChampionList();
  const champions = Object.values(championData);
  console.log(champions);

  return (
    <div>
      <div className="flex flex-col min-h-screen p-10">
        <h3 className="text-blue-500 text-4xl font-bold"> 챔피언 목록 </h3>
        <div className="grid grid-cols-4 gap-4">
          {champions.map((champion) => {
            return <ChampionCard champion={champion} />;
          })}
        </div>
      </div>
    </div>
  );
}
