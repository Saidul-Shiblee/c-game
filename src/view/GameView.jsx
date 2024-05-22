"use client";
import ClickCounter from "@/components/ClickCounter";
import LeaderBoardModal from "@/components/LeaderBoardModal";
import Mascots from "@/components/Mascots";
import MascotView from "@/components/MascotView";
import ProgressSection from "@/components/ProgressSection";
import Quest from "@/components/Quest";
import { useGlobalContext } from "@/context/ContextProvider";
import { getCollection, insertCollection } from "@/utils/firebase";
import { getTodayDate } from "@/utils/fuctions";
import { mascots } from "@/utils/local.db";
import React, { useEffect, useState } from "react";
import ct from "countries-and-timezones";


const HomeView = () => {
  const { currentUser } = useGlobalContext();
  const [currentMascot, setCurrentMascot] = useState(mascots[0]);
  const [gameData, setGameData] = useState({});
  const [idle, setIdle] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [delay, setDelay] = useState(true);
  const [isLeaderBoardOpen, setIsLeaderBoardOpen] = useState(false);
  const [totalCount, setTotalCount] = useState({
    mascot1: 0,
    mascot2: 0,
    mascot3: 0,
  });



//Fetch the user data on inital load
  useEffect(() => {
    async function getPlayerData() {
      const [mascot1, mascot2, mascot3, totalPoints] = await Promise.all([
        getCollection(`mascot1_${getTodayDate()}`, currentUser?.uid),
        getCollection(`mascot2_${getTodayDate()}`, currentUser?.uid),
        getCollection(`mascot3_${getTodayDate()}`, currentUser?.uid),
        getCollection("totalPoints", currentUser?.uid),
      ]);

      console.log(mascot1, mascot2, mascot3, totalPoints);
      setGameData({
        mascot1: {
          numberOfClicks: 0,
          point: mascot1?.point || 0,
          quest: mascot1?.quest || 0,
        },
        mascot2: {
          numberOfClicks: 0,
          point: mascot2?.point || 0,
          quest: mascot2?.quest || 0,
        },
        mascot3: {
          numberOfClicks: 0,
          point: mascot3?.point || 0,
          quest: mascot3?.quest || 0,
        },

      });
      setTotalPoints(totalPoints || 0);
  
      setTotalCount({
        mascot1: mascot1?.numberOfClicks||0,
        mascot2: mascot2?.numberOfClicks||0,
        mascot3: mascot3?.numberOfClicks||0,
      });
    }
    if (currentUser) getPlayerData();
  }, [currentUser]);

//Reset counter and save data in data base on satate of being idle
useEffect(()=>{
const saveData=async()=>{
if (idle) {
  if (
    totalCount?.[currentMascot?.version] < gameData?.[currentMascot?.version]?.numberOfClicks
  ) {



         await insertCollection(currentMascot?.version+"_"+getTodayDate(), {
           numberOfClicks: gameData?.[currentMascot?.version]?.numberOfClicks,
           point: gameData?.[currentMascot?.version]?.point,
           quest: gameData?.[currentMascot?.version]?.quest,
           userId: currentUser?.uid,
           username: currentUser?.displayName,
         });

    setTotalCount((pre) => ({
      ...pre,

      [currentMascot?.version]:
        gameData?.[currentMascot?.version]?.numberOfClicks,
    }));
  }
  setGameData((pre) => ({
    mascot1: {
      numberOfClicks: 0,
      point: pre?.mascot1?.point,
      quest: pre.mascot1?.quest,
    },
    mascot2: {
      numberOfClicks: 0,
      point: pre?.mascot2?.point,
      quest: pre?.mascot2?.quest,
    },
    mascot3: {
      numberOfClicks: 0,
      point: pre?.mascot3?.point,
      quest: pre?.mascot3?.quest,
    },
  }));
}
}
saveData()
  },[idle])





  return (
    <div className=" flex justify-center items-center gap-2 relative">
      <ClickCounter gameData={gameData} currentMascot={currentMascot} />

      <Mascots
        currentMascot={currentMascot}
        setCurrentMascot={setCurrentMascot}
        gameData={gameData}
        setTotalPoints={setTotalPoints}
        totalPoints={totalPoints}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        setDelay={setDelay}
        isLeaderBoardOpen={isLeaderBoardOpen}
        setIsLeaderBoardOpen={setIsLeaderBoardOpen}
      />
      <MascotView
        gameData={gameData}
        setGameData={setGameData}
        currentMascot={currentMascot}
        setIdle={setIdle}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        delay={delay}
        setDelay={setDelay}
        setTotalPoints={setTotalPoints}
        totalPoints={totalPoints}
      />

      <Quest
        currentMascot={currentMascot}
        gameData={gameData}
        setGameData={setGameData}
        setTotalPoints={setTotalPoints}
        totalPoints={totalPoints}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
      />

{
  isLeaderBoardOpen && <LeaderBoardModal 
  isLeaderBoardOpen={isLeaderBoardOpen}
  setIsLeaderBoardOpen={setIsLeaderBoardOpen}
  />
}
      <ProgressSection 
      gameData={gameData}
      currentMascot={currentMascot}
      />
      
      
    </div>
  );
};

export default HomeView;
