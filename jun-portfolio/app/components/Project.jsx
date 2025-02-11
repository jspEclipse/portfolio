import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Project(props) {
  return (
    <Link href={props.link} passHref>
        <Card className="bg-gray-900 text-white rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start border-black mb-8 hover:scale-105 transition-transform duration-200">
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <p className="text-gray-400 mt-2">{props.text}</p>
          </div>
          <div className="w-full md:w-1/2 h-48 md:h-56 relative rounded-xl overflow-hidden">
            <Image src={props.image} alt={props.alt} layout="fill" objectFit="cover" />
          </div>
        </Card>
    </Link>
  );
}
