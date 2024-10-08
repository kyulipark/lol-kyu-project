import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";

const DATA_DRAGON_URL = "https://ddragon.leagueoflegends.com";

// 버전 정보 가져오기
export async function fetchVersions(): Promise<string[]> {
  const response = await fetch(`${DATA_DRAGON_URL}/api/versions.json`);
  if (!response.ok) {
    throw new Error("버전 확인에 실패했습니다.");
  }
  return response.json();
}

// 챔피언 리스트 가져오기
export async function fetchChampionList(): Promise<{
  [key: string]: Champion;
}> {
  // 버전 정보 비동기 처리
  const versions = await fetchVersions();
  const latestVersion = versions[0];

  const response = await fetch(
    `${DATA_DRAGON_URL}/cdn/${latestVersion}/data/ko_KR/champion.json`
  );
  if (!response.ok) {
    throw new Error("챔피언 리스트 확인에 실패했습니다.");
  }
  console.log("response", response);
  const data = await response.json();
  console.log("data", data);
  return data.data;
}

// 챔피언 상세 정보 가져오기
export async function fetchChampionDetail(id: string): Promise<ChampionDetail> {
  // 버전 정보 비동기 처리
  const versions = await fetchVersions();
  const latestVersion = versions[0];

  const response = await fetch(
    `${DATA_DRAGON_URL}/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`
  );
  if (!response.ok) {
    throw new Error("챔피언 정보 로드에 실패했습니다.");
  }
  console.log("response", response);
  const data = await response.json();
  console.log("data", data);
  return data.data[id];
}

// 아이템 리스트 가져오기
export async function fetchItemList(): Promise<{ [key: string]: Item }> {
  // 버전 정보 비동기 처리
  const versions = await fetchVersions();
  const latestVersion = versions[0];

  const response = await fetch(
    `${DATA_DRAGON_URL}/cdn/${latestVersion}/data/ko_KR/item.json`
  );
  if (!response.ok) {
    throw new Error("아이템 리스트 확인에 실패했습니다.");
  }
  console.log("response", response);
  const data = await response.json();
  console.log("data", data);
  return data.data;
}
