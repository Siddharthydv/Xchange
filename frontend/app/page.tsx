import Image from "next/image";
import myImage from "../public/bg2.jpg"
import myImage1 from '../public/bg4.webp'
import { Markets } from "./components/Markets";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function Home() {
  const words = [
    {
      text: "Trade ",
    },
    {
      text: "Smarter",
    },
    {
      text: "With",
    },
    {
      text: "Minimum Efforts-",
    },
    {
      text: "XCHANGE.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (<>
    <div className="relative bg-black  flex flex-grow  p-10 items-center justify-center">
    <Image className="rounded-md "
      src={myImage} // Replace with your image path
      alt="Landing Page"
      layout="fill" // Makes the image cover the parent container
      objectFit="cover" // Ensures the image scales properly
      priority // Ensures the image loads faster
    />
    <div className="z-10">
    <TypewriterEffectSmooth words={words}/>
    </div>
    {/* <div className="z-10  text-white text-5xl font-extrabold">Trade Smarter, Faster, and Securely — Your Gateway to the Future of Crypto</div> */}
    {/* <div className="z-10 flex border border-red-500 bg-black bg-opacity-50  w-fit space-x-2 h-2/3">
      <div className="text text-4xl font-mono font-bold">
        YOUR ONE STOP <br></br>TO EXCHANGE CRYPTO
      </div>
    <Image className="rounded-md  "
      src={myImage1} // Replace with your image path
      alt="Landing Page"
       // Makes the image cover the parent container
      objectFit="cover" // Ensures the image scales properly
      priority // Ensures the image loads faster
    />
    </div> */}
    
  </div>
   {/* <div className="text-white z-50">enjshjfebfbe</div> */}
   </>

  );
}
