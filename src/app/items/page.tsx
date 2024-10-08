import { fetchItemList } from "@/utils/api";
import React from "react";
import { Item } from "@/types/Item";
import Image from "next/image";

export default async function ItemPage() {
  const itemsData = await fetchItemList();
  const items = Object.values(itemsData);

  console.log(items);

  return (
    <div className="flex flex-col min-h-screen p-10">
      <h3 className="text-blue-500 text-4xl font-bold"> 아이템 목록 </h3>

      <div className="grid grid-cols-6 gap-4">
        {items.map((item: Item) => {
          return (
            <div className="bg-white p-2 rounded shadow flex flex-col justify-center text-center">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                width={64}
                height={64}
                alt={item.name}
              />
              {item.name}
              <p>{item.plaintext}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
