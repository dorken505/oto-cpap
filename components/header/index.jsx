import Link from "next/link";
import { BiGhost } from "react-icons/bi"

import Navigation from "@/components/nav";

export default function Header() {
  return (
    <header className="bg-gradient-linear text-white flex justify-between items-center">
      <div>
        <Link href="/">
          <BiGhost/>
          <span>
            OTOCPAP
          </span>
        </Link>
      </div>
      <Navigation/>
    </header>
  );
}