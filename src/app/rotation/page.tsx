"use client";

import ChampionCard from "@/components/ChampionCard";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampionList } from "@/utils/api";
import React from "react";

export default function RotationPage() {
  const [rotationData, setRotationData] =
    React.useState<ChampionRotation | null>(null);
  const [championData, setChampionData] = React.useState<{
    [key: string]: Champion;
  } | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchData() {
      const [rotationRes, championsData] = await Promise.all([
        fetch("/api/rotation").then((res) => res.json()),
        fetchChampionList(),
      ]);

      console.log("rotationData:", rotationRes); // rotationData 구조 확인
      console.log("championData:", championsData);

      setRotationData(rotationRes);
      setChampionData(championsData);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div> 로딩중 ... </div>;
  if (!rotationData || !championData) return null;

  const rotationChampions = rotationData.freeChampionIds.map((id) => {
    const champion = Object.values(championData).find(
      (champion: Champion) => parseInt(champion.key) === id
    );
    return champion;
  });

  return (
    <div className="flex flex-col min-h-screen p-10">
      <h3 className="text-blue-500 text-4xl font-bold"> 챔피언 로테이션 </h3>

      <div className="grid grid-cols-4 gap-4">
        {rotationChampions.map(
          (champion) => champion && <ChampionCard champion={champion} />
        )}
      </div>
    </div>
  );
}
