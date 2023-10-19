import { ThemeSwitcher } from "../ThemeSwitcher";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <div className="sticky flex justify-center top-0 bg-zinc-100 py-2 border-b border-s-zinc-200 w-full z-10">
      <div className="container flex justify-center items-center">
        <div className="basis-full flex space-x-4">
          <Link className={buttonVariants("outline")} href="/">
            Home
          </Link>
          <Link className={buttonVariants("outline")} href="/about">
            About
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
