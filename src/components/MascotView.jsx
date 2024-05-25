"use client";
import { useGlobalContext } from "@/context/ContextProvider";
import { insertCollection } from "@/utils/firebase";
import { getTodayDate } from "@/utils/fuctions";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import useSound from "use-sound";
import ClickCounter from "./ClickCounter";
import WarningModal from "./WarningModal";

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

  const onClose=()=>{setIsOPen(false)}

  const [mascotSound] = useSound(currentMascot?.sound);
  const { currentUser } = useGlobalContext();
  const timerRef = useRef(null);

  const numberOfClicks = gameData?.[currentMascot?.version]?.numberOfClicks;

  useEffect(() => {
    setTimeout(() => setDelay(false), 2000);
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
        if (pre[currentMascot.version]?.numberOfClicks + 1 === 10 && pre[currentMascot.version]?.quest < 1) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+100,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });
          await insertCollection("totalPoints", {
            points: pre.totalPoints+100,
            userId: currentUser?.uid,
          })
         
   
        }
        if (pre[currentMascot.version]?.numberOfClicks + 1 === 20 && pre[currentMascot.version]?.quest < 2) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+100,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });

          await insertCollection("totalPoints", {
            points: pre.totalPoints+100,
            userId: currentUser?.uid,
          })
       
        }
        if (pre[currentMascot.version]?.numberOfClicks + 1 === 30 && pre[currentMascot.version]?.quest < 3) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+100,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });

          await insertCollection("totalPoints", {
            points: pre.totalPoints+100,
            userId: currentUser?.uid,
          })
         
        }
        if (pre[currentMascot.version]?.numberOfClicks + 1 === 40 && pre[currentMascot.version]?.quest < 4) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+100,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });
          await insertCollection("totalPoints", {
            points: pre.totalPoints+100,
            userId: currentUser?.uid,
          })
          
        }
        if (pre[currentMascot.version]?.numberOfClicks + 1 === 50 && pre[currentMascot.version]?.quest < 5) {
          await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            point: pre[currentMascot.version]?.point+100,
            quest: pre[currentMascot.version]?.quest+1,
            userId: currentUser?.uid,
            username: currentUser?.displayName,
          });
    
          await insertCollection("totalPoints", {
            points: pre.totalPoints+100,
            userId: currentUser?.uid,
          })
         
        }
      };
      saveData()
      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === 10 &&
        totalCount?.[currentMascot?.version] <= 10
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: 10,
        }));
      }
      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === 20 &&
        totalCount?.[currentMascot?.version] <= 20
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: 20,
        }));
      }

      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === 30 &&
        totalCount?.[currentMascot?.version] <= 30
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: 30,
        }));
      }
      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === 40 &&
        totalCount?.[currentMascot?.version] <= 40
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: 40,
        }));
      }
      
      if (
        pre[currentMascot.version]?.numberOfClicks + 1 === 50 &&
        totalCount?.[currentMascot?.version] <= 50
      ) {
        setTotalCount((pre) => ({
          ...pre,
          [currentMascot?.version]: 50,
        }));
      }


        return {
          ...pre,
          [currentMascot.version]: {
            ...pre[currentMascot.version],
            numberOfClicks: pre[currentMascot.version]?.numberOfClicks + 1,
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 10 &&
            pre[currentMascot.version]?.quest <= 1
              ? {
                  quest: 1,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 20 &&
            pre[currentMascot.version]?.quest <= 2
              ? {
                  quest: 2,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 30 &&
            pre[currentMascot.version]?.quest <= 3
              ? {
                  quest: 3,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 40 &&
            pre[currentMascot.version]?.quest <= 4
              ? {
                  quest: 4,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 50 &&
            pre[currentMascot.version]?.quest <= 5
              ? {
                  quest: 5,
                }
              : {}),

            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 10 &&
            pre[currentMascot.version]?.quest <= 0
              ? {
                  point: 100,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 20 &&
            pre[currentMascot.version]?.quest <= 1
              ? {
                  point: 200,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 30 &&
            pre[currentMascot.version]?.quest <= 2
              ? {
                  point: 300,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 40 &&
            pre[currentMascot.version]?.quest <= 3
              ? {
                  point: 400,
                }
              : {}),
            ...(pre[currentMascot.version]?.numberOfClicks + 1 === 50 &&
            pre[currentMascot.version]?.quest <= 4
              ? {
                  point: 500,
                }
              : {}),
          },
          totalPoints:
          pre[currentMascot.version]?.numberOfClicks + 1 === 10 && pre[currentMascot.version]?.quest <= 0 ? pre.totalPoints+100
          :
          pre[currentMascot.version]?.numberOfClicks + 1 === 20 &&  pre[currentMascot.version]?.quest <= 1 ? pre.totalPoints+100
          :
          pre[currentMascot.version]?.numberOfClicks + 1 === 30 && pre[currentMascot.version]?.quest <= 2 ? pre.totalPoints+100
          :
          pre[currentMascot.version]?.numberOfClicks + 1 === 40 && pre[currentMascot.version]?.quest <= 3 ? pre.totalPoints+100
          :
          pre[currentMascot.version]?.numberOfClicks + 1 === 50 && pre[currentMascot.version]?.quest <= 4 ? pre.totalPoints+100
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
  } else if (numberOfClicks >= 1 && numberOfClicks < 10) {
    currentImage = currentMascot?.image2;
  } else if (numberOfClicks >= 10 && numberOfClicks < 20) {
    currentImage = currentMascot?.image4;
  } else if (numberOfClicks >= 20 && numberOfClicks < 30) {
    currentImage = currentMascot?.image6;
  } else if (numberOfClicks >= 30 && numberOfClicks < 40) {
    currentImage = currentMascot?.image8;
  } else {
    currentImage = currentMascot?.image8;
  }

  let secondaryImg;
  if (numberOfClicks <= 0) {
    secondaryImg = currentMascot?.initialImg;
  } else if (numberOfClicks >= 1 && numberOfClicks < 10) {
    secondaryImg = currentMascot?.image1;
  } else if (numberOfClicks >= 10 && numberOfClicks < 20) {
    secondaryImg = currentMascot?.image3;
  } else if (numberOfClicks >= 20 && numberOfClicks < 30) {
    secondaryImg = currentMascot?.image5;
  } else if (numberOfClicks >= 30 && numberOfClicks < 40) {
    secondaryImg = currentMascot?.image7;
  } else if (numberOfClicks >= 40) {
    secondaryImg = currentMascot?.image7;
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="cursor-pointer flex justify-center items-center h-screen w-[40%] select-none bottom-0"
    >

<ClickCounter gameData={gameData} currentMascot={currentMascot} />
      
      
            <Image
           priority={true}
              src={showSecondImage ? currentImage : secondaryImg}
              alt="Game mascot"
              className="select-none"
             
            />
          
     

      <WarningModal isOpen={isOPen} onClose={onClose}/>
    </div>
  );
};

export default MascotView;

