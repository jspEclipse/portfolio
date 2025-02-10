import { Nav } from "./components/Nav";
import Profile from "./components/Profile";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-full min-w-[70%] flex-col flex text-white">
      <Nav/>
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
    </div>
  );
}
