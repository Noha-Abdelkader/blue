import { TfiCup } from "react-icons/tfi";
import { BiTargetLock } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { rankType } from "../types";



export  const rank:rankType[] = [
  {
    title: "Score Big",
    desc: "Your score is the primary factor in ranking. Answer correctly to earn points, and aim for perfection to stay ahead",
    icon: TfiCup,
    image: "/assets/images/icon1.png",
  },
  {
    title: "Fewer Trials",
    desc: "Efficiency matters! The fewer attempts you need to complete a level, the better your ranking will be",
    icon: BiTargetLock,
    image: "/assets/images/icon2.png",
  },
  {
    title: "Beat the Clock",
    desc: "Speed is key! Complete the challenges faster to climb the leaderboard and secure your spot at the top",
    icon: BsClockHistory,
    image: "/assets/images/icon3.png",
  },
];
