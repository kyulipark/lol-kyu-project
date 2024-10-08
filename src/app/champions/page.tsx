import { fetchChampionList } from "@/utils/api";
import React from "react";
import ChampionCard from "../../components/ChampionCard";

export const revalidate = 86400;

export default async function ChampionsPage() {
  const championData = await fetchChampionList();
  const champions = Object.values(championData);
  console.log(champions);

  return (
    <div className="flex flex-col min-h-screen p-10">
      <h3 className="text-blue-500 text-3xl font-bold mb-8"> 챔피언 목록 </h3>
      <div className="grid grid-cols-4 gap-4">
        {champions.map((champion) => {
          return <ChampionCard champion={champion} />;
        })}
      </div>
    </div>
  );
}
