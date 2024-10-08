import { fetchItemList } from "@/utils/api";
import React from "react";
import { Item } from "@/types/Item";
import Image from "next/image";

export default async function ItemPage() {
  const itemsData = await fetchItemList();
  const items = Object.values(itemsData);

  return (
    <div className="flex flex-col min-h-screen p-10">
      <h3 className="text-blue-500 text-3xl font-bold mb-8"> 아이템 목록 </h3>

      <div className="grid grid-cols-5 gap-4">
        {items.map((item: Item) => {
          return (
            <div className="p-8 rounded  items-center border border-gray-300 flex flex-col justify-center text-center">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                width={60}
                height={60}
                alt={item.name}
                className="rounded-full"
              />
              <p className="mt-3 text-left text-blue-500 font-bold text-l">
                {" "}
                {item.name}{" "}
              </p>
              <p className=" text-gray-400 text-justify text-m">
                {item.plaintext}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
