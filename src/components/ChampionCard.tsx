import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  champion: Champion;
}

export default function ChampionCard({ champion }: Props) {
  return (
    <Link href={`/champions/${champion.id}`} key={champion.id}>
      <div className="bg-white p-4 rounded flex justify-center align-center hover:shadow-lg">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.id}_0.jpg`}
          alt={champion.name}
          width={120}
          height={120}
          className="rounded"
        />
        <div className=" pl-3">
          <h3 className="mt-2 text-left text-blue-500 font-bold text-xl">
            {champion.name}
          </h3>
          <p className="text-left text-gray-500">{champion.title}</p>
        </div>
      </div>
    </Link>
  );
}
