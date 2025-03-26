import React from "react";

import { rank } from "@/lib/data/rank";
import Image from "next/image";
import { rankType } from "@/lib/types";

export default function Rank() {

  return (
    <section>
      <div
        className="sec_wrap  bg-[#000E22]">
        <div >
          <header>
            <h2 className="!text-white">How to Rank</h2>
            <p className="!text-[#9A9A9A]">
              Master the Game: Understand What It Takes to Climb the
              Leaderboard!
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 padd">
            {rank.map((ele:rankType) => {
              return (
                <div
                  key={ele.title}
                  className="  gradient_border relative 
              
              "
                >
                  <div
                    className="
                  bg-white
                  bg-[linear-gradient(110deg,#000E22,#000E22,#053a51,#000E22,#000E22)] [filter:blur(0.2px)]
                  w-full h-full px-8 pt-8   flex flex-col items-center justify-center gap-2  overflow-hidden
                  hover:animate-gradient-x 
                  "
                  >
                    <Image
                      src={ele.image}
                      alt={ele.title}
                      width={150}
                      height={100}
                      className="relative z-10 hover:scale-[102%]     duration-300 transition-all"
                      loading="lazy"
                      priority={false}
                    />

                    <h3 className="text-main font-bold">{ele.title}</h3>
                    <p className="text-[#9A9A9A]">{ele.desc}</p>
                    {/* <div className="size-32  absolute -top-1 left-1/2 -translate-x-[50%] -z-10 "></div> */}
                    <Image
                      src={"/assets/images/line1.png"}
                      alt="bg"
                      width={100}
                      height={100}
                      className="absolute -top-10  left-1/4"
                      loading="lazy"
                      priority={false}
                    />
                    <Image
                      src={"/assets/images/line2.png"}
                      alt="bg"
                      width={100}
                      height={100}
                      className="absolute -top-10 right-1/4"
                      loading="lazy"
                      priority={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
