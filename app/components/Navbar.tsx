import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import BasicModal from "./Modal";
import Navlinks from "./Navlinks";
import { navlinks } from "@/lib/utils";
import Link from "next/link";
// import * as dayjs from "dayjs";
// dayjs().format();

const Navbar = () => {
  return (
    <div className="flex">
      <div className="bg-black h-16 w-full p-4 flex justify-between">
        <div className="flex justify-center text-center">
          <h2 className="text-white text-xl md:text-3xl italic uppercase">
            classic travel
          </h2>
          <div className="flex items-center ml-2">
            <FlightTakeoffIcon className="text-white w-5 h-5" />
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-3 justify-between items-center text-white">
            {navlinks.map((navlink, index) => {
              return (
                <Link href={navlink.url} key={index}>
                  <li className="uppercase text-sm hover:text-yellow-400">
                    {navlink.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center md:hidden">
          <BasicModal title={"Classic Travel+"} extraContent={<Navlinks />} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
