import Image from "next/image";
import {
  WomanAndDogs,
  BallIcon,
  ClockIcon,
  BoneNumber,
} from "../../public/assets/images";
import Link from "next/link";

const Time = () => {
  return (
    <div className="Time overflow-hidden relative h-[100vh]">
      <div className="container flex h-[100%]">
        <div className="Banner--text w-40 flex items-center">
          <div className="flex flex-col justify-center items-end">
            <div className="">
              <h2 className="h2Title">
                Check-in <span>Time</span>
              </h2>

              <div className="schedule flex flex-col gap-[30px] pt-12">
                <div className="schedule--time flex items-center gap-4">
                  <Image src={ClockIcon} alt="Clock Icon" className="w-[12%]" />

                  <div className="schedule--time-content">
                    <Link
                      href="/"
                      className="text-mainFC uppercase text-[17.6px] font-bold leading-[24.64px]"
                    >
                      from 8 am to 10 pm
                    </Link>

                    <p className="text-[.5rem]">
                      Timings are drop off after 8am and collection is before
                      10am on the morning of going home.
                    </p>
                  </div>
                </div>

                <div className="schedule--play flex items-center gap-4">
                  <Image src={BallIcon} alt="Clock Icon" className="w-[12%]" />

                  <div className="schedule--time-content">
                    <Link
                      href="/"
                      className="text-mainFC uppercase text-[17.6px] font-bold leading-[24.64px]"
                    >
                      FAVOURITE TOYS
                    </Link>

                    <p className="text-[.5rem]">
                      If your dog has separation anxiety we encourage you to
                      bring something that smells like home.
                    </p>
                  </div>
                </div>

                <Link className="banner_btn" href="#">
                  <Image src={BoneNumber} alt="Button" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="Time-img w-60">
          <div className="Time--img-yellow flex justify-end">
            <Image
              src={WomanAndDogs}
              alt="Yellow Image"
              className="w-[56%] absolute top-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Time;
