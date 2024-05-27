import Image from "next/image";
import React from "react";
import { ProgressBar } from "react-progressbar-fancy";
import { gameConfig } from "@/utils/local.db";

const ProgressSection = ({ gameData, currentMascot }) => {
  const quest = gameData?.[currentMascot?.version]?.quest;
  const numberOfClicks = gameData?.[currentMascot?.version]?.numberOfClicks;
  const quest1 = gameConfig.quest1;
  const quest2 = gameConfig.quest2;
  const quest3 = gameConfig.quest3;
  const quest4 = gameConfig.quest4;
  const quest5 = gameConfig.quest5;
  return (
    <div className="absolute bottom-10 w-1/2 mx-auto">
      {
        numberOfClicks >= 0 && numberOfClicks<=quest1?.clicks && <div>
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
              <span className=" text-purple-900 font-semibold">{" "}/ {" "} {quest1?.clicks}</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className=" text-purple-900 font-semibold">{quest1?.points}</p>
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
        numberOfClicks >= quest1?.clicks+1 && numberOfClicks<=quest2?.clicks && <div>
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
              <span className=" text-purple-900 font-semibold">/{" "}{quest2?.clicks}</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-purple-900 font-semibold">{quest2?.points}</p>
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
        numberOfClicks >= quest2?.clicks+1 && numberOfClicks<=quest3?.clicks && <div>
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
              <span className=" text-purple-900 font-semibold">/{" "}{quest3?.clicks}</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-purple-900 font-semibold">{quest3?.points}</p>
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
        numberOfClicks >= quest3?.clicks+1 && numberOfClicks<=quest4?.clicks && <div>
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
              <span className=" text-purple-900 font-semibold">/{" "}{quest4?.clicks}</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-purple-900 font-semibold">{quest4?.points}</p>
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
        numberOfClicks >= quest4?.clicks+1 && numberOfClicks<=quest5?.clicks && <div>
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
              <span className=" text-purple-900 font-semibold">/{" "}{quest5?.clicks}</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className=" text-purple-900 font-semibold">{quest5?.points}</p>
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
