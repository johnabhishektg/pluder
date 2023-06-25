"use client";

import { useState, FC } from "react";
import { Button } from "./ui/button";
import Icons from "./Icons";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/hooks/use-toast";

import { cn } from "@/lib/utils";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const loginWithGoogle = async () => {
    setIsLoading(false);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "There was a problem",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button onClick={loginWithGoogle} className="w-full" size="sm">
        {isLoading ? null : <Icons.google className="w-4 h-4 mr-2" />} Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
