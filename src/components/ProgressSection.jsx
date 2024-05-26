import Image from "next/image";
import React from "react";
import { ProgressBar } from "react-progressbar-fancy";

const ProgressSection = ({ gameData, currentMascot }) => {
  const quest = gameData?.[currentMascot?.version]?.quest;
  const numberOfClicks = gameData?.[currentMascot?.version]?.numberOfClicks;
  const quest1= process.env.QUEST_1 || 10;
  const quest2= process.env.QUEST_2 || 20;
  const quest3= process.env.QUEST_3 || 30;
  const quest4= process.env.QUEST_4 || 40;
  const quest5= process.env.QUEST_5 || 50;
  return (
    <div className="absolute bottom-10 w-1/2 mx-auto">
      {
        numberOfClicks >= 0 && numberOfClicks<=quest1 && <div>
        <div className="flex justify-between mx-4">
          <div className="flex items-center">
            <Image
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
            <p>
              <span className=" passed-quest1 text-2xl font-extrabold outlinefont">
                {numberOfClicks}
              </span>
              <span className=" text-purple-900 font-semibold">{" "}/ {" "} {quest1}</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className=" text-purple-900 font-semibold">100</p>
            <Image
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
          </div>
        </div>
        <ProgressBar
          score={numberOfClicks*10}
          progressColor="#7A0BA0"
          primaryColor="#ffba07"
          secondaryColor="#ffeea3"
          hideText={true}
          className="text-center"
        />
        </div>
      }
      {
        numberOfClicks >= quest1+1 && numberOfClicks<=quest2 && <div>
        <div className="flex justify-between mx-4">
          <div className="flex items-center">
            <Image
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
            <p>
              <span className=" text-yellow-400 text-2xl font-extrabold outlinefont">
                {numberOfClicks}
              </span>
              <span className=" text-purple-900 font-semibold">/{" "}{quest2}</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-purple-900 font-semibold">100</p>
            <Image
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
          </div>
        </div>
        <ProgressBar
          score={numberOfClicks != 0 ? (numberOfClicks-10)*10: numberOfClicks*5}
          progressColor="#7A0BA0"
          primaryColor="#ffba07"
          secondaryColor="#ffeea3"
          hideText={true}
          className="text-center"
        />
        </div>
      }
      {
        numberOfClicks >= quest2+1 && numberOfClicks<=quest3 && <div>
        <div className="flex justify-between mx-4">
          <div className="flex items-center">
            <Image
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
            <p>
              <span className=" text-yellow-400 text-2xl font-extrabold outlinefont">
                {numberOfClicks}
              </span>
              <span className=" text-purple-900 font-semibold">/{" "}{quest3}</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-purple-900 font-semibold">100</p>
            <Image
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
          </div>
        </div>
        <ProgressBar
          score={numberOfClicks != 0 ? (numberOfClicks-20)*10: numberOfClicks*3.33}
          progressColor="#7A0BA0"
          primaryColor="#ffba07"
          secondaryColor="#ffeea3"
          hideText={true}
          className="text-center"
        />
        </div>
      }
      {
        numberOfClicks >= quest3+1 && numberOfClicks<=quest4 && <div>
        <div className="flex justify-between mx-4">
          <div className="flex items-center">
            <Image
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
            <p>
              <span className=" text-yellow-400 text-2xl font-extrabold outlinefont">
                {numberOfClicks}
              </span>
              <span className=" text-purple-900 font-semibold">/{" "}{quest4}</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-purple-900 font-semibold">100</p>
            <Image
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
          </div>
        </div>
        <ProgressBar
          score={numberOfClicks != 0 ? (numberOfClicks-30)*10: numberOfClicks*2.5}
          progressColor="#7A0BA0"
          primaryColor="#ffba07"
          secondaryColor="#ffeea3"
          hideText={true}
          className="text-center"
        />
        </div>
      }
      {
        numberOfClicks >= quest4+1 && numberOfClicks<=quest5 && <div>
        <div className="flex justify-between mx-4">
          <div className="flex items-center">
            <Image
              src={"/assets/images/hamar2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
            <p>
              <span className=" text-yellow-400 text-2xl font-extrabold outlinefont">
                {numberOfClicks}
              </span>
              <span className=" text-purple-900 font-semibold">/{" "}{quest5}</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-purple-900 font-semibold">100</p>
            <Image
              src={"/assets/images/gem2.png"}
              width={40}
              height={40}
              className="h-6 w-6"
              alt="hamar image"
            />
          </div>
        </div>
        <ProgressBar
          score={numberOfClicks != 0 ? (numberOfClicks-40)*10: numberOfClicks*2}
          progressColor="#7A0BA0"
          primaryColor="#ffba07"
          secondaryColor="#ffeea3"
          hideText={true}
          className="text-center"
        />
        </div>
      }
      
    </div>
  );
};

export default ProgressSection;
