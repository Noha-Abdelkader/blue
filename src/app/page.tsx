import Link from "next/link";
import { MdOutlineAdsClick } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-main-900 min-h-screen text-white text-4xl flex flex-col gap-10 items-center justify-center">
      <h1>Blue Task</h1>
      <Link href={"/home"}>
        <div className="aspect-square  bg-white bg-opacity-25 rounded-full flex items-center justify-center p-4 gap-2">
          Home page
          <MdOutlineAdsClick />
        </div>
      </Link>
    </div>
  );
}
