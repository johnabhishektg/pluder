import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AvatarProps } from "@radix-ui/react-avatar";
import { User } from "next-auth";
import { FC } from "react";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <div>
      <Avatar>
        {user.image ? (
          <AvatarImage src={user.image} />
        ) : (
          <AvatarFallback>{user?.name}</AvatarFallback>
        )}
      </Avatar>
    </div>
  );
};

export default UserAvatar;
