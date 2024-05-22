import { mascots } from "@/utils/local.db";
import Image from "next/image";
import React, { useState } from "react";

const Mascots = ({
  currentMascot,
  setCurrentMascot,
  gameData,
  setDelay,
  isLeaderBoardOpen,
  setIsLeaderBoardOpen,
}) => {
  // const handleOpen = () => {
  //   setIsLeaderBoardOpen(true);
  // }
  const [isModalOpen, setIModalOpen] = useState(true);
  const closeModal = () => {
    setIModalOpen(false);
  };

  return (
    <div className="grid gap-4 ml-14 mt-16 w-[20%] ">
      {/* mascot 1 */}
      <div>
        {currentMascot.version === mascots[0].version ? (
          <div className=" bg-activeDogBg bg-no-repeat bg-contain lg:w-full h-[100px] relative rotate-[18deg]	">
            <Image
              src={"/assets/images/activeDog.png"}
              className="absolute -top-14"
              width={130}
              height={196}
              alt="Dog"
            />
            {/* <div className="text-center text-white text-3xl font-normal font-LuckiestGuy">DOG</div> */}
            <Image
              src={"/assets/images/DOG.png"}
              className="absolute left-32 bottom-[30%]"
              width={60}
              height={136}
              alt="Dog"
            />
            <p className="absolute right-20 bottom-[20%] text-yellow-700 font-semibold">
              {gameData?.mascot1?.quest}/5
            </p>
          </div>
        ) : (
          <div
            onClick={() => {
              setCurrentMascot(mascots[0]);
              setDelay(true);
            }}
            className=" bg-initialDogBg bg-no-repeat bg-contain w-[200px] h-[100px] relative rotate-[20deg] -mr-20"
          >
            <Image
              src={"/assets/images/initialDog.png"}
              className="absolute -top-8 -right-4"
              width={100}
              height={156}
              alt="Dog"
            />
            <Image
              src={"/assets/images/dog_2.png"}
              className="absolute left-7 bottom-[45%]"
              width={60}
              height={156}
              alt="Dog"
            />
            <p className="absolute right-16 bottom-[35%] text-purple-900 font-normal">
              {gameData?.mascot1?.quest}/5
            </p>
          </div>
        )}
      </div>

      {/* mascot 2  */}
      <div>
        {currentMascot.version === mascots[1].version ? (
          <div className=" bg-activeDogBg bg-no-repeat bg-contain w-[300px] h-[100px] relative rotate-8	-ml-12 mb-5">
            <Image
              src={"/assets/images/activeDog.png"}
              className="absolute -top-14"
              width={130}
              height={196}
              alt="Dog"
            />
            <Image
              src={"/assets/images/DOG.png"}
              className="absolute left-32 bottom-[33%]"
              width={50}
              height={196}
              alt="Dog"
            />
            <p className="absolute right-20 bottom-[20%] text-yellow-700 font-semibold">
              {gameData?.mascot2?.quest}/5
            </p>
          </div>
        ) : (
          <div
            onClick={() => {
              setCurrentMascot(mascots[1]);
              setDelay(true);
            }}
            className="  bg-initialDogBg bg-no-repeat bg-contain w-[200px] h-[100px] relative	-ml-8"
          >
            <Image
              src={"/assets/images/initialDog.png"}
              className="absolute -top-8 -right-4"
              width={100}
              height={156}
              alt="Dog"
            />
            <Image
              src={"/assets/images/dog_2.png"}
              className="absolute left-7 bottom-[45%]"
              width={60}
              height={156}
              alt="Dog"
            />
            <p className="absolute right-16 bottom-[35%] text-purple-900 font-normal">
              {gameData?.mascot2?.quest}/5
            </p>
          </div>
        )}
      </div>
      {/* mascot 3  */}
      <div>
        {currentMascot.version === mascots[2].version ? (
          <div className=" bg-activeDogBg bg-no-repeat bg-contain w-[300px] h-[100px] relative -rotate-[18deg]	">
            <Image
              src={"/assets/images/activeDog.png"}
              className="absolute -left-5 -top-14"
              width={130}
              height={196}
              alt="Dog"
            />
            <Image
              src={"/assets/images/DOG.png"}
              className="absolute left-24 bottom-[25%]"
              width={80}
              height={196}
              alt="Dog"
            />
            <p className="absolute right-20 bottom-[20%] text-yellow-700 font-semibold">
              {gameData?.mascot3?.quest}/5
            </p>
          </div>
        ) : (
          <div
            onClick={() => {
              setCurrentMascot(mascots[2]);
              setDelay(true);
            }}
            className=" bg-initialDogBg bg-no-repeat bg-contain w-[200px] h-[100px] relative -rotate-[20deg]"
          >
            <Image
              src={"/assets/images/initialDog.png"}
              className="absolute -top-8 -right-4"
              width={100}
              height={196}
              alt="Dog"
            />
            <Image
              src={"/assets/images/dog_2.png"}
              className="absolute left-7 bottom-[45%]"
              width={60}
              height={156}
              alt="Dog"
            />
            <p className="absolute right-16 bottom-[35%] text-purple-900 font-semibold">
              {gameData?.mascot3?.quest}/5
            </p>
          </div>
        )}
      </div>

      <div>
        <Image
          src={"/assets/images/leaderboardbtn.png"}
          className=" select-none -rotate-[20deg] -ml-20"
          onClick={() => setIsLeaderBoardOpen(true)}
          width={260}
          height={180}
          alt="leaderboard"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Mascots;
