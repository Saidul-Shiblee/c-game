"use client";
import { useGlobalContext } from "@/context/ContextProvider";
import { insertCollection } from "@/utils/firebase";
import { getTodayDate } from "@/utils/fuctions";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import ClickCounter from "./ClickCounter";
import WarningModal from "./WarningModal";

import initailMascot from '../../public/assets/images/initial_mascot.png'
import delayBg from "../../public/assets/images/delayBg.png";
import { gameConfig } from "@/utils/local.db";

const MascotView = ({
  setGameData,
  currentMascot,
  setTotalCount,
  totalCount,
  setIdle,
  delay,
  setDelay,
  gameData,
  timeRemaining
}) => {



  const [isOPen, setIsOPen] = useState(false);

  const [showSecondImage, setShowSecondImage] = useState(false);
  const [time, setTime] = useState(5);

  const onClose=()=>{setIsOPen(false)}

  const [mascotSound] = useSound(currentMascot?.sound);
  const { currentUser } = useGlobalContext();
  const timerRef = useRef(null);

  const numberOfClicks = gameData?.[currentMascot?.version]?.numberOfClicks;
  const quest1 = gameConfig.quest1;
  const quest2 = gameConfig.quest2;
  const quest3 = gameConfig.quest3;
  const quest4 = gameConfig.quest4;
  const quest5 = gameConfig.quest5;

  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [time]);
  useEffect(() => {
    setTimeout(() => setDelay(false), 5000);
    setTime(5);
  }, [currentMascot?.version]);
  

  const handleStart = () => {
    setIdle(false); // Reset idle state when the user interacts
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIdle(true); // Set idle state to true after 5 seconds of inactivity
    }, 5000);
  };

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIdle(true); // Set idle state to true when the user is idle for 5 seconds
      }, 5000);
    };
    document.addEventListener("mousedown", resetTimer); // Listen for mouse button press
    return () => {
      document.removeEventListener("mousedown", resetTimer);
    };
  }, []);

  const handleMouseDown = () => {
      
    if(timeRemaining.hours ==0 && timeRemaining.minutes ==0 && timeRemaining.seconds ==0){
      setGameData((pv)=>({
        mascot1: {
          numberOfClicks: 0,
          point:  0,
          quest:  0,
        },
        mascot2: {
          numberOfClicks: 0,
          point:  0,
          quest:0,
        },
        mascot3: {
          numberOfClicks: 0,
          point: 0,
          quest: 0,
        },
        totalPoints: pv.totalPoints
      }));
      setIsOPen(true)
      return
    }

    handleStart()
    setShowSecondImage(true);
    setGameData((pre) => {
      const saveData = async () => {
        if (pre[currentMascot.version]?.numberOfClicks + 1 === quest1?.clicks && pre[currentMascot.version]?.quest < 1) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+quest1?.points,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });
          await insertCollection("totalPoints", {
            points: pre.totalPoints+quest1?.points,
            userId: currentUser?.uid,
          })
         
   
        }
        if (pre[currentMascot.version]?.numberOfClicks + 1 === quest2?.clicks && pre[currentMascot.version]?.quest < 2) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+quest2?.points,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });

          await insertCollection("totalPoints", {
            points: pre.totalPoints+quest2?.points,
            userId: currentUser?.uid,
          })
       
        }
        if (pre[currentMascot.version]?.numberOfClicks + 1 === quest3?.clicks && pre[currentMascot.version]?.quest < 3) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+quest3?.points,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });

          await insertCollection("totalPoints", {
            points: pre.totalPoints+quest3?.points,
            userId: currentUser?.uid,
          })
         
        }
        if (pre[currentMascot.version]?.numberOfClicks + 1 === quest4?.clicks && pre[currentMascot.version]?.quest < 4) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+quest4?.points,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });
          await insertCollection("totalPoints", {
            points: pre.totalPoints+quest4?.points,
            userId: currentUser?.uid,
          })
          
        }
        if (pre[currentMascot.version]?.numberOfClicks + 1 === quest5?.clicks && pre[currentMascot.version]?.quest < 5) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+quest5?.points,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });
    
          await insertCollection("totalPoints", {
            points: pre.totalPoints+quest5?.points,
            userId: currentUser?.uid,
          })
         
        }
      };
      saveData()
      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === quest1?.clicks &&
        totalCount?.[currentMascot?.version] <= quest1?.clicks
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: quest1?.clicks,
        }));
      }
      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === quest2?.clicks &&
        totalCount?.[currentMascot?.version] <= quest2?.clicks
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: quest2?.clicks,
        }));
      }

      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === quest3?.clicks &&
        totalCount?.[currentMascot?.version] <= quest3?.clicks
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: quest3?.clicks,
        }));
      }
      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === quest4?.clicks &&
        totalCount?.[currentMascot?.version] <= quest4?.clicks
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: quest4?.clicks,
        }));
      }
      
      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === quest5?.clicks &&
        totalCount?.[currentMascot?.version] <= quest5?.clicks
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: quest5?.clicks,
        }));
      }


        return {
          ...pre,
          [currentMascot.version]: {
            ...pre[currentMascot.version],
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest1?.clicks &&
            pre[currentMascot.version]?.quest <= 1
              ? {
                  quest: 1,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest2?.clicks &&
            pre[currentMascot.version]?.quest <= 2
              ? {
                  quest: 2,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest3?.clicks &&
            pre[currentMascot.version]?.quest <= 3
              ? {
                  quest: 3,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest4?.clicks &&
            pre[currentMascot.version]?.quest <= 4
              ? {
                  quest: 4,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest5?.clicks &&
            pre[currentMascot.version]?.quest <= 5
              ? {
                  quest: 5,
                }
              : {}),

            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest1?.clicks &&
            pre[currentMascot.version]?.quest <= 0
              ? {
                  point: quest1?.points,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest2?.clicks &&
            pre[currentMascot.version]?.quest <= 1
              ? {
                  point: quest2?.points,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest3?.clicks &&
            pre[currentMascot.version]?.quest <= 2
              ? {
                  point: quest3?.points,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest4?.clicks &&
            pre[currentMascot.version]?.quest <= 3
              ? {
                  point: quest4?.points,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === quest5?.clicks &&
            pre[currentMascot.version]?.quest <= 4
              ? {
                  point: quest5?.points,
                }
              : {}),
          },
          totalPoints:
          pre[currentMascot.version]?.numberOfClicks + 1 === quest1?.clicks && pre[currentMascot.version]?.quest <= 0 ? pre.totalPoints+quest1?.points
          :
          pre[currentMascot.version]?.numberOfClicks + 1 === quest2?.clicks &&  pre[currentMascot.version]?.quest <= 1 ? pre.totalPoints+quest2?.points
          :
          pre[currentMascot.version]?.numberOfClicks + 1 === quest3?.clicks && pre[currentMascot.version]?.quest <= 2 ? pre.totalPoints+quest3?.points
          :
          pre[currentMascot.version]?.numberOfClicks + 1 === quest4?.clicks && pre[currentMascot.version]?.quest <= 3 ? pre.totalPoints+quest4?.points
          :
          pre[currentMascot.version]?.numberOfClicks + 1 === quest5?.clicks && pre[currentMascot.version]?.quest <= 4 ? pre.totalPoints+quest5?.points
          :pre.totalPoints
        };
    });

    mascotSound();
  };

  const handleMouseUp = () => {
    setShowSecondImage(false);
  };

  let currentImage;

  if (numberOfClicks < 0) {
    currentImage = currentMascot?.initialImg;
  } else if (numberOfClicks >= 1 && numberOfClicks < quest1?.clicks) {
    currentImage = currentMascot?.image2;
  } else if (numberOfClicks >= quest1?.clicks && numberOfClicks < quest2?.clicks) {
    currentImage = currentMascot?.image4;
  } else if (numberOfClicks >= quest2?.clicks && numberOfClicks < quest3?.clicks) {
    currentImage = currentMascot?.image6;
  } else if (numberOfClicks >= quest3?.clicks && numberOfClicks < quest4?.clicks) {
    currentImage = currentMascot?.image8;
  } else {
    currentImage = currentMascot?.image8;
  }

  let secondaryImg;
  if (numberOfClicks <= 0) {
    secondaryImg = currentMascot?.initialImg;
  } else if (numberOfClicks >= 1 && numberOfClicks < quest1?.clicks) {
    secondaryImg = currentMascot?.image1;
  } else if (numberOfClicks >= quest1?.clicks && numberOfClicks < quest2?.clicks) {
    secondaryImg = currentMascot?.image3;
  } else if (numberOfClicks >= quest2?.clicks && numberOfClicks < quest3?.clicks) {
    secondaryImg = currentMascot?.image5;
  } else if (numberOfClicks >= quest3?.clicks && numberOfClicks < quest4?.clicks) {
    secondaryImg = currentMascot?.image7;
  } else if (numberOfClicks >= quest4?.clicks) {
    secondaryImg = currentMascot?.image7;
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="cursor-pointer flex justify-center items-center h-screen w-[40%] select-none bottom-0"
    >

<div className={`${delay? "hidden": "block"}`}>
<ClickCounter gameData={gameData} currentMascot={currentMascot} />
</div>
      {delay ? (
        <div role="status" className="relative">
        
           <Image
              priority={true}
              src={delayBg}
              width={217}
              height={217}
              alt="Game mascot"
              className="spin-180"
            
            />
            <h3 className="text-[100px] absolute top-[17%] left-[40%] text-white">{time}</h3>
        </div>
      ) : (
      
            <Image
              priority={true}
              src={showSecondImage ? currentImage : secondaryImg}
              alt="Game mascot"
              className="select-none object-cover absolute bottom-0"
              width={930}
              height={1145}
            />
          
      )}


      <>
     

      
      </>

      <WarningModal isOpen={isOPen} onClose={onClose}/>
    </div>
  );
};

export default MascotView;

