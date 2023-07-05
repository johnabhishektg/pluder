"use client";

import { Input } from "@/components/ui/input";
import { FC, useState } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="container flex items-center h-full max-w-3xl mx-auto">
      <div className="relative bg-white w-full h-fit p-4 rounded-lg space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold "> Create a community</h1>
        </div>

        <hr className="bg-zinc-500 h-0.5 my-4 ml-0" />

        <div>
          <h2 className="text-2xl font-medium">Name</h2>
          <p className="text-xs pb-2">
            Community names including capitalization cannot be changed.
          </p>

          <div className="relative">
            <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400">
              r/
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="pl-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
