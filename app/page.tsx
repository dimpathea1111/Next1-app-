import { Card } from "@/component/i-tect-cards/cards";
import Image from "next/image";

export default function Home() {
  return (
  
  <main>
    <h1 className="text-center">Hello world</h1>
    <Card
    source={"/image-1.jpg"}
    title={"Streamlining your design process today."}
    describtion={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations."}
     />
  </main>

  );
}


