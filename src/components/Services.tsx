import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { HouseLogo } from "../../public/assets/images";
import CountUpOnScroll from "../components/CountUpOnScroll";
import { Waypoint } from "react-waypoint";

function Services() {
  return (
    <div className="services">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1200"
      >
        <div className="services--content flex">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1800"
            className="services--content--testimonial w-full flex flex-col ml-28 pr-24 justify-center"
          >
            <h6 className="uppercase font-bold text-mainFC">Bring your pet</h6>
            <h2 className="text-5xl font-extrabold text-gray-900 my-6">
              The Best Choice
            </h2>
            <p>
              We take the responsibility of caring for pets very seriously. They
              are members of your family
            </p>
            <div className="btn-wrapper">
              <button className="mainButton my-6">Get Quote</button>
            </div>
          </div>
          <div className="first-service pricing--content w-full flex flex-col justify-center">
            <p className="text-mainFC font-bold uppercase">Pet Care</p>
            <h2 className="text-4xl font-extrabold text-gray-900 my-3">
              1 Day
            </h2>
            <Image src={HouseLogo} width="80" height="80" alt="house" />
            <ul>
              <li className="my-3 flex justify-between items-center">
                <p>Double Room</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Socialise</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Brush</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Pet TV</p>
                <FontAwesomeIcon icon={faXmark} />
              </li>
            </ul>
            <div className="text-5xl font-extrabold text-gray-900 my-3 flex">
              <span className="text-2xl">$</span>
              <CountUpOnScroll start={0} end={50} duration={2} />
            </div>
          </div>
          <div className="second-service pricing--content w-full flex flex-col justify-center text-white">
            <p className="font-bold uppercase">Pet Care</p>
            <h2 className="text-4xl font-extrabold my-3">10 Days</h2>
            <Image src={HouseLogo} width="80" height="80" alt="house" />
            <ul>
              <li className="my-3 flex justify-between items-center">
                <p>Single Room</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Socialise Exercise</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Custom Meals</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Spa and Grooming</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
            </ul>
            <div className="text-5xl font-extrabold my-3 flex">
              <span className="text-2xl">$</span>
              <CountUpOnScroll start={0} end={350} duration={2} />
            </div>
          </div>
          <div className="third-service pricing--content w-full flex flex-col justify-center">
            <p className="text-mainFC font-bold uppercase">Pet Care</p>
            <h2 className="text-4xl font-extrabold text-gray-900 my-3">
              20 Days
            </h2>
            <Image src={HouseLogo} width="80" height="80" alt="house" />
            <ul>
              <li className="my-3 flex justify-between items-center">
                <p>Single Room</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Exercise 2x</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Custom Meals</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
              <li className="my-3 flex justify-between items-center">
                <p>Grooming 2x</p>
                <FontAwesomeIcon className="text-green-600" icon={faCheck} />
              </li>
            </ul>
            <div className="text-5xl font-extrabold text-gray-900 my-3 flex">
              <span className="text-2xl">$</span>
              <CountUpOnScroll start={0} end={550} duration={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
