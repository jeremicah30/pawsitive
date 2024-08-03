import { Yellow, Ball, PetFood, Stick } from "../../public/assets/images";
import Image from "next/image";

const KeepHappy = () => {
  return (
    <div className="keepHappy overflow-hidden h-[90vh] relative">
      <div className="container flex h-[100%]">
        <div className="keepHappy-img w-60">
          <div className="keepHappy--img-yellow">
            <Image
              src={Yellow}
              alt="Yellow Image"
              className="w-[56%] absolute left-0 top-0"
            />
          </div>

          <div className="relative">
            <div className="keepHappy--img-floating flex absolute top-0 left-0 w-full h-screen">
              <div
                className="absolute top-[19%] left-[3%]"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
              >
                <span>
                  <Image src={Ball} alt="Ball" />
                </span>
              </div>

              <div
                className="absolute top-[42%] left-[18%]"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <span>
                  <Image src={Stick} alt="Stick" />
                </span>
              </div>

              <div
                className="absolute top-[19%] right-[6%]"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <span>
                  <Image src={PetFood} alt="PetFood" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="Banner--text w-40 flex items-center">
          <div>
            <h2 className="h2Title ">
              We can keep <span>them happy</span>
            </h2>

            <p className="py-[20px]">
              From the time our friends sniff their way through the door in the
              morning until they wag their weary, but satisfied tails out in the
              afternoon, we cater to their nature.
            </p>

            <div>
              <button className="mainButton text-center">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeepHappy;
