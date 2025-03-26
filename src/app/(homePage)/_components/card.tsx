import React from "react";
import Image from "next/image";
import { GoRocket } from "react-icons/go";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cardType } from "@/lib/types";


export default function Card({ data }: { data:cardType }) {
  return (
    <div className="relative z-20 lg:max-w-[300px]  flex items-center justify-center w-full">
      <div className="">
        {/* bg */}
        <div className="absolute bottom-0 inset-x-0 -z-10 flex items-center justify-center">
          <div className=" w-[200px] md:w-[250px] 2xl:w-[300px] aspect-square rounded-full bg-[#f3f3f3] "></div>
        </div>

        {/* details */}
        <div className=" flex flex-col  justify-center">
          <div className="bg-zinc-300 rounded-md overflow-hidden w-[180px] h-[200px] m-auto flex items-center relative mb-4">
            <div className="bg-black/20 absolute inset-0 z-30"></div>
            <Image
              src={data.image}
              alt={data.title}
              width={300}
              height={0}
              className="scale-[220%]  h-auto relative inset-0 z-10"
              loading="lazy"
              priority={false}
            />
          </div>
          <div className=" w-1/2 m-auto text-center ">
            <h3 className=" md:w-1/2 m-auto  text-lg font-semibold text-center text-[#474747]">
              {data.title}
            </h3>
            <p className="!mb-2">{data.description}</p>
          </div>
        </div>

        <Dialog>
          <DialogTrigger className="w-full">
            <span className="sec_btn capitalize font_inter w-3/4 mx-auto">
              <GoRocket />
              {data.btn}
            </span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription className="text-black">
                <div className="overflow-hidden">
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={100}
                    height={0}
                    priority={false}
                    className=" w-full h-auto scale-110 hover:scale-125 duration-300 ease-in-out"
                  />
                </div>
                <div className="px-5 mt-2">
                  <h3 className="capitalize font-semibold text-base ">
                    Ready to start {data.title}
                  </h3>
                  <p className=" text-sm font-light">
                    This level will test your knowledge on:
                  </p>
                  <ul className="list-disc px-6 text-sm font-light">
                    {data["list"]?.map((e: string) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                  <span className="text-white shadow_circle  rounded-md py-2.5  !bg-main  duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 font-medium capitalize font_inter w-full mx-auto my-5">
                    <GoRocket className="text-xl" />
                    {data.btn}
                  </span>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
