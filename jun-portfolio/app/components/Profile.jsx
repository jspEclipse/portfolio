import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Profile(){
    return (
    <div className="flex">
        <div className="flex m-auto">
          <Avatar className="w-20 h-20 mr-4">
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="font-bold text-6xl tracking-wider m-auto">
            Jun Park
          </div>
        </div>
    </div>
    );
}