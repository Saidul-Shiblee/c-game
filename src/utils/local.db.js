

import dog1 from "../../public/assets/images/catv1.png"
import dog2 from "../../public/assets/images/mascott_v1.png"
import dog3 from "../../public/assets/images/catIv2.png"
import dog4 from "../../public/assets/images/cath2.png"
import dog5 from "../../public/assets/images/catIv3.png"
import dog6 from "../../public/assets/images/cathv3.png"
import dog7 from "../../public/assets/images/catIv4.png"
import dog8 from "../../public/assets/images/cathv5.png"
import initailMascot from '../../public/assets/images/initial_mascot.png'

export const mascots = [
  {
    version: "mascot1",
    initialImg: initailMascot,
    image1: dog1,
    image2: dog2,
    image3: dog3,
    image4: dog4,
    image5: dog5,
    image6: dog6,
    image7: dog7,
    image8: dog8,
    sound:'/sounds/mascot.wav'
  },
  {
    version: "mascot2",
    initialImg: initailMascot,
    image1: dog1,
    image2: dog2,
    image3: dog3,
    image4: dog4,
    image5: dog5,
    image6: dog6,
    image7: dog7,
    image8: dog8,
    sound: '/sounds/ping1.mp3'
  },
  {
    version: "mascot3",
    initialImg: initailMascot,
    image1: dog1,
    image2: dog2,
    image3: dog3,
    image4: dog4,
    image5: dog5,
    image6: dog6,
    image7: dog7,
    image8: dog8,
    sound: '/sounds/ping2.mp3'
  },
];




export const gameConfig={
  quest1:{
    clicks:10,
    points:100
  },
  quest2:{
    clicks:20,
    points:100
  },
  quest3:{
    clicks:30,
    points:100
  },
  quest4:{
    clicks:40,
    points:100
  },
  quest5:{
    clicks:50,
    points:100
  }
}

export const pointsForPosition = [500, 400, 300,200,100];