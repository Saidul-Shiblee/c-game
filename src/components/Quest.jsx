"use client";

import { useGlobalContext } from "@/context/ContextProvider";
import { insertCollection } from "@/utils/firebase";
import storeDataInLocalStorage from "@/utils/local.db";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import TASK_TEXT from '../../public/assets/images/TASK-TEXT.png'

const Quest = ({ gameData, currentMascot }) => {
  const numberOfClicks = gameData?.[currentMascot?.version]?.numberOfClicks;
  const quest = gameData?.[currentMascot?.version]?.quest;
  return (
    <div className="w-[20%] h-screen flex justify-center items-center">
      {/* <Tilt> */}
        {/* <div style={{ height: '300px', backgroundColor: 'darkgreen' }}> */}
        <div className=" w-[90%] h-[387px] bg-quest-card bg-no-repeat bg-cover rounded-[14px] shadow-inner  relative flex flex-col justify-center items-center">
         
         <div className="absolute top-[-50px] -left-1 w-[65%]">  
         <h3 className="text-fuchsia-600 text-[80px] task font-LuckiestGuy relative  z-20">
            Task
            <Image
              height={29}
              width={238}
             src={TASK_TEXT}
             alt='TASK_TEXT'
            className="absolute object-cover  bottom-3 -z-20"
            >

            </Image>
          </h3>
         </div>
         


          <div className="w-[95%]  flex flex-col justify-center items-center gap-2 ">
            <div className=" flex justify-between items-center gap-3">
              <div className="flex items-center justify-center gap-1"><p className={` passed-quest1 font-LuckiestGuy `}>100</p>
              <Image 
              src={"/assets/images/hamar2.png"}
              width={30}
              height={30}
              alt="hamar image "
              className="w-[30px] h-[30px]"
              />
              </div>
              <span className="text-white block text-[10px] space-x-1"><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span></span>
             <div className="flex items-center justify-center gap-2">
             <p className="passed-quest2">100</p>
             <Image 
              src={"/assets/images/gem.png"}
              width={40}
              height={40}
              className="h-7 w-7 passed-quest2"
              alt="hamar image"
              />
             </div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-3"><span className={`${
            quest >= 2 ? "text-yellow-400" : "text-white"
          } text-2xl font-extrabold outlinefont`}>200</span>
              <Image 
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              alt="hamar image"
              />
              </div>
              <span className="text-white">. . . . .</span>
              <div className="flex items-center">
             <p className="text-2xl font-semibold text-white font-LuckiestGuy outlinefont">100PT</p>
             <Image 
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-7 w-7"
              alt="hamar image"
              />
             </div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-3"><span className={`${
            quest >= 3 ? "text-yellow-400" : "text-white"
          } text-2xl font-extrabold outlinefont`}>500</span>
              <Image 
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              alt="hamar image"
              />
              </div>
              <span className="text-white">. . . . .</span>
              <div className="flex items-center">
             <p className="text-2xl font-semibold text-white font-LuckiestGuy outlinefont">100PT</p>
             <Image 
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-7 w-7"
              alt="hamar image"
              />
             </div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-3"><span className={`${
            quest >= 4 ? "text-yellow-400" : "text-white"
          } text-2xl font-extrabold outlinefont`}>1000</span>
              <Image 
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              alt="hamar image"
              />
              </div>
              <span className="text-white">. . . . .</span>
              <div className="flex items-center">
             <p className="text-2xl font-semibold text-white font-LuckiestGuy outlinefont">100PT</p>
             <Image 
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-7 w-7"
              alt="hamar image"
              />
             </div>
            </div>
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-2"><span className={`${
            quest >= 5 ? "text-yellow-400" : "text-white"
          } text-2xl font-extrabold outlinefont`}>5000</span>
              <Image 
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              alt="hamar image"
              />
              </div>
              <span className="text-white">. . . . .</span>
              <div className="flex items-center">
             <p className="text-2xl font-semibold text-white font-LuckiestGuy outlinefont">100PT</p>
             <Image 
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-7 w-7"
              alt="hamar image"
              />
             </div>
            </div>
       







            
          </div>
        </div>
      
    </div>
  );
};

export default Quest;
