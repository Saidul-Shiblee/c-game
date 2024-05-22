"use client";
import { getTodayMalaysiaDate } from '@/utils/fuctions'; // Ensure this path is correct
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LeaderBoardModal = ({ isLeaderBoardOpen, setIsLeaderBoardOpen }) => {
  const [currentMascotLeaderBoard, setCurrentMascotLeaderBoard] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const malaysiaTime = getTodayMalaysiaDate();
    const endOfDay = new Date(malaysiaTime);
    endOfDay.setHours(23, 59, 59, 999);

    const timeDifference = endOfDay - malaysiaTime;

    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  const handleCloseModal = () => {
    setIsLeaderBoardOpen(false);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto z-[1000] bg-gray-800 opacity-90">
      <div className="bg-light bg-cover h-screen bg-no-repeat w-full">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative bg-leaderboardBg bg-contain bg-no-repeat h-screen w-full">
            <div onClick={handleCloseModal} className="absolute top-20 left-[80%]">
              <Image
                src="/assets/images/x.png"
                width={50}
                height={50}
                className="cursor-pointer"
                alt="x"
              />
            </div>
            <div className="absolute top-1/4 w-[70%] ml-36">
              <ul className="grid gap-3">
                <li className="flex justify-between items-center text-white py-2 px-2 bg-[#9e62b7]">
                  <div className="flex items-center">
                    <Image
                      src="/assets/images/gold.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[39px] h-[40px]"
                      alt="x"
                    />
                    <span className="font-bold outlinefont text-[22px]">MOMOMO 1234</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2 font-bold outlinefont text-[22px]">9,000,000,000</span>
                    <Image
                      src="/assets/images/hamar2.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[39px] h-[40px]"
                      alt="x"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-[22px]">9,000,000,000</span>
                    <Image
                      src="/assets/images/gem.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[20px] h-[20px]"
                      alt="x"
                    />
                  </div>
                </li>
                <li className="flex justify-between items-center text-white py-2 px-2 bg-[#9e62b7]">
                  <div className="flex items-center">
                    <Image
                      src="/assets/images/gold.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[39px] h-[40px]"
                      alt="x"
                    />
                    <span className="font-bold outlinefont text-[22px]">MOMOMO 1234</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2 font-bold outlinefont text-[22px]">9,000,000,000</span>
                    <Image
                      src="/assets/images/hamar2.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[39px] h-[40px]"
                      alt="x"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-[22px]">9,000,000,000</span>
                    <Image
                      src="/assets/images/gem.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[20px] h-[20px]"
                      alt="x"
                    />
                  </div>
                </li>
                <li className="flex justify-between items-center text-white py-2 px-2 bg-[#9e62b7]">
                  <div className="flex items-center">
                    <Image
                      src="/assets/images/gold.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[39px] h-[40px]"
                      alt="x"
                    />
                    <span className="font-bold outlinefont text-[22px]">MOMOMO 1234</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2 font-bold outlinefont text-[22px]">9,000,000,000</span>
                    <Image
                      src="/assets/images/hamar2.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[39px] h-[40px]"
                      alt="x"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-[22px]">9,000,000,000</span>
                    <Image
                      src="/assets/images/gem.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[20px] h-[20px]"
                      alt="x"
                    />
                  </div>
                </li>
                <li className="flex justify-between items-center text-white py-2 px-2 bg-[#9e62b7]">
                  <div className="flex items-center">
                    <Image
                      src="/assets/images/gold.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[39px] h-[40px]"
                      alt="x"
                    />
                    <span className="font-bold outlinefont text-[22px]">MOMOMO 1234</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2 font-bold outlinefont text-[22px]">9,000,000,000</span>
                    <Image
                      src="/assets/images/hamar2.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[39px] h-[40px]"
                      alt="x"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-[22px]">9,000,000,000</span>
                    <Image
                      src="/assets/images/gem.png"
                      width={50}
                      height={50}
                      className="cursor-pointer w-[20px] h-[20px]"
                      alt="x"
                    />
                  </div>
                </li>
                {/* Repeat other list items here */}
              </ul>
            </div>

            <div className="absolute bottom-10 -left-8 flex items-center">
              {currentMascotLeaderBoard === 1 ? (
                <Image
                  src="/assets/images/dog1.png"
                  width={150}
                  height={150}
                  className="cursor-pointer"
                  alt="x"
                />
              ) : (
                <Image
                  src="/assets/images/dog2.png"
                  width={150}
                  height={150}
                  className="cursor-pointer w-28 h-28"
                  onClick={() => setCurrentMascotLeaderBoard(1)}
                  alt="x"
                />
              )}

              {currentMascotLeaderBoard === 2 ? (
                <Image
                  src="/assets/images/dog1.png"
                  width={150}
                  height={150}
                  className="cursor-pointer"
                  alt="x"
                />
              ) : (
                <Image
                  src="/assets/images/dog2.png"
                  width={150}
                  height={150}
                  className="cursor-pointer w-28 h-28"
                  onClick={() => setCurrentMascotLeaderBoard(2)}
                  alt="x"
                />
              )}

              {currentMascotLeaderBoard === 3 ? (
                <Image
                  src="/assets/images/dog1.png"
                  width={150}
                  height={150}
                  className="cursor-pointer"
                  alt="x"
                />
              ) : (
                <Image
                  src="/assets/images/dog3.png"
                  width={150}
                  height={150}
                  className="cursor-pointer w-28 h-28"
                  onClick={() => setCurrentMascotLeaderBoard(3)}
                  alt="x"
                />
              )}
            </div>

            <div className="absolute bottom-20 right-8 ">
              <div className="w-[260px] h-10 bg-purple-900 opacity-80 rounded-[602px] flex justify-between items-center pl-3">
                <h3 className="text-white">{`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}s until reset`}</h3>
                <div>
                  <Image
                    src="/assets/images/timer.png"
                    width={50}
                    height={50}
                    className="cursor-pointer"
                    alt="x"
                  />
                </div>
              </div>
              <h4 className="text-white font-light">Leaderboard refreshes in 17 seconds</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardModal;
