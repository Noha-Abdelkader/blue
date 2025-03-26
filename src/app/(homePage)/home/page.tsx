import Image from "next/image";
import React from "react";
import Link from "next/link";

// icons
import { CiMedal } from "react-icons/ci";
import { GoRocket } from "react-icons/go";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// component
import Card from "../_components/card";
import LeaderList from "../_components/leader-list";
import { leaders } from "@/lib/data/leaders";
import { competition } from "@/lib/data/competition";
import { competitionType, leaderType } from "@/lib/types";

export default function Page() {
  return (
    <main>
      {/* 1st */}

      {/* start */}
      <section className=" overflow-hidden relative">
        {/* bg animated */}
        <div className="zoom-container ">
          <div className=" zoom-image  bg-[url('/assets/images/bg.jpeg')]    ">
            <div
              className={` bg-[#0096D7] bg-opacity-60   min-h-[60dvh] max-h-[60dvh] md:min-h-[70dvh]  md:max-h-[70dvh]`}
            ></div>
          </div>
        </div>
        {/* <div className="radial-spot "></div> */}

        {/* Data */}
        <div className="charts  absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-12">
          {/* header */}
          <div className="text-white flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Image
                src={"/assets/images/cup.png"}
                alt="winner cup"
                width={30}
                height={0}
                loading="lazy"
                priority={false}
              />
              <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold">
                Top Performers
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl">Who's Leading the way ?</h2>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="sec_btn capitalize font_inter my-4 px-10 "
              >
                <GoRocket />
                Start Game
              </button>
            </div>
          </div>

          {/* charts */}
          <div className="flex items-end">
            {/* one */}
            <div className="relative ">
              {/* image */}
              <div className="cylinder_image cylinder_image_1 ">
                <Image
                  src={"/assets/images/1.png"}
                  alt="user"
                  width={60}
                  height={60}
                  className="aspect-square rounded-full"
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div className="cylinder cylinder_1">
                {/* inside */}
                <div className="points">
                  <div className="text-3xl">
                    <h5>
                      3<sup className="ms-0.2">rd</sup>
                    </h5>
                  </div>

                  <div className="circle circle_1">
                    <span className="text-xl ">110</span>
                    <h5 className="font-medium">points</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* two */}
            <div className="relative ">
              {/* image */}
              <div className="cylinder_image cylinder_image_2 ">
                {/* <div className= "bg-[url('/assets/images/1.png')]  size-16 rounded-full  aspect-square object-cover"></div> */}
                <Image
                  src={"/assets/images/2.jpeg"}
                  alt="user"
                  width={60}
                  height={60}
                  className="aspect-square rounded-full "
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div className="cylinder cylinder_2">
                <div className="points">
                  <div className="text-3xl">
                    <h5>
                      1<sup className="ms-0.2">st</sup>
                    </h5>
                  </div>

                  <div className="circle circle_2">
                    <span className="text-xl ">120</span>
                    <h5 className="font-medium">points</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* three */}
            <div className="relative ">
              {/* image */}
              <div className="cylinder_image cylinder_image_3 ">
                <Image
                  src={"/assets/images/3.png"}
                  alt="user"
                  width={60}
                  height={60}
                  className="aspect-square rounded-full"
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div className="cylinder cylinder_3">
                <div className="points">
                  <div className="text-3xl">
                    <h5>
                      2<sup className="ms-0.2">nd</sup>
                    </h5>
                  </div>

                  <div className="circle circle_3">
                    <span className="text-xl ">112</span>
                    <h5 className="font-medium">points</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="wave absolute -bottom-10 left-0"></div> */}
      </section>
      {/* <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="60%" y1="99%" x2="40%" y2="1%">
            <stop offset="5%" stop-color="#0096d7"></stop>
            <stop offset="95%" stop-color="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 L 0,250 C 202.13333333333333,240.66666666666669 404.26666666666665,231.33333333333334 561,219 C 717.7333333333333,206.66666666666666 829.0666666666666,191.33333333333331 968,171 C 1106.9333333333334,150.66666666666669 1273.4666666666667,125.33333333333334 1440,100 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="60%" y1="99%" x2="40%" y2="1%">
            <stop offset="5%" stop-color="#0096d7"></stop>
            <stop offset="95%" stop-color="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 L 0,383 C 172.40000000000003,374.3333333333333 344.80000000000007,365.66666666666663 515,343 C 685.1999999999999,320.33333333333337 853.2,283.66666666666663 1007,263 C 1160.8,242.33333333333334 1300.4,237.66666666666669 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg> */}
      {/* <svg
        width="100%"
        height="10%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="60%" y1="99%" x2="40%" y2="1%">
            <stop offset="5%" stop-color="#0096d7"></stop>
            <stop offset="95%" stop-color="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 L 0,383 C 172.40000000000003,374.3333333333333 344.80000000000007,365.66666666666663 515,343 C 685.1999999999999,320.33333333333337 853.2,283.66666666666663 1007,263 C 1160.8,242.33333333333334 1300.4,237.66666666666669 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg> */}

      {/* 2nd */}
      <section className="relative">
        <div className="sec_wrap padd ">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-0  ">
            {/* left */}
            <div className=" pt-8 ">
              <h2>see how you rank!</h2>
              <p className="w-[70%] mx-auto">
                Check out the full leaderboard and see where you stand. Compete
                with your peers to climb to the top
              </p>
              <div className="flex items-center justify-center">
                <Link href={"/leader"} className="text-sm">
                  <div className="aspect-square w-48 rounded-full bg-[radial-gradient(closest-side_at_center,_#0096D7,_#007AAF)] shadow_circle flex items-center justify-center   text-white">
                    <div className="w-1/2 m-auto text-center">
                      <CiMedal className="w-full text-4xl mb-2" />
                      <span>View Full Leaderboard</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* right */}
            <div className="shadow_card rounded-[50px] py-5 px-6 text-xs  relative z-10">
              {leaders.slice(0, 7).map((data: leaderType, index: number) => {
                return <LeaderList key={index} data={data} index={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
      {/* 3rd */}
      <section className="bg-[#FCFCFC] ">
        <div className="sec_wrap padd">
          <header>
            <h2>Unlock the Secrets of the Competition!</h2>
            <p>
              Each level is a new room in the escape challenge, filled with
              mysteries and puzzles from the Competition Guide. Answer the
              questions, solve the clues, and progress to the next stage. Are
              you ready to escape?
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-20">
            {competition.map((ele: competitionType, index: number) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center relative"
                >
                  <div className="absolute inset-0 z-10  flex items-center">
                    <MdOutlineKeyboardDoubleArrowRight
                      className={`text-3xl text-[#dbdada] 
                         translate-x-[-200%]
                         ${index == 0 && "hidden"}
                         ${index == 3 && "hidden"}
                         ${index != 0 && index != 3 && "hidden lg:block"}
                         
                         `}
                    />
                  </div>
                  <Card data={ele} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
