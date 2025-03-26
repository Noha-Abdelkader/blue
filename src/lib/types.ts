import { IconType } from "react-icons";

export type competitionType = {
  title: string;
  description: string;
  btn: string;
  image: string;
  list:string[];
};

export type leaderType = {
  name: string;
  points: number;
  img: string;
};

export type rankType = {
  title: string;
  desc: string;
  icon: IconType;
  image: string;
};

export type cardType = {
  image: string;
  title: string;
  description: string;
  btn: string;
  list?: string[];
};
