import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  champiion: Champion;
}

export default function ChampionCard({ champion }: Props) {
  return (
    <div>
      <Link href={`/champions/${champion.id}`} key={champion.id} />
      <div className="bg-white p-4 rounded flex justify-center align-center flex-col hover:shadow-lg">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.id}_0.jpg`}
          alt={champion.name}
          width={120}
          height={120}
          className="rounded"
        />
        <h3 className="mt-2 text-center">{champion.name}</h3>
      </div>
    </div>
  );
}
