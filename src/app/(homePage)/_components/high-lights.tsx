"use client";

import React  , { useEffect , useState }from "react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { leaders } from "@/lib/data/leaders";
import { leaderType } from "@/lib/types";

function setColor(index: number, pointOnly?: boolean) {
  if (index == 0) return "#FFD700";
  if (index == 1) return "#C0C0C0";
  if (index == 2) return "#CD7F32";
  if ((index == 8 || index == 14) && pointOnly) return "#EF8D61";
  else return "#000"
}



export default function HighLights() {
 const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
   setIsMounted(true);
 }, []);

 if (!isMounted) {
   return <div className="sec_wrap h-[400px] animate-pulse bg-gray-100" />;
 }
  return (
    <section className="relative">
      <div className="sec_wrap">
        <header>
          <h2>Top Highlights</h2>
          <p>
            See who’s setting the bar high with outstanding scores,
            lightning-fast completions, and unmatched efficiency
          </p>
        </header>
        <Tabs defaultValue="scores" className="w-full">
          <TabsList className="padd">
            <TabsTrigger value="scores">Higher Scores</TabsTrigger>
            <TabsTrigger value="completion">Faster Completion</TabsTrigger>
            {/* <TabsTrigger value="attempts">Minimum Attempts</TabsTrigger> */}
          </TabsList>
          <TabsContent value="scores">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              loop={true}
              modules={[Navigation]}
              navigation={true}
              className="mySwiper !px-14 bg-zinc-100 !pb-4"
            >
              {leaders.map((ele:leaderType, index:number) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center mb-2 p-2">
                      <span
                        className={`size-6  aspect-square rounded-full text-xs  flex items-center justify-center text-[${setColor(
                          index,
                          true
                        )}] bg-[${setColor(
                          index,
                          true
                        )}]  border-2  border-[${setColor(index)}] `}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className=" overflow-hidden flex items-center justify-center">
                      <Image
                        src={ele.img}
                        alt={ele.name}
                        width={200}
                        height={200}
                        loading="lazy"
                        priority={false}
                        className=" max-h-[150px] object-contain scale-150 translate-y-1/4 "
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm my-2 font-semibold text-gray-400">
                        {ele.points} points
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </TabsContent>
          <TabsContent value="completion">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              loop={true}
              modules={[Navigation]}
              navigation={true}
              className="mySwiper !px-14 bg-zinc-100 !pb-4"
            >
              {leaders.reverse().map((ele:leaderType, index:number) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center mb-2 p-2 ">
                      <span
                        className={`size-6  aspect-square rounded-full text-xs  flex items-center justify-center text-[${setColor(
                          index,
                          true
                        )}] !bg-[${setColor(
                          index,
                          true
                        )}]   border-2  !border-[${setColor(index)}] `}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className=" overflow-hidden flex items-center justify-center">
                      <Image
                        src={ele.img}
                        alt={ele.name}
                        width={200}
                        height={200}
                        className=" max-h-[150px] object-contain scale-150 translate-y-1/4 "
                        loading="lazy"
                        priority={false}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm my-2 font-semibold text-gray-400">
                        {ele.points} points
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </TabsContent>
          
        </Tabs>
        <div className=" absolute -top-28  -z-10 w-full">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 L 0,100 C 127.96428571428572,129.46428571428572 255.92857142857144,158.92857142857142 384,148 C 512.0714285714286,137.07142857142858 640.2500000000001,85.75 768,69 C 895.7499999999999,52.24999999999999 1023.0714285714284,70.07142857142857 1135,81 C 1246.9285714285716,91.92857142857143 1343.4642857142858,95.96428571428572 1440,100 L 1440,400 L 0,400 Z"
              stroke="none"
              stroke-width="0"
              fill="#0096d7"
              fill-opacity="0.53"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 200)"
            ></path>
            <path
              d="M 0,400 L 0,233 C 114.57142857142858,227.42857142857144 229.14285714285717,221.85714285714286 337,231 C 444.85714285714283,240.14285714285714 546.0000000000001,264 664,264 C 781.9999999999999,264 916.8571428571429,240.14285714285717 1049,231 C 1181.142857142857,221.85714285714283 1310.5714285714284,227.42857142857142 1440,233 L 1440,400 L 0,400 Z"
              stroke="none"
              stroke-width="0"
              fill="#0096d7"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-1"
              transform="rotate(-180 720 200)"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
