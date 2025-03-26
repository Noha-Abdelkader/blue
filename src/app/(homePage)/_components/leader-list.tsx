import React from "react";

import Image from "next/image";

function setTextColor(index: number, pointOnly?: boolean) {
  if (index == 0) return "text-[#FFD700]";
  if (index == 1) return "text-[#C0C0C0]";
  if (index == 2) return "text-[#CD7F32]";
  if ((index == 8 || index == 14) && pointOnly) return "text-[#EF8D61]";
}


export default function LeaderList({
  data,
  index,
}: {
  data: any;
  index: number;
}) {
  return (
    <div key={data.points} className="flex items-center justify-between mb-2">
      {/* left */}
      <div className="flex items-center gap-3 ">
        <span className={`${setTextColor(index)} font-semibold `}>
          {index + 1}
        </span>
        <Image
          src={data.img}
          alt={data.name}
          width={40}
          height={0}
          className="rounded-full aspect-square object-cover"
          loading="lazy"
          priority={false}
        />

        <span className="font-semibold ">{data.name}</span>
      </div>
      {/* right */}
      <div className="font_jura flex items-center flex-col font-medium">
        <span className={` ${setTextColor(index, true)}  text-lg `}>
          {data.points}
        </span>
        <span className="text-main font-bold ">Points</span>
      </div>
    </div>
  );
}
