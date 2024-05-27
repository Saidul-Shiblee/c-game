import Image from 'next/image';
import dog1 from "../../public/assets/images/catv1.png"
import dog2 from "../../public/assets/images/mascott_v1.png"
import dog3 from "../../public/assets/images/catIv2.png"
import dog4 from "../../public/assets/images/cath2.png"
import dog5 from "../../public/assets/images/catIv3.png"
import dog6 from "../../public/assets/images/cathv3.png"
import dog7 from "../../public/assets/images/catIv4.png"
import dog8 from "../../public/assets/images/cathv5.png"
import delayBg from "../../public/assets/images/delayBg.png"

const PublicImages = () => {
    return (
        <div>
             <Image
              priority={true}
              src={dog1}
              alt="Game mascot"
              className="hidden"
            
            />
      <Image
              priority={true}
              src={dog2}
              alt="Game mascot"
              className="hidden"
            
            />
      <Image
              priority={true}
              src={dog3}
              alt="Game mascot"
              className="hidden"
            
            />
      <Image
              priority={true}
              src={dog4}
              alt="Game mascot"
              className="hidden"
            
            />
      <Image
              priority={true}
              src={dog5}
              alt="Game mascot"
              className="hidden"
            
            />
      <Image
              priority={true}
              src={dog6}
              alt="Game mascot"
              className="hidden"
            
            />
      <Image
              priority={true}
              src={dog7}
              alt="Game mascot"
              className="hidden"
            
            />
      <Image
              priority={true}
              src={dog8}
              alt="Game mascot"
              className="hidden"
            
            />
      <Image
              priority={true}
              src={delayBg}
              alt="Game mascot"
              className="hidden"
            
            />
        </div>
    );
};

export default PublicImages;