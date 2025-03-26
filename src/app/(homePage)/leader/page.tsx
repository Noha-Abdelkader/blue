import React from "react";
import Link from "next/link";

import { leaders } from "@/lib/data/leaders";
import LeaderList from "../_components/leader-list";

import { IoIosArrowBack } from "react-icons/io";
import { leaderType } from "@/lib/types";

export default function Page() {
  return (
    <main>
      {/* 1st */}
      <section className=" relative  ">
        
        <div className=" sec_wrap">

        {/* bg */}
        <div className=" absolute -top-5 inset-x-0  flex items-center justify-center -z-10 ">
          <div className="h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_#0079ad,_#fff)] opacity-55 blur-3xl"></div>
        </div>
        {/* content */}
        <div className="">
          <header className=" pt-8 flex items-center justify-center flex-col gap-3 ">
            <Link
              href={"/home"}
              className="text-main flex items-center gap-2 font-semibold md:absolute left-16 "
            >
              <IoIosArrowBack className="text-xl" />
              Back to home{" "}
            </Link>
            <div>
              <h2>See Where You Stand!</h2>
              <p className=" w-[70%] md:w-[45%] mx-auto">
                Explore the rankings, track your progress, and challenge
                yourself to climb higher!
              </p>
            </div>
          </header>

          <div className="shadow_card rounded-[50px] py-5 px-6 text-xs max-w-xl mx-auto relative z-10 bg-white">
            {leaders.map((data:leaderType, index:number) => {
              return <LeaderList key={index}  data={data} index={index} />;
            })}
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
