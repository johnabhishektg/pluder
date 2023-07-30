"use client";

import { useCustomToast } from "@/components/hooks/use-custom-toast";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateTopicPayload } from "@/lib/validators/topic";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const page: FC = ({}) => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();
  const { loginToast } = useCustomToast();

  const { mutate: createTopic, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateTopicPayload = {
        name: input,
      };
      const { data } = await axios.post("/api/topic", payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: "Topic already exists.",
            description: "Please choose a diffrent topic name.",
            variant: "destructive",
          });
        }

        if (err.response?.status === 422) {
          return toast({
            title: "Invalid topic name",
            description: "Please choose a name between 3 and 21 characters.",
            variant: "destructive",
          });
        }

        if (err.response?.status === 401) {
          return loginToast();
        }
      }
      toast({
        title: "There was an error.",
        description: "Could not create topic.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      router.push(`/r/${data}`);
    },
  });

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

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>

          <Button
            onClick={() => createTopic()}
            disabled={isLoading || input.length === 0}
          >
            {isLoading ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <p> Creating Community </p>
              </div>
            ) : (
              <p>Create Community</p>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
