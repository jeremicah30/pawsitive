import Link from "next/link";
import Image from "next/image";
import {
  DogIcon,
  CatIcon,
  BrushIcon,
  BoneIcon,
  BallIcon,
  PillIcon,
} from "../../public/assets/images";
import { BsArrowRight } from "react-icons/bs";

const Offers = () => {
  return (
    <div className="offers bg-white py-[100px]">
      <div className="container ">
        <div className="offers--list grid grid-cols-3 gap-x-4 gap-y-[6rem] place-items-center">
          <div className="shadow">
            <div className="offers--list-all offers--list-1 relative">
              <div className="icon absolute bg-white rounded-full p-[10px]">
                <Image src={DogIcon} alt="Cat Icon" className="w-[70px]" />
              </div>
              <div className="text-transform">
                <div className="link-all first-text">
                  <h2>Dog Boarding</h2>
                </div>

                <div className="bottom-text">
                  <div className="link-all second-text">
                    <h2>Dog Boarding</h2>
                  </div>

                  <Link href="/" className="items-center link-all third-text">
                    <span>View more</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="offers--list-all offers--list-2 relative">
              <div className="icon absolute bg-white rounded-full p-[10px]">
                <Image src={CatIcon} alt="Cat Icon" className="w-[70px]" />
              </div>
              <div className="text-transform">
                <div className="link-all first-text">
                  <h2>Cat Boarding</h2>
                </div>

                <div className="bottom-text">
                  <div className="link-all second-text">
                    <h2>Cat Boarding</h2>
                  </div>

                  <Link href="/" className="items-center link-all third-text">
                    <span>View more</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="offers--list-all offers--list-3 relative">
              <div className="icon absolute bg-white rounded-full p-[10px]">
                <Image src={BrushIcon} alt="Cat Icon" className="w-[70px]" />
              </div>
              <div className="text-transform">
                <div className="link-all first-text">
                  <h2>Pet Spa and Grooming</h2>
                </div>

                <div className="bottom-text">
                  <div className="link-all second-text">
                    <h2>Pet Spa and Grooming</h2>
                  </div>

                  <Link href="/" className="items-center link-all third-text">
                    <span>View more</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="offers--list-all offers--list-4 relative">
              <div className="icon absolute bg-white rounded-full p-[10px]">
                <Image src={BoneIcon} alt="Cat Icon" className="w-[70px]" />
              </div>
              <div className="text-transform">
                <div className="link-all first-text">
                  <h2>Healthy Meals</h2>
                </div>

                <div className="bottom-text">
                  <div className="link-all second-text">
                    <h2>Healthy Meals</h2>
                  </div>

                  <Link href="/" className="items-center link-all third-text">
                    <span>View more</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="offers--list-all offers--list-5 relative">
              <div className="icon absolute bg-white rounded-full p-[10px]">
                <Image src={BallIcon} alt="Cat Icon" className="w-[70px]" />
              </div>
              <div className="text-transform">
                <div className="link-all first-text">
                  <h2>Activity Exercise</h2>
                </div>

                <div className="bottom-text">
                  <div className="link-all second-text">
                    <h2>Activity Exercise</h2>
                  </div>

                  <Link href="/" className="items-center link-all third-text">
                    <span>View more</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="offers--list-all offers--list-6 relative">
              <div className="icon absolute bg-white rounded-full p-[10px]">
                <Image src={PillIcon} alt="Cat Icon" className="w-[70px]" />
              </div>
              <div className="text-transform">
                <div className="link-all first-text">
                  <h2>Veterinary Service</h2>
                </div>

                <div className="bottom-text">
                  <div className="link-all second-text">
                    <h2>Veterinary Service</h2>
                  </div>

                  <Link href="/" className="items-center link-all third-text">
                    <span>View more</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offers;
