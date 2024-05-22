"use client";

import { removeSession } from "@/actions/authActions";
import { useGlobalContext } from "@/context/ContextProvider";
import { SESSION_COOKIE_NAME } from "@/utils/constants";
import { getCollection } from "@/utils/firebase";
import HomeView from "@/view/GameView";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import navIcon from "./../../public/assets/icons/navIconB.png";
import { ProgressBar } from "react-progressbar-fancy";

export default function Home() {
  const { currentUser } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (typeof currentUser !== "undefined" && !currentUser) {
      removeSession().then(() => router.push("/login"));
    }
  }, [currentUser]);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        removeSession().then(() => router.push("/login"));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full mx-auto bg-clicker-game bg-no-repeat bg-cover h-screen relative cursor-pointer">
      <div className="flex justify-between absolute mt-6">
        <Image
          src={"/assets/images/logo.png"}
          height={50}
          width={50}
          alt="logo"
        />
      </div>
      <div className=" flex justify-between absolute right-0 mt-6">
        {/* <Image
              src={"/assets/images/count1.png"}
              height={150}
              width={200}
              alt="logo"
            /> */}
        {/* <div className="bg-count1 h-[50px] min-w-[200px] w-full bg-no-repeat bg-contain grid items-center justify-start pl-12 text-white text-sm">
          354435
        </div> */}
        <div className="bg-count2 h-[50px] min-w-[200px] w-full bg-no-repeat bg-contain grid items-center justify-start pl-12 text-white text-sm">
          354435
        </div>
        {/* <div className="bg-count2 h-[50px] min-w-[200px] w-full bg-no-repeat bg-contain grid items-center justify-start pl-12 text-white text-sm">
          354435
        </div> */}
        <div className="bg-username h-[60px] min-w-[200px] w-full bg-no-repeat bg-contain grid items-center justify-start pl-14 text-white text-sm">
          tester
        </div>
      </div>
      {/* <button onClick={logout} className=" absolute text-black top-2 w-[100px] right-10 z-50"> Logut</button> */}

      <HomeView />
    
    </div>
  );
}
