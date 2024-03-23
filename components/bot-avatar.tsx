import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAvatarProps {
  src?: string;
};



export const BotAvatar = ({src}:BotAvatarProps) => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src={src ||"/logo.png"} />
    </Avatar>
  );
};

