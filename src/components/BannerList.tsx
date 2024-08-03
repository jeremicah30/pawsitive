import Image from "next/image";
import { WaterDog, Brush, Basketball, Bone } from "../../public/assets/images";

const BannerList = () => {
  return (
    <div className="BannerList overflow-hidden py-[50px] relative h-[90vh]">
      <div className="container flex h-[100%]">
        <div className="Banner--text w-40 flex items-center">
          <div className="flex flex-col justify-center items-end">
            <div>
              <h2 className="h2Title">
                Activities and <span>Exercise</span>
              </h2>

              <ul className="font-extra-bold activities flex gap-[20px] py-[10px]">
                <li>
                  <div className="activities--img">
                    <Image src={Bone} alt="Bone" />
                  </div>

                  <p>EAT</p>
                </li>
                <li>
                  <div className="activities--img">
                    <Image src={Basketball} alt="Basketball" />
                  </div>
                  <p>PLAY</p>
                </li>
                <li>
                  <div className="activities--img">
                    <Image src={Brush} alt="Brush" />
                  </div>
                  <p>BRUSH</p>
                </li>
              </ul>

              <p className="py-[20px]">
                Our puppies and other very active dogs have plenty of space to
                run and romp, and comfy blankets.
              </p>

              <div className="flex gap-5">
                <button className="mainButton text-center">VIEW MORE </button>
                <button className="secondaryButton text-center">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="BannerList-img w-60">
          <div className="BannerList--img-yellow flex justify-end">
            <Image
              src={WaterDog}
              alt="Yellow Image"
              className="w-[56%] absolute top-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerList;
