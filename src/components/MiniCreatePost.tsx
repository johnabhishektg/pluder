"use client";

import { Session } from "next-auth";
import { useRouter, usePathname } from "next/navigation";
import { FC } from "react";

interface MiniCreatePostProps {
  //   session: Session | null;
}

const MiniCreatePost: FC<MiniCreatePostProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  return <div>MiniCreatePost</div>;
};

export default MiniCreatePost;
