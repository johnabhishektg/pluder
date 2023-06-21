import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center">
          <Image
            src="/treasure.png"
            width={45}
            height={45}
            className="object-fit cursor-pointer"
            alt="Picture of the author"
          />
          <p className="hidden text-zinc-800 text-lg ml-1 md:block">Plunder</p>
        </div>
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
