import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Profile(){
    return (
    <div className="flex flex-col">
      <div className="flex mb-5">
        <div className="flex">
          <Avatar className="w-20 h-20 mr-4">
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold text-6xl tracking-wider m-auto">
              Jun Park
            </div>
            <div>
              Hi! I'm Jun, a frontend developer from Chattanooga, Tennessee.
            </div>
          </div>
        </div>
      </div>

    </div>
    );
}