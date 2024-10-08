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
      <h2 className="text-2xl font-bold mb-4"> {champion.name}</h2>
      <div className="flex">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          width={500}
          height={300}
          className="rounded"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">{champion.title}</h3>
          <p className="mt-2">{champion.lore}</p>
        </div>
      </div>
    </div>
  );
}
