import { buttonVariants } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">Forum</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
        {/* feed */}

        {/* subreddit info */}
        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first">
          <div className="bg-emerald-100 px-6 py-4">
            <p className="font-semibold py-3 flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4" />
              Home
            </p>
          </div>

          <div className="my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500">
                Welcome to Plunder homepage. Helping you{" "}
                <span className="underline underline-offset-4">
                  Strike Gold
                </span>{" "}
                with the community
              </p>
            </div>

            <Link
              href="/l/create"
              className={buttonVariants({
                className: "w-full mt-4 mb-4",
              })}
            >
              Join community
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
