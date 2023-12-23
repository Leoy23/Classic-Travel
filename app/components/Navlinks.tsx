import { navlinks } from "@/lib/utils";
import Link from "next/link";

const Navlinks = () => {
  return (
    <div>
      <ul className="text-center border-2 border-white rounded-lg">
        {navlinks.map((navlink, index) => {
          return (
            <Link href={navlink.url} key={index}>
              <li>{navlink.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navlinks;
