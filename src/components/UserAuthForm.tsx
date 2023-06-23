"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Icons from "./Icons";

import { FC } from "react";

interface UserAuthFormProps {}

const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginWithGoogle = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <Button onClick={loginWithGoogle} size="sm">
        {isLoading ? null : <Icons.google className="w-4 h-4 mr-2" />} Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
