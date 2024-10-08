import { fetchChampionDetail } from "@/utils/api";
import Image from "next/image";

interface championDetailPageProps {
  params: {
    id: string;
  };
}

export async function generatMetadata({ params }: championDetailPageProps) {
  const champion = await fetchChampionDetail(params.id);
  return {
    title: `${champion.name}`,
    description: champion.title,
  };
}

export default async function ChampionsDetailPage({
  params,
}: championDetailPageProps) {
  const champion = await fetchChampionDetail(params.id);

  return (
    <div>
      <div className="relative w-full h-screen rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
          }}
        ></div>

        <div className="fixed bottom-0 left-0 w-full z-40 p-4 text-white bg-gradient-to-r from-black to-transparent">
          <div className="flex items-center">
            <h2 className="text-blue-500 text-5xl font-bold m-10 mr-2 ">
              {champion.name}
            </h2>
            <h3 className="text-xl mt-6">{champion.title}</h3>
          </div>
          <p className="mx-10 text-justify pr-40 ">{champion.lore}</p>
          <h2 className="text-blue-500 text-2xl font-bold mx-10 mt-4 mb-2">
            스탯
          </h2>
          <p className="pr-40 lex mx-10 mr-80">
            <strong> 공격력: </strong>
            {champion.info.attack},<strong> 방어력: </strong>
            {champion.info.defense},<strong> 마법력: </strong>
            {champion.info.magic},<strong> 난이도: </strong>
            {champion.info.difficulty}
          </p>
        </div>
      </div>
    </div>
  );
}
