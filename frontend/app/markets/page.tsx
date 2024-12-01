import { Markets } from "../components/Markets";
import Image from "next/image";
import myImage from '../../public/bg3.jpg'
export default function Page() {
    return  <div className="flex flex-col h-fit -z-10  overflow-hidden scrollbar-none ">
     <div className="absolute -z-10 h-screen overflow-hidden scrollbar-none w-full dark:bg-black bg-black dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
       
      </p>
    </div>
    <main className="flex  flex-col items-center justify-between p-24 space-y-3">
     
      <div className="absolute bg-gray-100 rounded-md border border-black flex w-3/5 flex-1 items-center justify-center scrollbar-none p-10 ">
    <Image className=" "
      src={myImage} // Replace with your image path
      alt="Landing Page"
      layout="fill" // Makes the image cover the parent container
      objectFit="cover" // Ensures the image scales properly
      priority // Ensures the image loads faster
    />
  
  </div>
    <Markets />
  </main></div>
}