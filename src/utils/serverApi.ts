import { ChampionRotation } from "@/types/ChampionRotation";

const RIOT_API_URL = "https://kr.api.riotgames.com";
const RIOT_API_KEY = process.env.RIOT_API_KEY;

export async function fetchChampionRotation(): Promise<ChampionRotation> {
  if (!RIOT_API_KEY) {
    throw new Error("API키가 정의되지 않았습니다.");
  }

  const response = await fetch(
    `${RIOT_API_URL}/lol/platform/v3/champion-rotations`,
    {
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("로테이션 로드에 실패했어요!");
  }
  return response.json();
}
