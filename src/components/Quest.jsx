"use client";

import { useGlobalContext } from "@/context/ContextProvider";
import { insertCollection } from "@/utils/firebase";
import storeDataInLocalStorage, { gameConfig } from "@/utils/local.db";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import TASK_TEXT from "../../public/assets/images/TASK-TEXT.png";

const Quest = ({ gameData, currentMascot }) => {
  const numberOfClicks = gameData?.[currentMascot?.version]?.numberOfClicks;
  const quest = gameData?.[currentMascot?.version]?.quest;
  // const quest1= process.env.QUEST_1 || 10;
  // const quest2= process.env.QUEST_2 || 20;
  // const quest3= process.env.QUEST_3 || 30;
  // const quest4= process.env.QUEST_4 || 40;
  // const quest5= process.env.QUEST_5 || 50;

  const quest1 = gameConfig.quest1;
  const quest2 = gameConfig.quest2;
  const quest3 = gameConfig.quest3;
  const quest4 = gameConfig.quest4;
  const quest5 = gameConfig.quest5;
  return (
    <div className="w-[30%] h-screen flex justify-center items-center">
      {/* <Tilt> */}
      {/* <div style={{ height: '300px', backgroundColor: 'darkgreen' }}> */}
      <div className=" w-[323px] h-[387px] bg-quest-card bg-no-repeat bg-cover rounded-[14px] shadow-inner  relative flex flex-col justify-center items-center">
        <div className="absolute top-[-50px] -left-1 w-[65%]">
          <h3 className="text-fuchsia-600 text-[80px] task font-LuckiestGuy relative  z-20">
            Task
            <Image
              height={29}
              width={238}
              src={TASK_TEXT}
              alt="TASK_TEXT"
              className="absolute object-cover  bottom-3 -z-20"
            ></Image>
          </h3>
        </div>

        <div className="w-[95%]  flex flex-col justify-center items-center gap-2 ">
          <div className=" flex justify-between items-center gap-3">
            <div className="flex items-center justify-center gap-1">
              <div className="relative">
                <p
                  className={` ${
                    quest >= 1 ? "passed-quest1" : "tsk-text"
                  }  font-LuckiestGuy `}
                >
                  {quest1.clicks}
                </p>
                {
                  quest>=1 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-4 w-4 passed-quest2 absolute top-1 -left-2"
                  alt="hamar image"
                />
                }
                {
                  quest>=1 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-5 w-5 passed-quest2 absolute bottom-0 left-[30%]"
                  alt="hamar image"
                />
                }
                
                {/* <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-4 w-4 passed-quest2 absolute bottom-0 -right-2 top-[30%]"
                alt="hamar image"
              /> */}
              </div>
              <Image
                src={"/assets/images/hamar2.png"}
                width={30}
                height={30}
                alt="hamar image "
                className="w-[30px] h-[30px]"
              />
            </div>
            <span className="text-white block text-[10px] space-x-1">
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
            <div className="flex items-center justify-center gap-2">
              <p
                className={` ${
                  quest >= 1 ? "passed-quest2" : "tsk-point"
                }  font-LuckiestGuy `}
              >
                {quest1?.points}
              </p>
              {
                quest>=1? <div className="relative">
                  <Image
                src={"/assets/images/gem3.png"}
                width={40}
                height={40}
                className="h-7 w-7 passed-quest2"
                alt="hamar image"
              />
              <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-3 w-3 passed-quest2 absolute bottom-[15%] right-[10%]"
                alt="hamar image"
              />
                </div>: <Image
              src={"/assets/images/gem.png"}
              width={40}
              height={40}
              className="h-7 w-7 passed-quest2"
              alt="hamar image"
            />
              }
              
            </div>

            
            
          </div>
          <Image
              src={"/assets/images/separetor.png"}
              width={40}
              height={260}
              className="h-[3px] w-36"
              alt="hamar image"
            />
          <div className=" flex justify-between items-center gap-3">
            <div className="flex items-center justify-center gap-1">
              <div className="relative">
                <p
                  className={` ${
                    quest >= 2 ? "passed-quest1" : "tsk-text"
                  }  font-LuckiestGuy `}
                >
                  {quest2?.clicks}
                </p>
                {
                  quest>=2 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-4 w-4 passed-quest2 absolute top-1 -left-2"
                  alt="hamar image"
                />
                }
                {
                  quest>=2 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-5 w-5 passed-quest2 absolute bottom-0 left-[30%]"
                  alt="hamar image"
                />
                }
              </div>
              <Image
                src={"/assets/images/hamar2.png"}
                width={30}
                height={30}
                alt="hamar image "
                className="w-[30px] h-[30px]"
              />
            </div>
            <span className="text-white block text-[10px] space-x-1">
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
            <div className="flex items-center justify-center gap-2">
              <p
                className={` ${
                  quest >= 2 ? "passed-quest2" : "tsk-point"
                }  font-LuckiestGuy `}
              >
                {quest2?.points}
              </p>
              {
                quest>=2? <div className="relative">
                  <Image
                src={"/assets/images/gem3.png"}
                width={40}
                height={40}
                className="h-7 w-7 passed-quest2"
                alt="hamar image"
              />
              <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-3 w-3 passed-quest2 absolute bottom-[15%] right-[10%]"
                alt="hamar image"
              />
                </div>: <Image
              src={"/assets/images/gem.png"}
              width={40}
              height={40}
              className="h-7 w-7 passed-quest2"
              alt="hamar image"
            />
              }
              
            </div>

            
            
          </div>
          <Image
              src={"/assets/images/separetor.png"}
              width={40}
              height={260}
              className="h-[3px] w-36"
              alt="hamar image"
            />
          <div className=" flex justify-between items-center gap-3">
            <div className="flex items-center justify-center gap-1">
              <div className="relative">
                <p
                  className={` ${
                    quest >= 3 ? "passed-quest1" : "tsk-text"
                  }  font-LuckiestGuy `}
                >
                  {quest3?.clicks}
                </p>
                {
                  quest>=3 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-4 w-4 passed-quest2 absolute top-1 -left-2"
                  alt="hamar image"
                />
                }
                {
                  quest>=3 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-5 w-5 passed-quest2 absolute bottom-0 left-[30%]"
                  alt="hamar image"
                />
                }
                
                {/* <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-4 w-4 passed-quest2 absolute bottom-0 -right-2 top-[30%]"
                alt="hamar image"
              /> */}
              </div>
              <Image
                src={"/assets/images/hamar2.png"}
                width={30}
                height={30}
                alt="hamar image "
                className="w-[30px] h-[30px]"
              />
            </div>
            <span className="text-white block text-[10px] space-x-1">
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
            <div className="flex items-center justify-center gap-2">
              <p
                className={` ${
                  quest >= 3 ? "passed-quest2" : "tsk-point"
                }  font-LuckiestGuy `}
              >
                {quest3.points}
              </p>
              {
                quest>=3? <div className="relative">
                  <Image
                src={"/assets/images/gem3.png"}
                width={40}
                height={40}
                className="h-7 w-7 passed-quest2"
                alt="hamar image"
              />
              <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-3 w-3 passed-quest2 absolute bottom-[15%] right-[10%]"
                alt="hamar image"
              />
                </div>: <Image
              src={"/assets/images/gem.png"}
              width={40}
              height={40}
              className="h-7 w-7 passed-quest2"
              alt="hamar image"
            />
              }
              
            </div>

            
            
          </div>
          <Image
              src={"/assets/images/separetor.png"}
              width={40}
              height={260}
              className="h-[3px] w-36"
              alt="hamar image"
            />
          <div className=" flex justify-between items-center gap-3">
            <div className="flex items-center justify-center gap-1">
              <div className="relative">
                <p
                  className={` ${
                    quest >= 4 ? "passed-quest1" : "tsk-text"
                  }  font-LuckiestGuy `}
                >
                  {quest4?.clicks}
                </p>
                {
                  quest>=4 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-4 w-4 passed-quest2 absolute top-1 -left-2"
                  alt="hamar image"
                />
                }
                {
                  quest>=4 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-5 w-5 passed-quest2 absolute bottom-0 left-[30%]"
                  alt="hamar image"
                />
                }
                
                {/* <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-4 w-4 passed-quest2 absolute bottom-0 -right-2 top-[30%]"
                alt="hamar image"
              /> */}
              </div>
              <Image
                src={"/assets/images/hamar2.png"}
                width={30}
                height={30}
                alt="hamar image "
                className="w-[30px] h-[30px]"
              />
            </div>
            <span className="text-white block text-[10px] space-x-1">
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
            <div className="flex items-center justify-center gap-2">
              <p
                className={` ${
                  quest >= 4 ? "passed-quest2" : "tsk-point"
                }  font-LuckiestGuy `}
              >
                {quest4?.points}
              </p>
              {
                quest>=4? <div className="relative">
                  <Image
                src={"/assets/images/gem3.png"}
                width={40}
                height={40}
                className="h-7 w-7 passed-quest2"
                alt="hamar image"
              />
              <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-3 w-3 passed-quest2 absolute bottom-[15%] right-[10%]"
                alt="hamar image"
              />
                </div>: <Image
              src={"/assets/images/gem.png"}
              width={40}
              height={40}
              className="h-7 w-7 passed-quest2"
              alt="hamar image"
            />
              }
              
            </div>

            
            
          </div>
          <Image
              src={"/assets/images/separetor.png"}
              width={40}
              height={260}
              className="h-[3px] w-36"
              alt="hamar image"
            />
          <div className=" flex justify-between items-center gap-3">
            <div className="flex items-center justify-center gap-1">
              <div className="relative">
                <p
                  className={` ${
                    quest >= 5 ? "passed-quest1" : "tsk-text"
                  }  font-LuckiestGuy `}
                >
                {quest5?.clicks}
                </p>
                {
                  quest>=5 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-4 w-4 passed-quest2 absolute top-1 -left-2"
                  alt="hamar image"
                />
                }
                {
                  quest>=5 && <Image
                  src={"/assets/images/star.png"}
                  width={10}
                  height={10}
                  className="h-5 w-5 passed-quest2 absolute bottom-0 left-[30%]"
                  alt="hamar image"
                />
                }
                
                {/* <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-4 w-4 passed-quest2 absolute bottom-0 -right-2 top-[30%]"
                alt="hamar image"
              /> */}
              </div>
              <Image
                src={"/assets/images/hamar2.png"}
                width={30}
                height={30}
                alt="hamar image "
                className="w-[30px] h-[30px]"
              />
            </div>
            <span className="text-white block text-[10px] space-x-1">
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
            <div className="flex items-center justify-center gap-2">
              <p
                className={` ${
                  quest >= 5 ? "passed-quest2" : "tsk-point"
                }  font-LuckiestGuy `}
              >
                {quest5?.points}
              </p>
              {
                quest>=5? <div className="relative">
                  <Image
                src={"/assets/images/gem3.png"}
                width={40}
                height={40}
                className="h-7 w-7 passed-quest2"
                alt="hamar image"
              />
              <Image
                src={"/assets/images/star.png"}
                width={10}
                height={10}
                className="h-3 w-3 passed-quest2 absolute bottom-[15%] right-[10%]"
                alt="hamar image"
              />
                </div>: <Image
              src={"/assets/images/gem.png"}
              width={40}
              height={40}
              className="h-7 w-7 passed-quest2"
              alt="hamar image"
            />
              }
              
            </div>

            
            
          </div>
          <Image
              src={"/assets/images/separetor.png"}
              width={40}
              height={260}
              className="h-[3px] w-36"
              alt="hamar image"
            />
        </div>
      </div>
    </div>
  );
};

export default Quest;