import { Nav } from "./components/Nav";
import Profile from "./components/Profile";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="min-h-full w-[50%] flex-col flex text-white mb-9">
      <Nav/>
      <div style={{
      background: 'rgba(255, 255, 255, 0.07)',
      backdropFilter: 'blur(10px)',
      borderRadius: '10px',
    }}
    className="h-full pl-14 pr-14 pt-5"
    >
      <Profile/>
      <hr/>
      <Content/>
    </div>
    </div>
  );
}
